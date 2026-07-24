import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const AtsCard = ({ score }) => {
  const numericScore = Number(score);

  const getStatus = () => {
    if (numericScore >= 90)
      return {
        label: "Excellent ATS",
        color: "text-green-400",
        badge: "bg-green-500/20 border-green-500/30",
      };

    if (numericScore >= 75)
      return {
        label: "Good ATS",
        color: "text-blue-400",
        badge: "bg-blue-500/20 border-blue-500/30",
      };

    if (numericScore >= 60)
      return {
        label: "Needs Optimization",
        color: "text-yellow-400",
        badge: "bg-yellow-500/20 border-yellow-500/30",
      };

    return {
      label: "Poor ATS",
      color: "text-red-400",
      badge: "bg-red-500/20 border-red-500/30",
    };
  };

  const status = getStatus();

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <Card className="group overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]">

        <CardContent className="p-7">

          {/* Header */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-blue-500/20 p-3">

                <ShieldCheck
                  size={24}
                  className="text-blue-400"
                />

              </div>

              <div>

                <h3 className="text-lg font-semibold text-white">
                  ATS Score
                </h3>

                <p className="text-sm text-gray-400">
                  Resume Optimization
                </p>

              </div>

            </div>

            <CheckCircle2 className="text-blue-400" />

          </div>

          {/* Score */}

          <div className="mt-8 flex items-end gap-2">

            <h1 className={`text-6xl font-black ${status.color}`}>
              {numericScore}
            </h1>

            <span className="mb-2 text-2xl font-bold text-gray-400">
              %
            </span>

          </div>

          {/* Progress */}

          <Progress
            value={numericScore}
            className="mt-8 h-3 rounded-full bg-white/10"
          />

          {/* Footer */}

          <div className="mt-6 flex items-center justify-between">

            <span
              className={`rounded-full border px-4 py-1 text-sm font-medium ${status.badge} ${status.color}`}
            >
              {status.label}
            </span>

            <p className="text-sm text-gray-400">
              AI Generated
            </p>

          </div>

        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AtsCard;