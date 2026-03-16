import React from 'react';
import { motion } from 'motion/react';
import { 
  Scale, 
  Gavel, 
  Search, 
  FileText, 
  ArrowRight,
  Phone,
  Mail,
  Clock,
  ShieldCheck
} from 'lucide-react';

const Consult = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
            alt="Legal library" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Request a <span className="text-gold-500 italic">Case Consultation</span></h1>
            <p className="text-xl text-emerald-50/80 leading-relaxed mb-8">
              Partner with The Expert Witness Network to identify the perfect expert for your litigation needs. Our team is ready to support your case strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4">Strategic Support</h2>
              <h3 className="text-4xl font-serif text-emerald-950 mb-8">How We Support Your Case</h3>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Expert Identification",
                    description: "We match your specific case requirements with experts from our vetted network.",
                    icon: <Search className="h-6 w-6 text-emerald-700" />
                  },
                  {
                    title: "Report Review",
                    description: "Our consultants provide critical feedback on expert reports to ensure clarity and strength.",
                    icon: <FileText className="h-6 w-6 text-emerald-700" />
                  },
                  {
                    title: "Trial Prep",
                    description: "Prepare your experts for the rigors of deposition and trial testimony.",
                    icon: <Gavel className="h-6 w-6 text-emerald-700" />
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-emerald-950 mb-2">{item.title}</h4>
                      <p className="text-emerald-900/60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-emerald-950 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-3xl font-serif mb-8 text-gold-500">Consultation Request</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-emerald-50/70 mb-2">Attorney Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-emerald-900/50 border border-emerald-800 text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all" placeholder="Robert Vance, Esq." />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-emerald-50/70 mb-2">Law Firm</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-emerald-900/50 border border-emerald-800 text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all" placeholder="Vance & Associates" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-emerald-50/70 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-emerald-900/50 border border-emerald-800 text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all" placeholder="robert@vancelaw.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-emerald-50/70 mb-2">Case Overview & Expert Needs</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-emerald-900/50 border border-emerald-800 text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all" placeholder="Briefly describe the case and the type of expertise required..."></textarea>
                </div>
                <button className="w-full bg-gold-500 hover:bg-gold-600 text-emerald-950 font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center group">
                  Submit Request
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Support */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-gold-500 mb-6">
            <Clock className="h-6 w-6" />
            <span className="font-bold tracking-widest uppercase text-sm">Urgent Request?</span>
          </div>
          <h3 className="text-3xl font-serif mb-8">Need an expert immediately?</h3>
          <p className="text-xl text-emerald-50/70 mb-10 max-w-2xl mx-auto">
            For time-sensitive cases or immediate expert placement, please call our priority line.
          </p>
          <a href="tel:225-407-0850" className="text-4xl font-serif text-gold-500 hover:text-gold-400 transition-colors">
            225-407-0850
          </a>
        </div>
      </section>
    </div>
  );
};

export default Consult;
