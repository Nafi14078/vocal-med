"use client"
import { useState } from "react";
import { Search, Mic, ArrowRight, Activity } from "lucide-react";
import Link from "next/link";

const allDoctors = [
  { id: 1, name: "General Physician", desc: "Helps with everyday health concerns and common diseases", specialty: "Medicine", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop" },
  { id: 2, name: "Pediatrician", desc: "Expert in children's health, from babies to teens.", specialty: "Pediatrics", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop", premium: true },
  { id: 3, name: "Dermatologist", desc: "Handles skin issues like rashes, acne, or infections.", specialty: "Dermatology", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop", premium: true },
  { id: 4, name: "Psychologist", desc: "Supports mental health and emotional well-being.", specialty: "Mental Health", image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop", premium: true },
  { id: 5, name: "Nutritionist", desc: "Provides advice on healthy eating and weight related issues", specialty: "Dietary", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop", premium: true },
  { id: 6, name: "Cardiologist", desc: "Focuses on heart health and blood pressure issues.", specialty: "Cardiology", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop", premium: true },
  { id: 7, name: "ENT Specialist", desc: "Handles ear, nose, and throat-related problems.", specialty: "Otolaryngology", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop", premium: true },
  { id: 8, name: "Orthopedic", desc: "Helps with bone, joint, and muscle pain.", specialty: "Orthopedics", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop", premium: true },
  { id: 9, name: "Gynecologist", desc: "Cares for women's reproductive and hormonal health.", specialty: "Women's Health", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop", premium: true },
  { id: 10, name: "Dentist", desc: "Handles oral hygiene and dental problems.", specialty: "Dental", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop", premium: true },
];

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = allDoctors.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title and Search Bar */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            AI Specialist Doctors Agent
          </h1>
          
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search doctors by title or specialty (e.g. Pediatrician)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-700"
            />
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="flex flex-col group">
              {/* Doctor Card Image */}
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-slate-100 mb-4">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {doc.premium && (
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-lg">
                    Premium
                  </div>
                )}
              </div>

              {/* Doctor Info */}
<div className="px-1 flex flex-col flex-1">
  <div className="flex-1"> {/* This wrapper pushes the button down */}
    <h3 className="font-bold text-slate-900 text-lg mb-1 truncate">
      {doc.name}
    </h3>
    <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1 mt-auto">
      {doc.desc}
    </p>
  </div>
  
  <Link href="/dashboard/consult" className="mt-auto">
    <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors">
      Start Consultation
    </button>
  </Link>
</div>
            </div>
          ))}
        </div>

        {/* AI Recommendation Placeholder */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-20">
            <Activity className="mx-auto text-slate-200 mb-4" size={48} />
            <p className="text-slate-500">No matching specialists found. Try another search or use our AI matching.</p>
          </div>
        )}
      </div>
    </div>
  );
}