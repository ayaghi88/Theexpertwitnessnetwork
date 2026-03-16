import React from 'react';
import { 
  Scale, 
  ShieldCheck, 
  Users, 
  Gavel, 
  ArrowRight, 
  ChevronRight,
  Award,
  Briefcase,
  Stethoscope,
  Brain,
  ShieldAlert,
  HeartHandshake,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000"
          alt="Legal library"
          className="w-full h-full object-cover brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold-500/20 text-gold-400 text-sm font-semibold tracking-widest uppercase mb-6 border border-gold-500/30">
            Professional Referral & Consulting
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
            Connecting Attorneys with <span className="text-gold-500 italic">Trusted Experts</span>
          </h1>
          <p className="text-xl text-emerald-50/80 mb-10 leading-relaxed max-w-2xl">
            The Expert Witness Network streamlines the process of identifying, vetting, and securing credible, court-ready experts so you can focus on building strong cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/consult"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-emerald-950 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-gold-500/30 group"
            >
              Consult an Expert
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full font-bold text-lg backdrop-blur-sm transition-all"
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-8 leading-tight">
              A Professional Referral and Consulting Platform
            </h3>
            <p className="text-lg text-emerald-900/70 mb-6 leading-relaxed">
              The Expert Witness Network connects attorneys with highly qualified expert witnesses across a wide range of disciplines. Our mission is to support legal professionals by providing access to credible, court-ready experts who can strengthen case strategy, clarify complex issues, and provide reliable testimony.
            </p>
            <p className="text-lg text-emerald-900/70 mb-8 leading-relaxed">
              We understand that the success of litigation often depends on the quality of expert analysis and testimony. Our network streamlines the process of identifying, vetting, and securing experts so attorneys can focus on building strong cases.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start space-x-3">
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <ShieldCheck className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950">Vetted Experts</h4>
                  <p className="text-sm text-emerald-900/60">Rigorous screening process</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950">Court Ready</h4>
                  <p className="text-sm text-emerald-900/60">Experienced testimony</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000"
                alt="Professional consultation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-emerald-900 text-white p-8 rounded-xl shadow-xl hidden sm:block">
              <p className="text-4xl font-serif font-bold text-gold-500 mb-1">100%</p>
              <p className="text-sm font-medium tracking-widest uppercase opacity-70">Vetted Professionals</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Expert Witness Referral",
      icon: <Users className="h-8 w-8" />,
      description: "We connect attorneys with qualified experts in specialized fields relevant to litigation. Each expert is carefully screened for credentials and experience.",
      features: [
        "Forensic psychology & mental health",
        "Medical experts",
        "Accident reconstruction",
        "Financial & economic analysis",
        "Forensic accounting",
        "Digital forensics"
      ]
    },
    {
      title: "Expert Witness Consulting",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Strategic support throughout the litigation lifecycle, from initial identification to trial preparation.",
      features: [
        "Expert identification & placement",
        "Case review support",
        "Expert report consultation",
        "Trial preparation support",
        "Daubert preparation",
        "Testimony strategy"
      ]
    },
    {
      title: "Expert Witness Vetting",
      icon: <ShieldCheck className="h-8 w-8" />,
      description: "Our rigorous vetting process ensures every expert meets the highest standards of professional integrity.",
      features: [
        "Credential verification",
        "Litigation history review",
        "Publication & research review",
        "Testimony experience evaluation",
        "Conflict checks"
      ]
    },
    {
      title: "Case Strategy Support",
      icon: <Gavel className="h-8 w-8" />,
      description: "Enhance your case with expert-led strategic insights and preparation.",
      features: [
        "Expert report review",
        "Deposition preparation",
        "Expert testimony preparation",
        "Cross-examination risk assessment"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-emerald-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-900/20 skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6">Comprehensive Support for Legal Professionals</h3>
          <p className="text-emerald-50/60 text-lg">
            From initial case review to final testimony, we provide the expertise needed to navigate complex litigation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-emerald-900/40 border border-emerald-800 p-10 rounded-2xl hover:bg-emerald-900/60 transition-all group"
            >
              <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-serif mb-4">{service.title}</h4>
              <p className="text-emerald-50/70 mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-emerald-50/90">
                    <ChevronRight className="h-4 w-4 text-gold-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PracticeAreas = () => {
  const areas = [
    { name: "Criminal Defense", icon: <ShieldAlert /> },
    { name: "Personal Injury", icon: <HeartHandshake /> },
    { name: "Medical Malpractice", icon: <Stethoscope /> },
    { name: "Civil Rights", icon: <Scale /> },
    { name: "Family Law", icon: <Users /> },
    { name: "Forensic Mental Health", icon: <Brain /> },
    { name: "Wrongful Death", icon: <Gavel /> },
    { name: "Employment Disputes", icon: <Briefcase /> },
  ];

  return (
    <section id="practice-areas" className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4">Expertise</h2>
            <h3 className="text-4xl font-serif text-emerald-950">Practice Areas Supported</h3>
          </div>
          <p className="text-emerald-900/60 max-w-md">
            Our network spans across diverse legal sectors, providing specialized knowledge where it matters most.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-emerald-100 flex flex-col items-center text-center group transition-all"
            >
              <div className="text-emerald-700 mb-4 group-hover:text-gold-600 transition-colors">
                {React.cloneElement(area.icon as React.ReactElement, { className: "h-10 w-10" })}
              </div>
              <h4 className="font-bold text-emerald-950">{area.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Curated Experts",
      description: "Every expert in our network is carefully vetted to ensure credibility, reliability, and courtroom readiness."
    },
    {
      title: "Efficient Placement",
      description: "We reduce the time attorneys spend searching for experts by quickly matching cases with qualified professionals."
    },
    {
      title: "Litigation-Focused",
      description: "Our network understands the demands of litigation and ensures experts are prepared for depositions and trial testimony."
    },
    {
      title: "Professional Integrity",
      description: "We prioritize objectivity and ethical standards in expert testimony above all else."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-950 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4">The Advantage</h2>
            <h3 className="text-4xl font-serif text-white mb-12">Why Choose The Expert Witness Network</h3>
            
            <div className="space-y-10">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 font-serif text-xl font-bold">
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-white mb-2">{reason.title}</h4>
                    <p className="text-emerald-50/60 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
              alt="Professional handshake"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-950/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Case Consultation",
      description: "Attorneys provide a brief overview of their case and the type of expertise needed."
    },
    {
      title: "Expert Identification",
      description: "Our team identifies experts with relevant credentials and experience."
    },
    {
      title: "Expert Placement",
      description: "Attorneys are connected with the most appropriate expert for consultation and testimony."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4">Process</h2>
          <h3 className="text-4xl font-serif text-emerald-950 mb-6">How It Works</h3>
          <p className="text-emerald-900/60 text-lg">
            A streamlined approach to securing the expertise your case demands.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-emerald-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-emerald-100 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-900 text-gold-500 flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-lg">
                  {index + 1}
                </div>
                <h4 className="text-2xl font-serif text-emerald-950 mb-4">Step {index + 1}: {step.title}</h4>
                <p className="text-emerald-900/60 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4">Contact</h2>
            <h3 className="text-4xl font-serif text-emerald-950 mb-8">Get in Touch</h3>
            <p className="text-lg text-emerald-900/70 mb-12 leading-relaxed">
              Ready to strengthen your case with expert testimony? Contact us today for a confidential consultation.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-50 p-3 rounded-full text-emerald-700">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-900/50 uppercase tracking-wider">Phone</p>
                  <p className="text-xl font-serif text-emerald-950">225-407-0850</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-50 p-3 rounded-full text-emerald-700">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-900/50 uppercase tracking-wider">Email</p>
                  <p className="text-xl font-serif text-emerald-950">customer.support@theexpertwitnessnetwork.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-50 p-3 rounded-full text-emerald-700">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-900/50 uppercase tracking-wider">Website</p>
                  <p className="text-xl font-serif text-emerald-950">theexpertwitnessnetwork.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-50 p-10 rounded-3xl border border-emerald-100">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-emerald-900 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-emerald-900 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-emerald-900 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-white border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all" placeholder="john@lawfirm.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-emerald-900 mb-2">Case Type</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all">
                  <option>Criminal Defense</option>
                  <option>Personal Injury</option>
                  <option>Medical Malpractice</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-emerald-900 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all" placeholder="Tell us about your expert needs..."></textarea>
              </div>
              <button className="w-full bg-emerald-900 hover:bg-emerald-950 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center group">
                Send Inquiry
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <PracticeAreas />
      <WhyChooseUs />
      <HowItWorks />
      <Contact />
    </>
  );
};

export default Home;
