import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Star } from "lucide-react";

const certificates = [
  {
    title: "Samsung Innovation Campus – Big Data Training",
    issuer: "Samsung Innovation Campus 2024",
    date: "Jun–Aug 2024",
    duration: "2 Months",
    icon: "🏆",
    color: "from-blue-600/20 to-cyan-500/10",
    border: "border-blue-500/40",
    image: `${import.meta.env.BASE_URL}images/cert-samsung.jpg`,
    credential: "SIC01745",
    highlight: true,
  },
  {
    title: "MERN Stack Web Development Training",
    issuer: "APTRON NOIDA",
    date: "Jun–Nov 2025",
    duration: "8 Months",
    icon: "💻",
    color: "from-cyan-500/20 to-teal-500/10",
    border: "border-cyan-500/40",
    credential: "APTL-1703",
    highlight: true,
  },
  {
    title: "Google Professional Cloud Developer: Cloud Application Modernization",
    issuer: "Infosys SpringBoard",
    date: "May 7, 2025",
    duration: "Course",
    icon: "☁️",
    color: "from-blue-400/20 to-indigo-500/10",
    border: "border-blue-400/40",
    verifyUrl: "https://verify.onwingspan.com",
  },
  {
    title: "Java Training Crash Course",
    issuer: "Udemy",
    date: "2024",
    duration: "Course",
    icon: "☕",
    color: "from-orange-500/20 to-amber-400/10",
    border: "border-orange-400/40",
  },
  {
    title: "AWS Certified Developer – Associate Certification",
    issuer: "Infosys SpringBoard",
    date: "Mar 25, 2025",
    duration: "Certification",
    icon: "🔶",
    color: "from-orange-600/20 to-yellow-500/10",
    border: "border-orange-500/40",
    verifyUrl: "https://verify.onwingspan.com",
    highlight: true,
  },
  {
    title: "Big Data & Cloud Computing Internship",
    issuer: "YBI Foundation",
    date: "Feb 24, 2024",
    duration: "1 Month",
    icon: "📊",
    color: "from-purple-500/20 to-violet-500/10",
    border: "border-purple-500/40",
    credential: "Q3H1LREH9HOGM",
    verifyUrl: "https://www.ybifoundation.org/certificate-validation",
  },
  {
    title: "AI Tools Workshop",
    issuer: "Be10x",
    date: "2024",
    duration: "Workshop",
    icon: "🤖",
    color: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/40",
  },
  {
    title: "Web Development Training",
    issuer: "AARAMBH Community",
    date: "2024",
    duration: "1 Week",
    icon: "🌐",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/40",
  },
  {
    title: "Artificial Intelligence & Machine Learning Internship",
    issuer: "YBI Foundation",
    date: "Feb 4, 2024",
    duration: "1 Month",
    icon: "🧠",
    color: "from-indigo-500/20 to-blue-500/10",
    border: "border-indigo-500/40",
    credential: "9MNX02RX1RI8B",
    verifyUrl: "https://www.ybifoundation.org/certificate-validation",
  },
  {
    title: "AI Impact Summit 2026",
    issuer: "AI Impact Summit – India",
    date: "2026",
    duration: "Event · Attendee",
    icon: "🌟",
    color: "from-yellow-500/20 to-orange-500/10",
    border: "border-yellow-500/40",
    image: `${import.meta.env.BASE_URL}images/cert-ai-summit.png`,
    highlight: true,
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-16 md:py-24 relative bg-secondary/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold inline-block relative">
            Certifications &amp; Achievements
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuously learning and building expertise through recognized programs, internships, and events.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
            <Award className="w-4 h-4" />
            {certificates.length}+ Certifications &amp; Achievements
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.07 }}
              whileHover={{ scale: 1.02, translateY: -4 }}
              className={`relative bg-gradient-to-br ${cert.color} backdrop-blur-sm rounded-2xl border ${cert.border} transition-all duration-300 overflow-hidden flex flex-col ${cert.highlight ? "shadow-lg" : ""}`}
            >
              {/* Certificate image (if available) */}
              {cert.image && (
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-5 flex flex-col gap-3 flex-1">
                {/* Top row */}
                <div className="flex items-start justify-between gap-2">
                  <span className="text-3xl">{cert.icon}</span>
                  <div className="flex flex-col items-end gap-1">
                    <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground bg-background/50 px-2.5 py-1 rounded-full border border-border/50">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </span>
                    {cert.highlight && (
                      <span className="flex items-center gap-1 text-xs font-bold text-yellow-400 bg-yellow-500/10 px-2.5 py-1 rounded-full border border-yellow-500/30">
                        <Star className="w-3 h-3 fill-yellow-400" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Issuer */}
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-sm leading-snug mb-1">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Award className="w-3 h-3 text-accent shrink-0" />
                    {cert.issuer}
                  </p>
                </div>

                {/* Duration + Credential */}
                <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-border/30">
                  <span className="text-xs font-semibold text-accent">{cert.duration}</span>
                  {cert.credential && (
                    <span className="text-xs text-muted-foreground font-mono bg-background/40 px-2 py-0.5 rounded">
                      ID: {cert.credential}
                    </span>
                  )}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                      Verify <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://drive.google.com/drive/folders/19cKR2UqWgJmlzCZCmdPE4NSUkFEEBiqe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary/10 text-primary font-semibold rounded-xl border border-primary/30 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_25px_-5px_hsl(var(--primary))] transition-all duration-300"
          >
            <Award className="w-5 h-5" />
            View All Certificate Files
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
