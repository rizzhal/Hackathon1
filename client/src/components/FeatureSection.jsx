import { motion } from "framer-motion";
import {
  FileText,
  Target,
  BadgeCheck,
  Brain,
  Rocket,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI Resume Summary",
    description:
      "Generate concise AI-powered summaries of your resume to quickly highlight your strongest qualifications.",
  },
  {
    icon: Target,
    title: "Job Match Score",
    description:
      "Compare your resume with any job description using cosine similarity and receive an accurate match percentage.",
  },
  {
    icon: BadgeCheck,
    title: "ATS Score",
    description:
      "Evaluate how well your resume performs against Applicant Tracking Systems and identify improvement areas.",
  },
  {
    icon: Brain,
    title: "Skill Gap Analysis",
    description:
      "Identify missing technical and soft skills required for the target role.",
  },
  {
    icon: Rocket,
    title: "Hire Readiness",
    description:
      "Receive a readiness score that estimates how prepared you are to apply for the selected job.",
  },
  {
    icon: Sparkles,
    title: "AI Recruiter Feedback",
    description:
      "Get personalized recruiter-style suggestions to improve your resume and increase interview chances.",
  },
];

const FeatureSection = () => {
  return (
    <section
      id="features"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-100 w-100 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Features
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Our AI analyzes your resume from multiple perspectives to help you
            stand out before you apply.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                duration: 0.5,
                delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;