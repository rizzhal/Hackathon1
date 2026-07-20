import { motion } from "framer-motion";
import { ArrowRight, Sparkles, } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center mt-15 gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-md"
      >
        <Sparkles size={16} />
        AI Powered Resume Intelligence
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-6xl font-black leading-tight text-white md:text-7xl"
      >
        Optimize Your
        <span className="block bg-linear-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Resume With AI
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 max-w-2xl text-lg leading-8 text-gray-400"
      >
        Upload your resume and compare it against any job description.
        Get an AI-powered resume summary, ATS score, skill-gap analysis,
        recruiter feedback, and hire readiness in seconds.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-wrap gap-5"
      >
        <Link to="/dashboard">
          <button className="group flex cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 via-violet-600 to-purple-600 px-7 py-4 font-semibold text-white transition duration-300 hover:scale-105">
            Analyze Resume

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </Link>

        <a
          href="https://github.com/rizzhal/Hackathon1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center cursor-pointer gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-white backdrop-blur-lg transition hover:border-blue-500 hover:bg-blue-500/10">
            <FaGithub size={18} />
            GitHub
          </button>
        </a>
      </motion.div>

      {/* Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 flex flex-wrap gap-10"
      >
        <div>
          <h2 className="text-3xl font-bold text-white">
            95%
          </h2>

          <p className="text-gray-400">
            ATS Accuracy
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            AI
          </h2>

          <p className="text-gray-400">
            Recruiter Feedback
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            5+
          </h2>

          <p className="text-gray-400">
            Resume Insights
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;