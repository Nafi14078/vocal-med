import { Button } from "@/components/ui/button";
import {
  Mic,
  ShieldCheck,
  Zap,
  MoveRight,
  Star,
  HeartPulse,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-5 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[#3b82f6] text-sm font-semibold">
              <Zap size={14} fill="currentColor" />
              Next-Gen AI Healthcare Platform
            </div>

            <h1 className="text-6xl font-extrabold text-[#1e293b] leading-[1.1]">
              AI Powered <br />
              Medical <span className="text-[#3b82f6]">Voice</span> Agent
            </h1>

            <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
              Describe your symptoms, get AI doctor recommendations, and receive
              instant medical reports.
            </p>

            <div className="flex items-center gap-4 text-sm font-semibold text-slate-600">
              <div className="flex items-center gap-1.5 bg-[#f0f9ff] px-3 py-1.5 rounded-lg border border-blue-50">
                <ShieldCheck size={18} className="text-emerald-500" /> Secure
              </div>
              <div className="flex items-center gap-1.5 bg-[#fff7ed] px-3 py-1.5 rounded-lg border border-orange-50">
                <Zap size={18} className="text-orange-400" /> Fast
              </div>
              <div className="flex items-center gap-1.5 bg-[#f0f9ff] px-3 py-1.5 rounded-lg border border-blue-50">
                <MoveRight size={18} className="text-blue-500" /> Accurate
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full h-14 px-8 gap-2 bg-[#3b82f6] hover:bg-blue-700 shadow-xl shadow-blue-200"
              >
                <Mic size={20} /> Start Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-8 gap-2 border-slate-200 hover:bg-slate-50"
              >
                View Doctors <MoveRight size={20} />
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              {/* Simplified Avatar Stack */}
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Trusted by 10,000+ Patients
                </p>
                <div className="flex gap-0.5 text-orange-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - The Image Mockup */}
          <div className="relative">
            <Image
              src="/doctor-hero.jpg" // Add your uploaded image here
              alt="Medical AI"
              width={600}
              height={600}
              className="rounded-3xl object-contain"
            />
          </div>
        </div>

        {/* Simplified Feature Section */}
        <div className="mt-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Voice Consultation",
                icon: <Mic size={24} />,
                desc: "Instant AI-powered vocal analysis",
                accent: "border-blue-500",
              },
              {
                title: "AI Doctor Match",
                icon: <User size={24} />,
                desc: "Connect with the right specialist",
                accent: "border-indigo-500",
              },
              {
                title: "Medical History",
                icon: <ShieldCheck size={24} />,
                desc: "Secure, encrypted health records",
                accent: "border-emerald-500",
              },
              {
                title: "Auto PDF Reports",
                icon: <MoveRight size={24} />,
                desc: "Instant documentation after calls",
                accent: "border-orange-500",
              },
            ].map((feat, i) => (
              <div
                key={i}
                className="group relative h-full bg-slate-300 dark:bg-slate-900 p-8 rounded-[2rem] border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all duration-300 cursor-default"
              >
                {/* Icon Container */}
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-blue-600 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform duration-300">
                    {feat.icon}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                {/* Simple Bottom Accent Line */}
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${feat.accent.replace("border-", "from-")} to-transparent rounded-full transition-all duration-300 group-hover:w-1/2`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS MARQUEE SECTION */}
      <section className="py-6 bg-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-slate-500 mt-2">
            Real feedback from our global community.
          </p>
        </div>

        <div className="flex animate-marquee gap-6 whitespace-nowrap px-4">
          {[
            {
              name: "Sarah Jenkins",
              text: "The AI voice consultation was incredibly accurate. It understood my symptoms better than expected!",
              rating: 5,
              role: "Verified Patient",
            },
            {
              name: "Dr. Michael Chen",
              text: "As a practitioner, I'm impressed by the speed of the PDF reports. It saves hours of manual charting.",
              rating: 5,
              role: "Medical Consultant",
            },
            {
              name: "James Wilson",
              text: "Finally, a healthcare app that doesn't feel like a chore. The voice interface is a game changer for my accessibility needs.",
              rating: 4,
              role: "Verified Patient",
            },
            {
              name: "Elena Rodriguez",
              text: "The doctor matching algorithm paired me with a specialist who actually listened. High quality care.",
              rating: 5,
              role: "Verified Patient",
            },
            {
              name: "Robert T.",
              text: "I was skeptical about AI diagnosis, but the 95% accuracy claim held up. It caught a minor issue early.",
              rating: 5,
              role: "Beta Tester",
            },
            {
              name: "Linda Wu",
              text: "Super fast and secure. I love that my medical history is encrypted but easily accessible when I need it.",
              rating: 4,
              role: "Verified Patient",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="w-[300px] h-[320px] bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 text-orange-400 mb-6 group-hover:scale-110 transition-transform origin-left">
                  {[...Array(review.rating)].map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 dark:text-slate-400 italic text-[15px] leading-relaxed whitespace-normal line-clamp-4">
                  "{review.text}"
                </p>
              </div>

              {/* Patient Profile */}
              <div className="flex items-center gap-4 border-t border-slate-50 dark:border-slate-800 pt-6">
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-[2px]">
                  <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center font-bold text-blue-600">
                    {review.name.charAt(0)}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-800 dark:text-white truncate max-w-[150px]">
                    {review.name}
                  </span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Trust Marquee */}
      <div className="py-12 border-y border-slate-50 bg-white/50 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee-slow gap-16 items-center whitespace-nowrap">
          {[
            "Mayo Clinic",
            "Cleveland Clinic",
            "AWS Health",
            "Google Health",
            "Stripe Medical",
            "NVIDIA AI",
          ].map((partner) => (
            <span
              key={partner}
              className="text-xl font-bold text-slate-300 dark:text-slate-700 tracking-widest grayscale hover:grayscale-0 transition-all cursor-default uppercase"
            >
              {partner}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "Mayo Clinic",
            "Cleveland Clinic",
            "AWS Health",
            "Google Health",
            "Stripe Medical",
            "NVIDIA AI",
          ].map((partner) => (
            <span
              key={partner + "-copy"}
              className="text-xl font-bold text-slate-300 dark:text-slate-700 tracking-widest grayscale hover:grayscale-0 transition-all cursor-default uppercase"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
            <HeartPulse className="text-blue-600" /> MedVoice
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 MedVoice AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
