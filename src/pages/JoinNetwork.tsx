import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Award, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Search,
  Users,
  Briefcase
} from 'lucide-react';

const JoinNetwork = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" 
            alt="Professional background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Join Our Elite Network of <span className="text-gold-500 italic">Expert Witnesses</span></h1>
            <p className="text-xl text-emerald-50/80 leading-relaxed mb-8">
              We are looking for highly qualified professionals across all disciplines who are committed to providing credible, objective, and court-ready testimony.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4">Why Join Us</h2>
            <h3 className="text-4xl font-serif text-emerald-950">Elevate Your Expert Practice</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Referrals",
                description: "Gain access to high-stakes litigation cases from top-tier law firms across the country.",
                icon: <Users className="h-8 w-8 text-gold-500" />
              },
              {
                title: "Professional Vetting",
                description: "Our rigorous vetting process enhances your credibility and ensures you're matched with the right cases.",
                icon: <ShieldCheck className="h-8 w-8 text-gold-500" />
              },
              {
                title: "Strategic Support",
                description: "Benefit from our case strategy support, report review, and trial preparation services.",
                icon: <Briefcase className="h-8 w-8 text-gold-500" />
              }
            ].map((benefit, index) => (
              <div key={index} className="p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
                <div className="mb-6">{benefit.icon}</div>
                <h4 className="text-xl font-serif text-emerald-950 mb-4">{benefit.title}</h4>
                <p className="text-emerald-900/60 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-serif text-emerald-950 mb-6">Expert Application</h3>
              <p className="text-lg text-emerald-900/70 mb-8">
                Please provide your professional details below. Our vetting team will review your credentials and contact you for a follow-up consultation.
              </p>
              
              <div className="space-y-6">
                {[
                  "Credential verification",
                  "Litigation history review",
                  "Publication and research review",
                  "Testimony experience evaluation",
                  "Conflict checks"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-gold-500" />
                    <span className="text-emerald-900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-emerald-100">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-emerald-900 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all" placeholder="Dr. Jane Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-emerald-900 mb-2">Primary Discipline</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all" placeholder="Forensic Psychology" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-emerald-900 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all" placeholder="jane.smith@expert.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-emerald-900 mb-2">Years of Experience</label>
                  <input type="number" className="w-full px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all" placeholder="15" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-emerald-900 mb-2">Brief Professional Bio</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all" placeholder="Summarize your expertise and testimony experience..."></textarea>
                </div>
                <button className="w-full bg-emerald-900 hover:bg-emerald-950 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center group">
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinNetwork;
