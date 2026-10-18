"use client";

import { useState, useEffect } from "react";
import {
  User, Users, Home, PhoneCall, ShieldCheck, CreditCard, Plus, Trash2,
  CheckCircle2, Save, Upload, Loader2, Sparkles
} from "lucide-react";
import {
  saveTaxpayerProfile, getTaxpayerProfile,
  saveSpouseDetails, getSpouseDetails,
  saveAddressDetails, getAddressDetails,
  saveContactDetails, getContactDetails,
  saveIdentityVerification, getIdentityVerification,
  saveBankDetails, getBankDetails,
  saveDependents, getDependents, deleteDependent
} from "../../services/api";

const isValidZip = (zip) => !zip || /^\d{5}(-\d{4})?$/.test(zip.trim());
const isValidRouting = (routing) => !routing || /^\d{9}$/.test(routing.trim());
const isValidAccountNumber = (acc) => !acc || /^\d{4,17}$/.test(acc.trim());

export default function AccountInformationWizard({ user }) {
  const [activeSubTab, setActiveSubTab] = useState("taxpayer");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  // 1. Taxpayer state
  const [taxpayer, setTaxpayer] = useState({
    firstName: user?.firstName || "",
    middleName: "",
    lastName: user?.lastName || "",
    ssn: "",
    dob: "",
    filingStatus: "Single",
    occupation: "",
  });

  // 2. Spouse state
  const [spouse, setSpouse] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    ssn: "",
    dob: "",
  });

  // 3. Address state
  const [address, setAddress] = useState({
    currentAddress: { street: "", city: "", state: "", zipCode: "" },
    taxYearAddress: { street: "", city: "", state: "", zipCode: "" },
  });

  // 4. Contact state
  const [contact, setContact] = useState({
    email: user?.email || "",
    phone: user?.phone || user?.mobile || "",
    alternateEmail: "",
    alternatePhone: "",
  });

  // 5. Identity state
  const [identity, setIdentity] = useState({
    licenseNumber: "",
    stateOfIssue: "",
    expirationDate: "",
    licenseDocument: "",
  });
  const [licenseFile, setLicenseFile] = useState(null);

  // 6. Bank state
  const [bank, setBank] = useState({
    bankName: "",
    accountType: "Checking",
    accountNumber: "",
    routingNumber: "",
    accountHolderName: "",
  });

  // 7. Dependents state
  const [dependents, setDependents] = useState([
    { firstName: "", lastName: "", ssn: "", dob: "", relationship: "Child" },
  ]);

  // Fetch initial data
  useEffect(() => {
    const loadAllInfo = async () => {
      setLoading(true);
      try {
        const [tpRes, spRes, addrRes, contRes, idRes, bankRes, depRes] = await Promise.allSettled([
          getTaxpayerProfile(),
          getSpouseDetails(),
          getAddressDetails(),
          getContactDetails(),
          getIdentityVerification(),
          getBankDetails(),
          getDependents(),
        ]);

        if (tpRes.status === "fulfilled" && tpRes.value?.data?.firstName) {
          setTaxpayer(tpRes.value.data);
        }
        if (spRes.status === "fulfilled" && spRes.value?.data?.firstName) {
          setSpouse(spRes.value.data);
        }
        if (addrRes.status === "fulfilled" && addrRes.value?.data?.currentAddress) {
          setAddress(addrRes.value.data);
        }
        if (contRes.status === "fulfilled" && contRes.value?.data?.email) {
          setContact(contRes.value.data);
        }
        if (idRes.status === "fulfilled" && idRes.value?.data?.licenseNumber) {
          setIdentity(idRes.value.data);
        }
        if (bankRes.status === "fulfilled" && bankRes.value?.data?.bankName) {
          setBank(bankRes.value.data);
        }
        if (depRes.status === "fulfilled" && Array.isArray(depRes.value?.data) && depRes.value.data.length > 0) {
          setDependents(depRes.value.data);
        }
      } catch (err) {
        console.error("Error loading account information wizard:", err);
      } finally {
        setLoading(false);
      }
    };

    loadAllInfo();
  }, []);

  const subTabs = [
    { id: "taxpayer", label: "Taxpayer Profile", icon: User },
    { id: "spouse", label: "Spouse Details", icon: Users },
    { id: "dependents", label: "Dependents", icon: Sparkles },
    { id: "address", label: "Address Information", icon: Home },
    { id: "contact", label: "Contact Details", icon: PhoneCall },
    { id: "identity", label: "Identity Verification", icon: ShieldCheck },
    { id: "bank", label: "Bank Details (Direct Deposit)", icon: CreditCard },
  ];

  const handleSaveSubTab = async (tabKey) => {
    setLoading(true);
    setMsg({ type: "", text: "" });
    try {
      let res;
      if (tabKey === "taxpayer") res = await saveTaxpayerProfile(taxpayer);
      else if (tabKey === "spouse") res = await saveSpouseDetails(spouse);
      else if (tabKey === "address") {
        if (address.currentAddress?.zipCode && !isValidZip(address.currentAddress.zipCode)) {
          setMsg({ type: "error", text: "Invalid ZIP code for Current Address. Please enter a valid 5-digit ZIP code (e.g. 12345 or 12345-6789)." });
          setLoading(false);
          return;
        }
        if (address.taxYearAddress?.zipCode && !isValidZip(address.taxYearAddress.zipCode)) {
          setMsg({ type: "error", text: "Invalid ZIP code for Tax Year Address. Please enter a valid 5-digit ZIP code (e.g. 12345 or 12345-6789)." });
          setLoading(false);
          return;
        }
        res = await saveAddressDetails(address);
      }
      else if (tabKey === "contact") res = await saveContactDetails(contact);
      else if (tabKey === "identity") {
        const fd = new FormData();
        fd.append("licenseNumber", identity.licenseNumber);
        fd.append("stateOfIssue", identity.stateOfIssue);
        fd.append("expirationDate", identity.expirationDate);
        if (licenseFile) fd.append("licenseDocument", licenseFile);
        res = await saveIdentityVerification(fd);
      } else if (tabKey === "bank") {
        if (!bank.bankName?.trim()) {
          setMsg({ type: "error", text: "Please enter your Bank Name." });
          setLoading(false);
          return;
        }
        if (!bank.accountNumber?.trim() || !isValidAccountNumber(bank.accountNumber)) {
          setMsg({ type: "error", text: "Please enter a valid Account Number (4 to 17 digits)." });
          setLoading(false);
          return;
        }
        if (!bank.routingNumber?.trim() || !/^\d{9}$/.test(bank.routingNumber.trim())) {
          setMsg({ type: "error", text: "Please enter a valid 9-digit ABA Routing Number." });
          setLoading(false);
          return;
        }
        if (!bank.accountHolderName?.trim()) {
          setMsg({ type: "error", text: "Please enter the Account Holder Name." });
          setLoading(false);
          return;
        }
        res = await saveBankDetails(bank);
      } else if (tabKey === "dependents") res = await saveDependents(dependents);

      if (res && res.success) {
        setMsg({ type: "success", text: `${subTabs.find(t => t.id === tabKey)?.label} saved successfully!` });
      } else {
        setMsg({ type: "error", text: res?.message || "Failed to save information" });
      }
    } catch (err) {
      setMsg({ type: "error", text: err.message || "An error occurred while saving." });
    } finally {
      setLoading(false);
    }
  };

  const addDependentRow = () => {
    setDependents([...dependents, { firstName: "", lastName: "", ssn: "", dob: "", relationship: "Child" }]);
  };

  const removeDependentRow = async (index, depId) => {
    if (depId) {
      try {
        await deleteDependent(depId);
      } catch (e) {
        console.warn("Delete dependent error:", e);
      }
    }
    const filtered = dependents.filter((_, idx) => idx !== index);
    setDependents(filtered.length ? filtered : [{ firstName: "", lastName: "", ssn: "", dob: "", relationship: "Child" }]);
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-black text-slate-900 font-heading">Account Information Wizard</h2>
          <p className="text-xs text-slate-500 mt-1">Complete your Taxpayer, Spouse, Dependents, Address, and Bank details for IRS filing accuracy.</p>
        </div>

        {/* Sub-Tab Navigation Bar */}
        <div className="flex overflow-x-auto gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 no-scrollbar">
          {subTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveSubTab(tab.id);
                  setMsg({ type: "", text: "" });
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${isActive
                  ? "bg-white text-brand-purple shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-brand-orange" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {msg.text && (
          <div className={`p-4 rounded-2xl text-xs font-bold flex items-center gap-2 ${msg.type === "success" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"
            }`}>
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{msg.text}</span>
          </div>
        )}

        {/* TAB 1: TAXPAYER PROFILE */}
        {activeSubTab === "taxpayer" && (
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-900 border-b pb-2">Primary Taxpayer Personal Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700">First Name</label>
                <input
                  type="text"
                  value={taxpayer.firstName}
                  onChange={(e) => setTaxpayer({ ...taxpayer, firstName: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-brand-purple/20"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Middle Name</label>
                <input
                  type="text"
                  value={taxpayer.middleName}
                  onChange={(e) => setTaxpayer({ ...taxpayer, middleName: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-brand-purple/20"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Last Name</label>
                <input
                  type="text"
                  value={taxpayer.lastName}
                  onChange={(e) => setTaxpayer({ ...taxpayer, lastName: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-brand-purple/20"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">SSN / ITIN</label>
                <input
                  type="text"
                  value={taxpayer.ssn}
                  onChange={(e) => setTaxpayer({ ...taxpayer, ssn: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-mono font-bold text-slate-900 focus:ring-2 focus:ring-brand-purple/20"
                  placeholder="XXX-XX-XXXX"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Date of Birth</label>
                <input
                  type="date"
                  value={taxpayer.dob}
                  onChange={(e) => setTaxpayer({ ...taxpayer, dob: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-brand-purple/20"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Filing Status</label>
                <select
                  value={taxpayer.filingStatus}
                  onChange={(e) => setTaxpayer({ ...taxpayer, filingStatus: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-brand-purple/20"
                >
                  <option value="Single">Single</option>
                  <option value="Married Filing Jointly">Married Filing Jointly</option>
                  <option value="Married Filing Separately">Married Filing Separately</option>
                  <option value="Head of Household">Head of Household</option>
                  <option value="Qualifying Widow(er)">Qualifying Widow(er)</option>
                </select>
              </div>
              <div className="sm:col-span-3">
                <label className="text-xs font-bold text-slate-700">Occupation</label>
                <input
                  type="text"
                  value={taxpayer.occupation}
                  onChange={(e) => setTaxpayer({ ...taxpayer, occupation: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-brand-purple/20"
                  placeholder="Software Engineer, Consultant, etc."
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SPOUSE DETAILS */}
        {activeSubTab === "spouse" && (
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-900 border-b pb-2">Spouse Personal Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700">First Name</label>
                <input
                  type="text"
                  value={spouse.firstName}
                  onChange={(e) => setSpouse({ ...spouse, firstName: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-brand-purple/20"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Middle Name</label>
                <input
                  type="text"
                  value={spouse.middleName}
                  onChange={(e) => setSpouse({ ...spouse, middleName: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-brand-purple/20"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Last Name</label>
                <input
                  type="text"
                  value={spouse.lastName}
                  onChange={(e) => setSpouse({ ...spouse, lastName: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-brand-purple/20"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Spouse SSN / ITIN</label>
                <input
                  type="text"
                  value={spouse.ssn}
                  onChange={(e) => setSpouse({ ...spouse, ssn: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-mono font-bold text-slate-900 focus:ring-2 focus:ring-brand-purple/20"
                  placeholder="XXX-XX-XXXX"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Date of Birth</label>
                <input
                  type="date"
                  value={spouse.dob}
                  onChange={(e) => setSpouse({ ...spouse, dob: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-brand-purple/20"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DEPENDENTS */}
        {activeSubTab === "dependents" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="text-sm font-bold text-slate-900">Dependents List</h3>
              <button
                onClick={addDependentRow}
                className="px-3 py-1.5 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center gap-1 hover:bg-brand-purple/90 transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add Dependent
              </button>
            </div>

            <div className="space-y-4">
              {dependents.map((dep, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-purple">Dependent #{idx + 1}</span>
                    <button
                      onClick={() => removeDependentRow(idx, dep._id || dep.id)}
                      className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-600">First Name</label>
                      <input
                        type="text"
                        value={dep.firstName || dep.name || ""}
                        onChange={(e) => {
                          const updated = [...dependents];
                          updated[idx].firstName = e.target.value;
                          setDependents(updated);
                        }}
                        className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-600">Last Name</label>
                      <input
                        type="text"
                        value={dep.lastName || ""}
                        onChange={(e) => {
                          const updated = [...dependents];
                          updated[idx].lastName = e.target.value;
                          setDependents(updated);
                        }}
                        className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-600">SSN</label>
                      <input
                        type="text"
                        value={dep.ssn || ""}
                        onChange={(e) => {
                          const updated = [...dependents];
                          updated[idx].ssn = e.target.value;
                          setDependents(updated);
                        }}
                        className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono font-bold"
                        placeholder="XXX-XX-XXXX"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-600">DOB</label>
                      <input
                        type="date"
                        value={dep.dob || ""}
                        onChange={(e) => {
                          const updated = [...dependents];
                          updated[idx].dob = e.target.value;
                          setDependents(updated);
                        }}
                        className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-600">Relationship</label>
                      <input
                        type="text"
                        value={dep.relationship || "Child"}
                        onChange={(e) => {
                          const updated = [...dependents];
                          updated[idx].relationship = e.target.value;
                          setDependents(updated);
                        }}
                        className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                        placeholder="Child, Parent, Relative"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: ADDRESS */}
        {activeSubTab === "address" && (
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-900 border-b pb-2">Current Residence & Tax Year Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-black text-brand-purple uppercase tracking-wider">Current Residential Address</h4>
                <div>
                  <label className="text-xs font-bold text-slate-700">Street</label>
                  <input
                    type="text"
                    value={address.currentAddress?.street || ""}
                    onChange={(e) => setAddress({ ...address, currentAddress: { ...address.currentAddress, street: e.target.value } })}
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-xs font-bold text-slate-700">City</label>
                    <input
                      type="text"
                      value={address.currentAddress?.city || ""}
                      onChange={(e) => setAddress({ ...address, currentAddress: { ...address.currentAddress, city: e.target.value } })}
                      className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700">State</label>
                    <input
                      type="text"
                      value={address.currentAddress?.state || ""}
                      onChange={(e) => setAddress({ ...address, currentAddress: { ...address.currentAddress, state: e.target.value } })}
                      className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700">ZIP</label>
                    <input
                      type="text"
                      maxLength={10}
                      placeholder="12345"
                      value={address.currentAddress?.zipCode || ""}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^\d-]/g, "").slice(0, 10);
                        setAddress({ ...address, currentAddress: { ...address.currentAddress, zipCode: val } });
                      }}
                      className={`w-full mt-1 px-3 py-2 rounded-xl border text-xs font-semibold transition-all ${address.currentAddress?.zipCode && !isValidZip(address.currentAddress.zipCode)
                        ? "border-red-400 bg-red-50/40 text-red-900 focus:ring-2 focus:ring-red-200"
                        : "border-slate-200 focus:ring-2 focus:ring-brand-purple/20"
                        }`}
                    />
                    {address.currentAddress?.zipCode && !isValidZip(address.currentAddress.zipCode) && (
                      <p className="text-[10px] text-red-500 font-semibold mt-1">
                        5 digits required (e.g. 12345)
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-black text-brand-purple uppercase tracking-wider">Tax Year 2024 Filing Address</h4>
                <div>
                  <label className="text-xs font-bold text-slate-700">Street</label>
                  <input
                    type="text"
                    value={address.taxYearAddress?.street || ""}
                    onChange={(e) => setAddress({ ...address, taxYearAddress: { ...address.taxYearAddress, street: e.target.value } })}
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-xs font-bold text-slate-700">City</label>
                    <input
                      type="text"
                      value={address.taxYearAddress?.city || ""}
                      onChange={(e) => setAddress({ ...address, taxYearAddress: { ...address.taxYearAddress, city: e.target.value } })}
                      className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700">State</label>
                    <input
                      type="text"
                      value={address.taxYearAddress?.state || ""}
                      onChange={(e) => setAddress({ ...address, taxYearAddress: { ...address.taxYearAddress, state: e.target.value } })}
                      className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700">ZIP</label>
                    <input
                      type="text"
                      maxLength={10}
                      placeholder="12345"
                      value={address.taxYearAddress?.zipCode || ""}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^\d-]/g, "").slice(0, 10);
                        setAddress({ ...address, taxYearAddress: { ...address.taxYearAddress, zipCode: val } });
                      }}
                      className={`w-full mt-1 px-3 py-2 rounded-xl border text-xs font-semibold transition-all ${address.taxYearAddress?.zipCode && !isValidZip(address.taxYearAddress.zipCode)
                        ? "border-red-400 bg-red-50/40 text-red-900 focus:ring-2 focus:ring-red-200"
                        : "border-slate-200 focus:ring-2 focus:ring-brand-purple/20"
                        }`}
                    />
                    {address.taxYearAddress?.zipCode && !isValidZip(address.taxYearAddress.zipCode) && (
                      <p className="text-[10px] text-red-500 font-semibold mt-1">
                        5 digits required (e.g. 12345)
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: CONTACT */}
        {activeSubTab === "contact" && (
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-900 border-b pb-2">Primary & Alternate Contact Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700">Primary Email</label>
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Primary Phone</label>
                <input
                  type="text"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Alternate Email</label>
                <input
                  type="email"
                  value={contact.alternateEmail}
                  onChange={(e) => setContact({ ...contact, alternateEmail: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Alternate Phone</label>
                <input
                  type="text"
                  value={contact.alternatePhone}
                  onChange={(e) => setContact({ ...contact, alternatePhone: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: IDENTITY VERIFICATION */}
        {activeSubTab === "identity" && (
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-900 border-b pb-2">State ID / Driver License Verification</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700">License / ID Number</label>
                <input
                  type="text"
                  value={identity.licenseNumber}
                  onChange={(e) => setIdentity({ ...identity, licenseNumber: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">State of Issue</label>
                <input
                  type="text"
                  value={identity.stateOfIssue}
                  onChange={(e) => setIdentity({ ...identity, stateOfIssue: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                  placeholder="CA, NY, TX, etc."
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Expiration Date</label>
                <input
                  type="date"
                  value={identity.expirationDate}
                  onChange={(e) => setIdentity({ ...identity, expirationDate: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                />
              </div>
              <div className="sm:col-span-3">
                <label className="text-xs font-bold text-slate-700">License Document Copy Upload</label>
                <div className="mt-1 flex items-center gap-4 p-4 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50">
                  <Upload className="w-6 h-6 text-brand-orange shrink-0" />
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={(e) => setLicenseFile(e.target.files[0])}
                      className="text-xs text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-brand-purple file:text-white cursor-pointer"
                    />
                    {identity.licenseDocument && (
                      <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                        Currently On Record: {identity.licenseDocument}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: BANK DETAILS */}
        {activeSubTab === "bank" && (
          <div className="space-y-6">
            <div className="border-b pb-2">
              <h3 className="text-sm font-bold text-slate-900">Bank Account Details (IRS Direct Deposit)</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Provide verified banking details so your refund or payment can be processed accurately by the IRS.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700">Bank Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={bank.bankName}
                  onChange={(e) => setBank({ ...bank, bankName: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-purple/20"
                  placeholder="e.g. JPMorgan Chase, Bank of America, Wells Fargo"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Account Type <span className="text-red-500">*</span></label>
                <select
                  value={bank.accountType}
                  onChange={(e) => setBank({ ...bank, accountType: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-purple/20"
                >
                  <option value="Checking">Checking</option>
                  <option value="Savings">Savings</option>
                </select>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">Account Number <span className="text-red-500">*</span></label>
                  {bank.accountNumber && (
                    <span className="text-[10px] text-slate-400 font-mono">{bank.accountNumber.length} digits</span>
                  )}
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={17}
                  value={bank.accountNumber}
                  onChange={(e) => {
                    const clean = e.target.value.replace(/\D/g, "").slice(0, 17);
                    setBank({ ...bank, accountNumber: clean });
                  }}
                  className={`w-full mt-1 px-4 py-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                    bank.accountNumber && !isValidAccountNumber(bank.accountNumber)
                      ? "border-red-400 bg-red-50/40 text-red-900 focus:ring-2 focus:ring-red-200"
                      : "border-slate-200 focus:ring-2 focus:ring-brand-purple/20 text-slate-900"
                  }`}
                  placeholder="4 to 17 digits"
                />
                {bank.accountNumber && !isValidAccountNumber(bank.accountNumber) && (
                  <p className="text-[10px] text-red-500 font-semibold mt-1">
                    Account number must be 4 to 17 digits
                  </p>
                )}
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">Routing Number (ABA) <span className="text-red-500">*</span></label>
                  {bank.routingNumber && (
                    <span className={`text-[10px] font-mono ${bank.routingNumber.length === 9 ? "text-emerald-600 font-bold" : "text-slate-400"}`}>
                      {bank.routingNumber.length}/9 digits
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={9}
                  value={bank.routingNumber}
                  onChange={(e) => {
                    const clean = e.target.value.replace(/\D/g, "").slice(0, 9);
                    setBank({ ...bank, routingNumber: clean });
                  }}
                  className={`w-full mt-1 px-4 py-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                    bank.routingNumber && !isValidRouting(bank.routingNumber)
                      ? "border-red-400 bg-red-50/40 text-red-900 focus:ring-2 focus:ring-red-200"
                      : "border-slate-200 focus:ring-2 focus:ring-brand-purple/20 text-slate-900"
                  }`}
                  placeholder="9-digit routing code"
                />
                {bank.routingNumber && !isValidRouting(bank.routingNumber) && (
                  <p className="text-[10px] text-red-500 font-semibold mt-1">
                    Routing number must be exactly 9 digits
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-700">Account Holder Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={bank.accountHolderName}
                  onChange={(e) => setBank({ ...bank, accountHolderName: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-purple/20"
                  placeholder="Full name as printed on bank statement"
                />
              </div>
            </div>
          </div>
        )}

        {/* Form Action Button */}
        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={() => handleSaveSubTab(activeSubTab)}
            disabled={loading}
            className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-xl font-bold text-xs shadow-lg shadow-brand-orange/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            <span>Save {subTabs.find(t => t.id === activeSubTab)?.label}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
