import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, User, Building, MessageSquare, AlertCircle
} from "lucide-react";
import { companyDetails, services } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "amc",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number";
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate reliable endpoint latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "amc",
        message: ""
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-28 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent-orange bg-accent-orange/10 px-4.5 py-1.5 rounded-full inline-block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-navy tracking-tight">
            Let's Blueprint Your IT Future
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed">
            Have an office relocation, hardware procurement query, or looking for a bulletproof AMC plan? Fill in our coordinates below or connect with our founders directly.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column Left: Coordinates and Maps */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Company Info Header */}
              <div className="space-y-3">
                <h3 className="text-2xl font-display font-extrabold text-navy">
                  Rajshree Systems and Technology
                </h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  Headquartered in Mumbai's prime technology trade district. We facilitate logistics and services across Maharashtra and PAN-India corporate hubs.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-6">
                
                {/* Physical address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-royal/10 text-royal rounded-xl shrink-0 mt-1">
                    <MapPin size={22} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider font-display">Corporate Head Office</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {companyDetails.address.line1}<br />
                      {companyDetails.address.line2}<br />
                      {companyDetails.address.cityZip}
                    </p>
                  </div>
                </div>

                {/* Sanjay Jain Info */}
                <div className="flex items-start space-x-4 border-t border-slate-100 pt-5">
                  <div className="p-3 bg-accent-orange/10 text-accent-orange rounded-xl shrink-0 mt-1">
                    <User size={22} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider font-display">
                        {companyDetails.contactPersons[0].name}
                      </h4>
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-mono font-bold">
                        {companyDetails.contactPersons[0].role}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-light">Direct Line & WhatsApp availability:</p>
                    <a 
                      href={`tel:${companyDetails.contactPersons[0].phone}`}
                      className="inline-flex items-center space-x-1 text-royal font-bold text-sm sm:text-base hover:text-accent-orange transition-colors"
                    >
                      <Phone size={14} />
                      <span>{companyDetails.contactPersons[0].phoneFormatted}</span>
                    </a>
                  </div>
                </div>

                {/* Janish Jain Info */}
                <div className="flex items-start space-x-4 border-t border-slate-100 pt-5">
                  <div className="p-3 bg-royal/10 text-royal rounded-xl shrink-0 mt-1">
                    <User size={22} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider font-display">
                        {companyDetails.contactPersons[1].name}
                      </h4>
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-mono font-bold">
                        {companyDetails.contactPersons[1].role}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-light">Partnerships & AMC Technical Escrow:</p>
                    <a 
                      href={`tel:${companyDetails.contactPersons[1].phone}`}
                      className="inline-flex items-center space-x-1 text-royal font-bold text-sm sm:text-base hover:text-accent-orange transition-colors"
                    >
                      <Phone size={14} />
                      <span>{companyDetails.contactPersons[1].phoneFormatted}</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Google Maps embed Frame */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-52 sm:h-64 mt-6">
              <iframe
                title="Office Location Map"
                src={companyDetails.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Column Right: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-light-gray rounded-3xl border border-slate-200/50 p-6 sm:p-10 relative">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-navy">
                      Send Secure Message
                    </h3>
                    <p className="text-xs text-slate-500 font-light">
                      All communications are encrypted and assigned to the relevant support administrator immediately.
                    </p>
                  </div>

                  {/* Name and Email Grid */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Sanjay Jain"
                          className={`w-full px-4 py-3 rounded-xl bg-white text-sm text-navy border focus:outline-none focus:ring-2 ${
                            formErrors.name 
                              ? "border-red-500 focus:ring-red-200" 
                              : "border-slate-200 focus:ring-royal/20 focus:border-royal"
                          }`}
                        />
                        {formErrors.name && (
                          <div className="flex items-center space-x-1 text-red-500 text-[10px] mt-1 font-medium">
                            <AlertCircle size={11} />
                            <span>{formErrors.name}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Corporate Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="partner@yourcompany.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white text-sm text-navy border focus:outline-none focus:ring-2 ${
                            formErrors.email 
                              ? "border-red-500 focus:ring-red-200" 
                              : "border-slate-200 focus:ring-royal/20 focus:border-royal"
                          }`}
                        />
                        {formErrors.email && (
                          <div className="flex items-center space-x-1 text-red-500 text-[10px] mt-1 font-medium">
                            <AlertCircle size={11} />
                            <span>{formErrors.email}</span>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Phone and Company Grid */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98208 54078"
                          className={`w-full px-4 py-3 rounded-xl bg-white text-sm text-navy border focus:outline-none focus:ring-2 ${
                            formErrors.phone 
                              ? "border-red-500 focus:ring-red-200" 
                              : "border-slate-200 focus:ring-royal/20 focus:border-royal"
                          }`}
                        />
                        {formErrors.phone && (
                          <div className="flex items-center space-x-1 text-red-500 text-[10px] mt-1 font-medium">
                            <AlertCircle size={11} />
                            <span>{formErrors.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enterprise Labs Ltd"
                        className="w-full px-4 py-3 rounded-xl bg-white text-sm text-navy border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal"
                      />
                    </div>

                  </div>

                  {/* Service type select dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="serviceType" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Select Primary Tech Requirement
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white text-sm text-navy border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
                        backgroundPosition: "right 12px center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "20px"
                      }}
                    >
                      <option value="amc">Annual Maintenance Contract (AMC)</option>
                      <option value="office-setup">Complete Office IT Deployment</option>
                      <option value="procurement">Hardware Procurement & Sourcing</option>
                      <option value="networking">Structured Network & WiFi Routing</option>
                      <option value="cctv">Surveillance & Security Access Locks</option>
                      <option value="repairs-upgrades">System Repairs & Performance Upgrades</option>
                      <option value="other">General Partnership Consultation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Scope / Description of Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Please outline any details (e.g. number of computers, office scale, brand preferences, structured cabling length, or urgent timeline constraints)..."
                      className="w-full px-4 py-3 rounded-xl bg-white text-sm text-navy border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-navy hover:bg-navy/95 text-white font-bold text-sm tracking-wide rounded-xl flex items-center justify-center space-x-2 shadow-lg hover:shadow-navy/20 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Analyzing Blueprints...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Secure Inquiry</span>
                      </>
                    )}
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 px-4 space-y-6 flex flex-col items-center justify-center h-full min-h-[400px]"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-md animate-bounce">
                    <CheckCircle2 size={36} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-extrabold text-navy">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-slate-600 font-light text-sm max-w-md">
                      Thank you. Your corporate tech consultation ticket has been compiled. Sanjay Jain or Janish Jain will review your specifications and contact you under 1 hour.
                    </p>
                  </div>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="bg-navy hover:bg-navy/90 text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>

      {/* ----------------- WHATSAPP FLOATING BUTTON ----------------- */}
      <a
        href="https://wa.me/917506774649"
        target="_blank"
        referrerPolicy="no-referrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
        title="Chat on WhatsApp"
        id="whatsapp-floating-btn"
      >
        <MessageSquare size={26} className="fill-white/10" />
        {/* Active Ping alert animation dot */}
        <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 ring-2 ring-white animate-ping" />
      </a>
    </section>
  );
}
