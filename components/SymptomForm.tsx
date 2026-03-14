"use client";
import { useState } from "react";
import { X, Activity, Calendar, User, ClipboardList, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SymptomForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Artificial delay to simulate AI processing/matching
    setTimeout(() => {
      setLoading(false);
      onClose();
      // Redirect to doctors page with symptoms as a query for the AI to pick up
      router.push(`/doctors?symptoms=${encodeURIComponent(data.symptoms as string)}`);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="bg-blue-600 p-8 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <Activity className="mb-4 opacity-80" size={32} />
          <h2 className="text-2xl font-bold">Health Assessment</h2>
          <p className="text-blue-100 text-sm mt-1">Tell us how you're feeling so our AI can match you.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                <User size={14} /> Full Name
              </label>
              <input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                <Calendar size={14} /> Age
              </label>
              <input required name="age" type="number" placeholder="25" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
              <ClipboardList size={14} /> Symptoms
            </label>
            <textarea 
              required 
              name="symptoms" 
              rows={3} 
              placeholder="E.g. Persistent cough, mild fever, headache..." 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
              <Calendar size={14} /> Days of Illness
            </label>
            <select name="days" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white transition-all">
              <option value="1-2">1-2 Days</option>
              <option value="3-5">3-5 Days</option>
              <option value="1 week">About a week</option>
              <option value="more">More than a week</option>
            </select>
          </div>

          <button 
            disabled={loading}
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Analyzing Symptoms...
              </>
            ) : (
              "Find My Doctor"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}