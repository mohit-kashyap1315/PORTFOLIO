import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const WHATSAPP_NUMBER = "919335023918";
const MOHIT_EMAIL = "mohitkashyap1315@gmail.com";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent(`Portfolio Message from ${data.name}`);
    const body = encodeURIComponent(
      `Hi Mohit,\n\nMy name is ${data.name} and I came across your portfolio.\n\n${data.message}\n\nBest regards,\n${data.name}\n${data.email}`
    );
    window.open(`mailto:${MOHIT_EMAIL}?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 4000);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Mohit! I visited your portfolio and would like to connect with you."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-secondary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold inline-block relative">
            Let's Talk
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to hire me? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 lg:gap-20 max-w-5xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</h4>
                    <a
                      href={`mailto:${MOHIT_EMAIL}`}
                      className="text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors mt-1 block break-all"
                    >
                      {MOHIT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Phone</h4>
                    <a
                      href="tel:+919335023918"
                      className="text-base font-semibold text-foreground hover:text-primary transition-colors mt-1 block"
                    >
                      +91 9335023918
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</h4>
                    <p className="text-base font-semibold text-foreground mt-1">Khatauli, Muzaffarnagar</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-[0_0_20px_-5px_#22c55e] hover:shadow-[0_0_30px_-3px_#22c55e] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Message on WhatsApp
            </motion.button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-card p-5 sm:p-8 rounded-3xl border border-border/50 shadow-xl"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 gap-4 text-center"
              >
                <div className="p-4 rounded-full bg-green-500/10 border border-green-500/30">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Email Client Opened!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Your email app should have opened with the message ready. Just click Send to deliver it to Mohit.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    className={`w-full bg-background border ${
                      errors.name ? "border-destructive" : "border-border focus:border-primary"
                    } rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-200`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs ml-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full bg-background border ${
                      errors.email ? "border-destructive" : "border-border focus:border-primary"
                    } rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-200`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs ml-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={5}
                    className={`w-full bg-background border ${
                      errors.message ? "border-destructive" : "border-border focus:border-primary"
                    } rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-200 resize-none`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs ml-1">{errors.message.message}</p>
                  )}
                </div>

                <p className="text-xs text-muted-foreground ml-1">
                  Clicking Send will open your email app with the message ready to send to Mohit.
                </p>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01, translateY: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-[0_0_20px_-5px_hsl(var(--primary))] hover:shadow-[0_0_30px_-5px_hsl(var(--primary))] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message to Mohit
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
