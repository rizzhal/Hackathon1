const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-6">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} ResumeAI • Built with React, Express,
          Tailwind CSS, Hugging Face Inference API and NLP.
        </p>
      </div>
    </footer>
  );
};

export default Footer;