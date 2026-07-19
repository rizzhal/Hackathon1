import { useState } from "react";
import { Upload, FileText, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "@/services/api";
import { toast } from "sonner";
import Loading from "./Loading";

const UploadSection = () => {
  const navigate = useNavigate();

  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!resume) {
      toast.error("Please upload a resume")
      return;
    }

    if (!jobDescription.trim()) {
      toast.error("Please enter a job description")
      return;
    }

    try {
      setLoading(true);
      // if(loading){
      //   return <Loading/>
      // }

      const formData = new FormData();
      formData.append("resume", resume);
      formData.append("jobDescription", jobDescription);

      const response = await api.post(
        "/resume/analyze",
        formData
      );
      console.log(response.data);

      sessionStorage.setItem(
        "analysis",
        JSON.stringify(response.data)
      )
      toast.success("Resume analyzed succesfully")
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate("/dashboard", {
        state: {
          analysis: response.data,
        },
      });
    } catch (error) {
      console.error("Analysis failed:", error);
      alert("Something went wrong while analyzing the resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
    id="upload"
    className="relative py-32 bg-black"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-87.5 w-87.5 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            AI Resume Analysis
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Analyze Your Resume
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Upload your resume and paste a job description to receive
            AI-powered insights instantly.
          </p>
        </div>

        {/* Upload Card */}

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          {/* Upload */}

          <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-600 p-12 transition hover:border-blue-500 hover:bg-blue-500/5">

            <Upload
              className="text-blue-400 transition group-hover:scale-110"
              size={60}
            />

            <h3 className="mt-6 text-2xl font-bold text-white">
              Drag & Drop Resume
            </h3>

            <p className="mt-2 text-gray-400">
              PDF files only
            </p>

            <input
              type="file"
              accept=".pdf"
              hidden
              onChange={(e) => setResume(e.target.files[0])}
            />
          </label>

          {resume && (
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-green-500/10 p-4">
              <FileText className="text-green-400" />

              <span className="text-white">
                {resume.name}
              </span>
            </div>
          )}

          {/* Job Description */}

          <div className="mt-10">
            <label className="mb-3 block text-lg font-semibold text-white">
              Job Description
            </label>

            <textarea
              rows={8}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="w-full rounded-2xl border border-white/10 bg-black/30 p-5 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Button */}

          <div className="mt-10 flex justify-center">
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 px-10 py-4 text-lg font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                 <Loading/>
                </>
              ) : (
                <>
                  <Upload />
                  Analyze Resume
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;