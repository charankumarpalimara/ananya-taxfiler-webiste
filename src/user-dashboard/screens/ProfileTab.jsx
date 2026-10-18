"use client";

import { useState } from "react";
import { User, Phone, MapPin, Share2, Upload, Save, CheckCircle2, ShieldCheck, Mail } from "lucide-react";
import { updateUserProfile } from "../../services/api";

export default function ProfileTab({ user, onProfileUpdated }) {
  const [form, setForm] = useState({
    name: user?.fullName || user?.name || `${user?.firstName || ''} ${user?.lastName || ''}`.trim(),
    mobile: user?.mobile || user?.phone || '',
    address: user?.address || '',
    referralId: user?.referralId || '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(user?.image || '');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: '', text: '' });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg({ type: '', text: '' });

    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('mobile', form.mobile);
      formData.append('address', form.address);
      if (form.referralId) formData.append('referralId', form.referralId);
      if (imageFile) formData.append('image', imageFile);

      const res = await updateUserProfile(formData);
      if (res && res.success) {
        setMsg({ type: 'success', text: 'Profile updated successfully!' });
        if (onProfileUpdated) onProfileUpdated(res.data);
      } else {
        setMsg({ type: 'error', text: res?.message || 'Failed to update profile' });
      }
    } catch (err) {
      setMsg({ type: 'error', text: err.message || 'An error occurred updating profile' });
    } finally {
      setLoading(false);
    }
  };

  const initials = form.name ? form.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'TP';

  return (
    <div className="max-w-4xl mx-auto space-y-8 font-sans">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-black text-slate-900 font-heading">User Profile Settings</h2>
          <p className="text-xs text-slate-500 mt-1">Manage your personal identification, contact details, avatar, and referral code.</p>
        </div>

        {msg.text && (
          <div className={`p-4 rounded-2xl text-xs font-bold flex items-center gap-2 ${
            msg.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{msg.text}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-brand-purple text-white font-black text-2xl flex items-center justify-center font-heading border-4 border-white shadow-md">
                {previewUrl ? (
                  <img src={previewUrl} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span>{initials}</span>
                )}
              </div>
              <label className="absolute bottom-0 right-0 p-2 rounded-full bg-brand-orange text-white shadow-lg cursor-pointer hover:bg-brand-orange-dark transition-all">
                <Upload className="w-4 h-4" />
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </label>
            </div>

            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-lg font-bold text-slate-900">{form.name || 'Taxpayer'}</h3>
              <p className="text-xs text-slate-500 flex items-center justify-center sm:justify-start gap-1">
                <Mail className="w-3.5 h-3.5 text-brand-purple" />
                <span>{user?.email}</span>
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold mt-2">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Client Account
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-brand-orange" />
                <span>Full Name</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>Mobile Phone</span>
              </label>
              <input
                type="text"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>Street Address</span>
              </label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple"
                placeholder="123 Main St, Suite 100, City, State, ZIP"
              />
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-brand-orange" />
                <span>Unique Referral ID Code</span>
              </label>
              <input
                type="text"
                value={form.referralId}
                readOnly
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-mono font-bold text-brand-purple cursor-not-allowed"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-xl font-bold text-xs shadow-lg shadow-brand-orange/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{loading ? 'Saving Profile...' : 'Save Profile Settings'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
