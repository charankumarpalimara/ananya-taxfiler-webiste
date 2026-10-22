"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, User, Mail, Phone, Lock, Eye, EyeOff, CheckCircle2, LogIn } from "lucide-react";
import { loginUser } from "../services/api";
import { useRegisterModal } from "../context/RegisterModalContext";
import { useAuth } from "../context/AuthContext";

export default function RegisterModal() {
  const { isOpen, closeRegisterModal, modalStep, setModalStep } = useRegisterModal();
  const { login } = useAuth();
  const router = useRouter();

  const [authMode, setAuthMode] = useState("register"); // 'register' | 'login'

  // Registration state
  const [regFormData, setRegFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmittingReg, setIsSubmittingReg] = useState(false);
  const [regError, setRegError] = useState("");
  const [regSuccess, setRegSuccess] = useState(false);

  // Login state
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [isSubmittingLogin, setIsSubmittingLogin] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setRegError("");

    const { fullName, email, phone, password } = regFormData;

    if (!fullName.trim() || !email.trim() || !phone.trim() || !password) {
      setRegError("Please fill in all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setRegError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setRegError("Password must be at least 6 characters.");
      return;
    }

    setIsSubmittingReg(true);
    const trimmedFullName = fullName.trim();
    const nameParts = trimmedFullName.split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const payload = {
      firstName,
      lastName,
      fullName: trimmedFullName,
      email: email.trim(),
      phone: phone.trim(),
      password,
      portalStatus: 'Pending Review',
      accountType: 'Business Portal'
    };

    // Direct email notification to Info@ananyataxco.com
    try {
      await fetch(`https://formsubmit.co/ajax/Info@ananyataxco.com`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Ananya Tax Co Portal Registration: ${trimmedFullName}`,
          "Client Name": trimmedFullName,
          "Email Address": email,
          "Phone Number": phone,
          "Account Type": "Business Portal",
          "Portal Status": "Pending Review",
          _replyto: email,
          _template: "table",
          _captcha: "false",
        }),
      });
    } catch (fsErr) {
      console.warn("FormSubmit email error:", fsErr);
    }

    setIsSubmittingReg(false);
    setRegSuccess(true);
    setRegFormData({ fullName: "", email: "", phone: "", password: "" });

    setTimeout(() => {
      closeRegisterModal();
      setRegSuccess(false);
      setModalStep(1);
    }, 2000);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");

    const { email, password } = loginFormData;
    if (!email.trim() || !password) {
      setLoginError("Please enter your email and password.");
      return;
    }

    setIsSubmittingLogin(true);
    try {
      const res = await loginUser(email.trim(), password);
      if (res.success && res.data?.token) {
        const token = res.data.token;
        const userData = res.data.user || { email: email.trim() };

        sessionStorage.setItem("user_token", token);
        sessionStorage.setItem("user_data", JSON.stringify(userData));
        login(token, userData);

        setLoginSuccess(true);
        setTimeout(() => {
          closeRegisterModal();
          setLoginSuccess(false);
          setModalStep(1);
          router.push("/dashboard");
        }, 1200);
      } else {
        setLoginError(res.message || "Invalid email or password.");
      }
    } catch (err) {
      console.error("Login API error:", err);
      setLoginError("Failed to sign in. Please check your credentials.");
    } finally {
      setIsSubmittingLogin(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="register-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeRegisterModal();
            }
          }}
        >
          {/* Backdrop */}
          <div
            onClick={closeRegisterModal}
            className="fixed inset-0 bg-brand-dark/50 backdrop-blur-md"
          />

          {/* Modal Card Container */}
          <motion.div
            key="register-modal-dialog"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[85vh] sm:max-h-[80vh] bg-white rounded-2xl sm:rounded-[2rem] shadow-2xl overflow-y-auto custom-scrollbar border border-white/20 flex flex-col md:flex-row my-auto z-10"
          >
            {/* Left Panel: Info & Branding */}
            <div className="hidden md:flex md:w-5/12 bg-brand-purple p-5 sm:p-7 md:p-8 text-white relative overflow-hidden flex-col justify-between shrink-0">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
              </div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-orange/20 rounded-full blur-[60px]" />

              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-5 border border-white/10 overflow-hidden">
                  <img src="/favicon.jpeg" alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-brand-orange font-heading">
                  Exclusive Portal Access
                </h3>
                <p className="text-white/80 text-xs leading-relaxed mb-4 sm:mb-6 font-sans">
                  Join thousands of businesses and individuals who trust Ananya Tax Co for their financial compliance and growth.
                </p>

                <div className="space-y-2 sm:space-y-3">
                  {[
                    "Secure 256-bit SSL Data Encryption",
                    "Real-time Document Tracking",
                    "Expert Consultation Messaging",
                    "Historical Records Access"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-semibold text-white/90 font-sans tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-3 sm:pt-4 mt-4 sm:mt-5 border-t border-white/10 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-brand-purple bg-slate-200" />
                  ))}
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/60">Trusted by 5k+ clients</span>
              </div>
            </div>

            {/* Right Panel: Action / Form */}
            <div className="w-full md:w-7/12 p-5 sm:p-7 md:p-8 lg:p-9 flex flex-col justify-center relative bg-white">
              <button
                onClick={closeRegisterModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 rounded-full hover:bg-slate-100 transition-colors z-20 text-slate-400 cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {modalStep === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="max-w-sm mx-auto w-full pt-2 md:pt-0"
                  >
                    <span className="section-tag mb-2 sm:mb-3">Portal Access</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-brand-purple mb-2 sm:mb-3 font-heading leading-[1.15]">
                      Welcome to <br />
                      <span className="text-brand-orange">Ananya Tax Portal</span>
                    </h2>

                    <p className="text-text-mid font-sans mb-5 sm:mb-6 leading-relaxed text-xs sm:text-sm">
                      Access your secure tax filings, portal documents, and consultation services.
                    </p>

                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => { setAuthMode('register'); setModalStep(2); }}
                        className="w-full py-2.5 sm:py-3 bg-brand-orange text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-brand-orange/20 hover:bg-brand-orange-dark hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center group cursor-pointer"
                      >
                        Create New Account
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        onClick={() => { setAuthMode('login'); setModalStep(2); }}
                        className="w-full py-2.5 sm:py-3 bg-slate-100 text-brand-purple rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-slate-200 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <LogIn className="w-4 h-4" />
                        Log In to Existing Account
                      </button>
                    </div>

                    <div className="mt-6 sm:mt-8 flex items-center justify-between pt-4 sm:pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest">Portal Online</span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Secured 256-Bit SSL</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="max-w-md mx-auto w-full pt-1 md:pt-0"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <button
                        onClick={() => setModalStep(1)}
                        className="text-brand-purple text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 hover:text-brand-orange transition-colors cursor-pointer"
                      >
                        <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Back
                      </button>

                      {/* Tab Selector */}
                      <div className="flex bg-slate-100 p-1 rounded-xl">
                        <button
                          type="button"
                          onClick={() => { setAuthMode('register'); setRegError(''); setLoginError(''); }}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${authMode === 'register'
                              ? 'bg-white text-brand-purple shadow-sm'
                              : 'text-slate-500 hover:text-slate-800'
                            }`}
                        >
                          Register
                        </button>
                        <button
                          type="button"
                          onClick={() => { setAuthMode('login'); setRegError(''); setLoginError(''); }}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${authMode === 'login'
                              ? 'bg-white text-brand-purple shadow-sm'
                              : 'text-slate-500 hover:text-slate-800'
                            }`}
                        >
                          Log In
                        </button>
                      </div>
                    </div>

                    {authMode === 'register' ? (
                      <>
                        <h2 className="text-xl sm:text-2xl font-black text-brand-purple mb-1 font-heading">Create Account</h2>
                        <p className="text-text-mid text-xs mb-4 sm:mb-5 font-sans">Fill in your details to create your secure portal access.</p>

                        {regSuccess ? (
                          <div className="py-6 sm:py-8 text-center">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2.5 shadow-md shadow-emerald-500/10">
                              <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">Account Registered!</h3>
                            <p className="text-xs text-slate-500">Your portal access has been created. Redirecting...</p>
                          </div>
                        ) : (
                          <form className="space-y-2.5 sm:space-y-3" onSubmit={handleRegisterSubmit}>
                            {regError && (
                              <div className="p-2.5 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl font-medium">
                                {regError}
                              </div>
                            )}

                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name *</label>
                              <div className="relative group">
                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-purple transition-colors" />
                                <input
                                  type="text"
                                  required
                                  placeholder="John Doe"
                                  value={regFormData.fullName}
                                  onChange={(e) => setRegFormData({ ...regFormData, fullName: e.target.value })}
                                  className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:border-brand-purple focus:bg-white focus:outline-none transition-all"
                                />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address *</label>
                              <div className="relative group">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-purple transition-colors" />
                                <input
                                  type="email"
                                  required
                                  placeholder="john@example.com"
                                  value={regFormData.email}
                                  onChange={(e) => setRegFormData({ ...regFormData, email: e.target.value })}
                                  className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:border-brand-purple focus:bg-white focus:outline-none transition-all"
                                />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number *</label>
                              <div className="relative group">
                                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-purple transition-colors" />
                                <input
                                  type="tel"
                                  required
                                  maxLength={10}
                                  placeholder="1234567890"
                                  value={regFormData.phone}
                                  onChange={(e) => {
                                    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
                                    setRegFormData({ ...regFormData, phone: digitsOnly });
                                  }}
                                  className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:border-brand-purple focus:bg-white focus:outline-none transition-all"
                                />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Password *</label>
                              <div className="relative group">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-purple transition-colors" />
                                <input
                                  type={showPassword ? "text" : "password"}
                                  required
                                  minLength={6}
                                  placeholder="At least 6 characters"
                                  value={regFormData.password}
                                  onChange={(e) => setRegFormData({ ...regFormData, password: e.target.value })}
                                  className="w-full pl-10 pr-10 py-2 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:border-brand-purple focus:bg-white focus:outline-none transition-all"
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                  title={showPassword ? "Hide Password" : "Show Password"}
                                >
                                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                              </div>
                            </div>

                            <button
                              type="submit"
                              disabled={isSubmittingReg}
                              className="w-full py-2.5 sm:py-3 bg-brand-purple text-white rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-brand-purple/20 hover:bg-brand-purple-light hover:scale-[1.01] active:scale-[0.99] transition-all mt-2 sm:mt-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                            >
                              {isSubmittingReg ? (
                                <>
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                  <span>Creating Account...</span>
                                </>
                              ) : (
                                "Create Portal Account"
                              )}
                            </button>

                            <p className="text-[11px] sm:text-xs text-center text-slate-500 font-sans mt-3">
                              Already have an account?{" "}
                              <button
                                type="button"
                                onClick={() => { setAuthMode('login'); setRegError(''); }}
                                className="text-brand-purple font-bold hover:text-brand-orange hover:underline cursor-pointer"
                              >
                                Log in here
                              </button>
                            </p>
                          </form>
                        )}
                      </>
                    ) : (
                      <>
                        <h2 className="text-xl sm:text-2xl font-black text-brand-purple mb-1 font-heading">Welcome Back</h2>
                        <p className="text-text-mid text-xs mb-4 sm:mb-5 font-sans">Enter your credentials to log in to your portal.</p>

                        {loginSuccess ? (
                          <div className="py-6 sm:py-8 text-center">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2.5 shadow-md shadow-emerald-500/10">
                              <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">Login Successful!</h3>
                            <p className="text-xs text-slate-500">Connecting to your Ananya Tax portal...</p>
                          </div>
                        ) : (
                          <form className="space-y-3 sm:space-y-4" onSubmit={handleLoginSubmit}>
                            {loginError && (
                              <div className="p-2.5 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl font-medium">
                                {loginError}
                              </div>
                            )}

                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address *</label>
                              <div className="relative group">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-purple transition-colors" />
                                <input
                                  type="email"
                                  required
                                  placeholder="john@example.com"
                                  value={loginFormData.email}
                                  onChange={(e) => setLoginFormData({ ...loginFormData, email: e.target.value })}
                                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:border-brand-purple focus:bg-white focus:outline-none transition-all"
                                />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Password *</label>
                              <div className="relative group">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-purple transition-colors" />
                                <input
                                  type={showLoginPassword ? "text" : "password"}
                                  required
                                  placeholder="Enter your password"
                                  value={loginFormData.password}
                                  onChange={(e) => setLoginFormData({ ...loginFormData, password: e.target.value })}
                                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:border-brand-purple focus:bg-white focus:outline-none transition-all"
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                  title={showLoginPassword ? "Hide Password" : "Show Password"}
                                >
                                  {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                              </div>
                            </div>

                            <button
                              type="submit"
                              disabled={isSubmittingLogin}
                              className="w-full py-2.5 sm:py-3 bg-brand-orange text-white rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-brand-orange/20 hover:bg-brand-orange-dark hover:scale-[1.01] active:scale-[0.99] transition-all mt-2 sm:mt-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                            >
                              {isSubmittingLogin ? (
                                <>
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                  <span>Logging In...</span>
                                </>
                              ) : (
                                <>
                                  <LogIn className="w-4 h-4" />
                                  <span>Sign In to Portal</span>
                                </>
                              )}
                            </button>

                            <p className="text-[11px] sm:text-xs text-center text-slate-500 font-sans mt-3">
                              Don't have an account yet?{" "}
                              <button
                                type="button"
                                onClick={() => { setAuthMode('register'); setLoginError(''); }}
                                className="text-brand-purple font-bold hover:text-brand-orange hover:underline cursor-pointer"
                              >
                                Create an account
                              </button>
                            </p>
                          </form>
                        )}
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
