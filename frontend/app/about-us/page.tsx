"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, ShieldCheck, TrendingUp, Users, Zap, Briefcase, Phone, Building2, Landmark, Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  const whyChooseUs = [
    { title: "Customer-first and transparent approach", desc: "We put our clients first with complete transparency and honest guidance.", icon: Users },
    { title: "Strong network with leading Banks & NBFCs", desc: "Our tie-ups with top banks and NBFCs help you get the best solutions.", icon: Landmark },
    { title: "Experienced financial and business consultants", desc: "Our expert team brings deep industry knowledge to serve you better.", icon: ShieldCheck },
    { title: "End-to-end assistance from consultation to execution", desc: "We are with you at every step, from planning to disbursal.", icon: Target },
    { title: "Fast, reliable, and technology-driven processes", desc: "Advanced technology and efficient processes ensure quick results.", icon: Zap },
    { title: "Ethical business practices with complete compliance", desc: "We follow the highest standards of ethics, honesty and compliance.", icon: CheckCircle2 },
    { title: "Dedicated support and long-term client relationships", desc: "We build long-term relationships by providing dedicated support whenever you need it.", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FAF6EE] via-[#fffcf3] to-[#FAF6EE]">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-28 overflow-hidden border-b border-[#f3e9c6]">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Left concentric circles */}
          <div className="absolute top-1/2 -left-[20%] -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] rounded-full border-[2px] border-[#D4A937]/10"></div>
          <div className="absolute top-1/2 -left-[10%] -translate-y-1/2 w-[200px] h-[200px] md:w-[600px] md:h-[600px] rounded-full border-[1px] border-[#D4A937]/10"></div>
          
          {/* Bottom Left dot grid */}
          <div className="absolute bottom-10 left-5 md:left-10 w-32 md:w-48 h-32 bg-[radial-gradient(#D4A937_2px,transparent_2px)] [background-size:24px_24px] opacity-30"></div>
          
          {/* Right semi-circle */}
          <div className="absolute top-20 -right-[15%] md:-right-[5%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border-[20px] md:border-[40px] border-[#D4A937]/10"></div>
          
          {/* Bottom Right solid quarter circle */}
          <div className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-[#d29b28] opacity-90"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#fef5d8] text-[#c28f1f] text-[14px] font-bold tracking-wide mb-8 shadow-sm">
              About KLFPRO Consulting
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#0f172a] mb-6 leading-[1.25] md:leading-[1.15]">
              Empowering Businesses with <br className="hidden md:block" />
              <span className="text-[#c28f1f]">
                Smart Financial & Business Solutions
              </span>
            </h1>

            <p className="text-gray-600 text-[16px] md:text-[18px] max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
              KLFPRO Consulting is your trusted partner for financial solutions, business consulting,
              and growth strategies. We simplify complexities and help you achieve your goals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/#products" className="bg-[#c28f1f] text-white hover:text-white font-bold px-8 py-3.5 rounded-md flex items-center gap-2 hover:bg-[#a67919] transition shadow-md shadow-[#c28f1f]/20">
                <Briefcase className="w-5 h-5" />
                Explore Services &rarr;
              </Link>
              <Link href="/contact" className="bg-white border border-[#c28f1f] text-[#0f172a] font-bold px-8 py-3.5 rounded-md flex items-center gap-2 hover:bg-[#fff9e6] transition shadow-sm">
                <Phone className="w-5 h-5 text-[#c28f1f]" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 lg:py-28 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#D4A937] font-bold text-[13px] tracking-wider uppercase">ABOUT US</span>
                <div className="h-[2px] w-12 bg-[#D4A937]"></div>
              </div>
              
              <h2 className="text-3xl md:text-[40px] font-extrabold text-[#081428] mb-8 leading-tight">
                Who We Are
              </h2>
              
              <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-medium">
                <p>
                  At <strong className="text-[#081428]">KLFPRO Consulting</strong>, we are committed to helping individuals, businesses, and financial institutions achieve sustainable growth through technology-driven consulting and financial solutions. Our expertise lies in bridging the gap between customers, banking partners, and businesses by delivering transparent, efficient, and result-oriented services.
                </p>
                <p>
                  With a customer-first approach, we specialize in providing comprehensive financial consulting, business advisory, loan facilitation, and operational support that enables our clients to make informed decisions with confidence. Our experienced professionals work closely with leading banks, NBFCs, and corporate partners to deliver solutions tailored to every client's unique requirements.
                </p>
                <p>
                  Over the years, KLFPRO Consulting has built a reputation for trust, integrity, and excellence. By combining industry expertise with digital innovation, we simplify complex financial processes and help businesses improve efficiency, accelerate growth, and unlock new opportunities.
                </p>
              </div>

              <Link href="#mission" className="inline-flex items-center gap-2 bg-[#081428] text-white font-semibold px-6 py-3.5 rounded-md mt-8 hover:bg-[#0a1a35] transition">
                <Building2 className="w-5 h-5" />
                Learn More About Us
              </Link>
            </motion.div>

            {/* Right Image & Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[350px] md:h-[450px] lg:h-[500px]"
            >
              <Image 
                src="/assets/about-us-meeting.jpg" 
                alt="KLFPRO Team Meeting" 
                fill 
                className="object-cover"
                unoptimized={true}
              />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#323a46]/95 backdrop-blur-md text-white rounded-xl p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-[#D4A937]" />
                  <div>
                    <div className="text-xl md:text-2xl font-bold">10,000+</div>
                    <div className="text-xs md:text-sm text-gray-300">Happy Clients</div>
                  </div>
                </div>
                
                <div className="hidden sm:block w-[1px] h-12 bg-white/20"></div>
                
                <div className="flex items-center gap-3">
                  <Landmark className="w-8 h-8 text-[#D4A937]" />
                  <div>
                    <div className="text-xl md:text-2xl font-bold">20+</div>
                    <div className="text-xs md:text-sm text-gray-300">Banking Partners</div>
                  </div>
                </div>

                <div className="hidden sm:block w-[1px] h-12 bg-white/20"></div>

                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-[#D4A937]" />
                  <div>
                    <div className="text-xl md:text-2xl font-bold">99%</div>
                    <div className="text-xs md:text-sm text-gray-300">Success Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white/40 backdrop-blur-sm border-y border-[#D4A937]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="w-32 h-32 text-[#081428]" />
              </div>
              <div className="w-12 h-12 bg-[#081428] rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#081428] mb-4 relative z-10">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                To deliver transparent, innovative, and customer-centric consulting solutions that empower individuals and businesses to achieve their financial and business goals while building long-term relationships based on trust and excellence.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Eye className="w-32 h-32 text-[#D4A937]" />
              </div>
              <div className="w-12 h-12 bg-[#D4A937] rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#081428] mb-4 relative z-10">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                To become one of India's most trusted consulting organizations by transforming financial and business services through innovation, technology, and exceptional customer experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#081428] mb-4">
              Why Choose <span className="text-[#D4A937]">KLFPRO</span> Consulting?
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-[2px] bg-[#D4A937]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A937]"></div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.slice(0, 6).map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-5 p-8 rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#fffbf0] flex items-center justify-center mt-1">
                  <feature.icon className="w-6 h-6 text-[#D4A937]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#081428] leading-snug mb-3">{feature.title}</h4>
                  <div className="w-8 h-[2px] bg-[#D4A937]/30 mb-3"></div>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* 7th Centered Item */}
          <div className="flex justify-center mt-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-start gap-5 p-8 rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 hover:shadow-lg transition-shadow max-w-[600px] w-full"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#fffbf0] flex items-center justify-center mt-1">
                <TrendingUp className="w-6 h-6 text-[#D4A937]" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-[#081428] leading-snug mb-3">{whyChooseUs[6].title}</h4>
                <div className="w-8 h-[2px] bg-[#D4A937]/30 mb-3"></div>
                <p className="text-[14px] text-gray-500 leading-relaxed">{whyChooseUs[6].desc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="py-20 lg:py-24 bg-transparent relative overflow-hidden border-t border-[#f3e9c6]">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:24px_24px] opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:24px_24px] opacity-40"></div>
        
        {/* Wavy lines simulation */}
        <div className="absolute -left-[20%] -bottom-[50%] w-[140%] h-[150%] rounded-[100%] border-[2px] border-[#D4A937]/10 opacity-50 pointer-events-none"></div>
        <div className="absolute -left-[10%] -bottom-[40%] w-[120%] h-[130%] rounded-[100%] border-[2px] border-[#D4A937]/5 opacity-50 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#D4A937] flex items-center justify-center mb-8 shadow-lg shadow-[#D4A937]/20">
              <Handshake className="w-8 h-8 text-white" />
            </div>
            
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-[#1a202c]">
              At <strong className="text-[#D4A937]">KLFPRO Consulting</strong>, we believe that every successful partnership begins with <strong className="text-[#D4A937]">trust</strong>. <br className="hidden md:block" />
              Our commitment to quality, innovation, and professional excellence continues <br className="hidden md:block" />
              to help businesses and individuals move forward with confidence, <br className="hidden md:block" />
              <strong className="text-[#D4A937]">creating value</strong> at every step of their journey.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
