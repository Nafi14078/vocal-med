"use client"
import { LayoutDashboard, Mic, History, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Overview", icon: <LayoutDashboard size={20} />, href: "/dashboard" },
  { name: "New Consultation", icon: <Mic size={20} />, href: "/dashboard/consult" },
  { name: "Medical History", icon: <History size={20} />, href: "/dashboard/history" },
  { name: "Settings", icon: <Settings size={20} />, href: "/dashboard/settings" },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <div className="w-64 h-screen bg-white border-r border-slate-100 flex flex-col p-6 fixed left-0 top-0">
      <div className="flex items-center gap-2 font-bold text-xl text-blue-600 mb-10 px-2">
        MedVoice
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
              path === item.href 
                ? "bg-blue-50 text-blue-600" 
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}