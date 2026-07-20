import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-5 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2"
    >
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-8 py-4 backdrop-blur-xl">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600">
            <Sparkles className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              ResumeAI
            </h1>

            <p className="text-xs text-gray-400">
              AI Resume Analyzer
            </p>
          </div>
        </Link>

        {/* Navigation */}

        <div className="hidden items-center gap-10 md:flex">

          <a
            href="#features"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Features
          </a>

          {/* <a
            href="#how"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            How it Works
          </a> */}

          <a
            href="#upload"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Analyze
          </a>

          <a
            href="https://github.com/rizzhal/Hackathon1"
            target="_blank"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            GitHub
          </a>

        </div>

        {/* CTA */}

        <Link to="/dashboard">

          <button
            className="rounded-xl bg-linear-to-r
            from-blue-600
            via-violet-600
            to-purple-600
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            shadow-lg
            transition
            duration-300
            hover:scale-105
            hover:shadow-violet-500/40"
          >
            Analyze Resume
          </button>

        </Link>

      </div>
    </motion.nav>
  );
};

export default Navbar;