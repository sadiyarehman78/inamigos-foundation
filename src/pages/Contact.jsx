import React, { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { SITE } from "@/data/site";

const Contact = () => {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const submit = (e) => {
    e.preventDefault();
    if (!f.name || !f.email || !f.message) return toast.error("Name, email and message are required.");
    toast.success("Thanks — your message has been received.", { description: "We reply within 48 hours." });
    setF({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div data-testid="page-contact" className="bg-cream">
      {/* HERO */}
      <section className="border-b border-forest/25">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta mb-8">
            — Say hello
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] font-medium text-forest tracking-tighter text-balance">
            Write to <span className="italic text-terracotta">us</span>.
          </h1>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-6">
              Reach us at
            </div>
            <ul className="space-y-6 font-body">
              {SITE?.contact?.email && (
                <li className="flex items-start gap-4">
                  <Mail size={16} className="mt-1 text-terracotta" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-forest-light">Email</div>
                    <a href={`mailto:${SITE.contact.email}`} className="text-forest text-lg editorial-underline">{SITE.contact.email}</a>
                  </div>
                </li>
              )}
              {SITE?.contact?.phone && (
                <li className="flex items-start gap-4">
                  <Phone size={16} className="mt-1 text-terracotta" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-forest-light">Phone</div>
                    <a href={`tel:${SITE.contact.phone}`} className="text-forest text-lg editorial-underline">{SITE.contact.phone}</a>
                  </div>
                </li>
              )}
              {SITE?.contact?.address && (
                <li className="flex items-start gap-4">
                  <MapPin size={16} className="mt-1 text-terracotta" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-forest-light">Address</div>
                    <div className="text-forest text-base leading-relaxed max-w-sm">{SITE.contact.address}</div>
                  </div>
                </li>
              )}
            </ul>

            <div className="mt-14 pt-8 border-t border-forest/25">
              <div className="font-display italic text-2xl md:text-3xl text-forest leading-tight">
                "The best time to plant a tree was twenty years ago. The second best is today."
              </div>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-forest-light">— Amigos' credo</div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <form onSubmit={submit} data-testid="contact-form" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    data-testid="contact-name"
                    value={f.name}
                    onChange={e => setF({ ...f, name: e.target.value })}
                    className="w-full bg-transparent border-b border-forest py-3 text-forest focus:outline-none focus:border-terracotta"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    data-testid="contact-email"
                    value={f.email}
                    onChange={e => setF({ ...f, email: e.target.value })}
                    className="w-full bg-transparent border-b border-forest py-3 text-forest focus:outline-none focus:border-terracotta"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  data-testid="contact-subject"
                  value={f.subject}
                  onChange={e => setF({ ...f, subject: e.target.value })}
                  className="w-full bg-transparent border-b border-forest py-3 text-forest focus:outline-none focus:border-terracotta"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  data-testid="contact-message"
                  rows={6}
                  value={f.message}
                  onChange={e => setF({ ...f, message: e.target.value })}
                  className="w-full bg-transparent border-b border-forest py-3 text-forest focus:outline-none focus:border-terracotta"
                />
              </div>
              <button type="submit" data-testid="contact-submit" className="inline-flex items-center gap-3 bg-forest text-cream px-8 py-4 font-body text-xs uppercase tracking-[0.24em] hover:bg-terracotta transition-colors">
                Send message <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
