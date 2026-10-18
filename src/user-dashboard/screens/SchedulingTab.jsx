"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, PhoneCall, Mail, CheckCircle2, AlertCircle, Plus, Loader2 } from "lucide-react";
import { getAvailableSchedules, getMyAppointments, bookSchedule, requestSchedule } from "../../services/api";

export default function SchedulingTab() {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [myAppointments, setMyAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  const [customForm, setCustomForm] = useState({
    date: new Date().toISOString().split('T')[0],
    startTime: "10:00 AM",
    timezone: "CST",
    reason: "General Tax Consultation",
    preferredMethod: "phone",
  });

  const fetchData = async () => {
    try {
      const [availRes, myRes] = await Promise.all([
        getAvailableSchedules(),
        getMyAppointments(),
      ]);
      if (availRes && availRes.success) setAvailableSlots(availRes.data || []);
      if (myRes && myRes.success) setMyAppointments(myRes.data || []);
    } catch (err) {
      console.error("Error fetching schedules:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBook = async (scheduleId) => {
    setLoading(true);
    try {
      const res = await bookSchedule({ scheduleId, preferredMethod: customForm.preferredMethod, reason: customForm.reason });
      if (res && res.success) {
        setMsg({ type: "success", text: "Appointment booked successfully!" });
        fetchData();
      } else {
        setMsg({ type: "error", text: res?.message || "Failed to book schedule slot." });
      }
    } catch (err) {
      setMsg({ type: "error", text: "Booking failed." });
    } finally {
      setLoading(false);
    }
  };

  const handleCustomRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg({ type: "", text: "" });
    try {
      const res = await requestSchedule(customForm);
      if (res && res.success) {
        setMsg({ type: "success", text: "Custom consultation slot requested!" });
        fetchData();
      } else {
        setMsg({ type: "error", text: res?.message || "Failed to submit request." });
      }
    } catch (err) {
      setMsg({ type: "error", text: "Request failed." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-black text-slate-900 font-heading">Schedule Consultation</h2>
          <p className="text-xs text-slate-500 mt-1">Book a 1-on-1 session with a certified Tax Accountant or request a custom appointment slot.</p>
        </div>

        {msg.text && (
          <div className={`p-4 rounded-2xl text-xs font-bold flex items-center gap-2 ${
            msg.type === "success" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"
          }`}>
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{msg.text}</span>
          </div>
        )}

        {/* Book Available Admin Slots */}
        {availableSlots.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-orange" />
              <span>Available Open Slots</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {availableSlots.map((slot) => (
                <div key={slot._id || slot.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-xs font-black text-brand-purple">{slot.date}</div>
                    <div className="text-sm font-bold text-slate-900">{slot.startTime} {slot.timezone}</div>
                  </div>
                  <button
                    onClick={() => handleBook(slot._id || slot.id)}
                    disabled={loading}
                    className="w-full py-2 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    Book Slot
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Request Custom Slot Form */}
        <form onSubmit={handleCustomRequest} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-brand-purple" />
            <span>Request Custom Consultation Slot</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700">Preferred Date</label>
              <input
                type="date"
                value={customForm.date}
                onChange={(e) => setCustomForm({ ...customForm, date: e.target.value })}
                className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                required
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700">Preferred Time</label>
              <input
                type="text"
                value={customForm.startTime}
                onChange={(e) => setCustomForm({ ...customForm, startTime: e.target.value })}
                className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                placeholder="e.g. 10:30 AM"
                required
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700">Timezone</label>
              <select
                value={customForm.timezone}
                onChange={(e) => setCustomForm({ ...customForm, timezone: e.target.value })}
                className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
              >
                <option value="CST">CST (Central)</option>
                <option value="EST">EST (Eastern)</option>
                <option value="PST">PST (Pacific)</option>
                <option value="IST">IST (India)</option>
                <option value="UTC">UTC</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700">Preferred Contact Method</label>
              <select
                value={customForm.preferredMethod}
                onChange={(e) => setCustomForm({ ...customForm, preferredMethod: e.target.value })}
                className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
              >
                <option value="phone">Phone Call</option>
                <option value="email">Email / Video Link</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-700">Reason / Topic</label>
              <input
                type="text"
                value={customForm.reason}
                onChange={(e) => setCustomForm({ ...customForm, reason: e.target.value })}
                className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                placeholder="Review 1099 deductions, W-2 questions, etc."
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-brand-purple hover:bg-brand-purple-dark text-white rounded-xl font-bold text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
              <span>Submit Appointment Request</span>
            </button>
          </div>
        </form>

        {/* My Appointments List */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b pb-2">My Scheduled Appointments ({myAppointments.length})</h3>
          {myAppointments.length === 0 ? (
            <p className="text-xs text-slate-400 italic py-2">No booked appointments found.</p>
          ) : (
            <div className="space-y-3">
              {myAppointments.map((app) => (
                <div key={app._id || app.id} className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">{app.reason || 'Tax Consultation'}</div>
                    <div className="text-xs text-emerald-800 font-semibold mt-0.5">
                      {app.date} @ {app.startTime} ({app.timezone}) • via <span className="uppercase">{app.preferredMethod}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-800 text-[10px] font-black uppercase">
                    {app.status || 'Booked'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
