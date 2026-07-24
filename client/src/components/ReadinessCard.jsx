import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ReadinessCard = ({ score }) => {
  const numericScore = Number(score);

  const getStatus = () => {
    if (numericScore >= 90)
      return {
        label: "Ready to Apply",
        color: "text-green-400",
        badge: "bg-green-500/20 border-green-500/30",
      };

    if (numericScore >= 75)
      return {
        label: "Almost Ready",
        color: "text-yellow-400",
        badge: "bg-yellow-500/20 border-yellow-500/30",
      };

    if (numericScore >= 60)
      return {
        label: "Needs Improvement",
        color: "text-orange-400",
        badge: "bg-orange-500/20 border-orange-500/30",
      };

    return {
      label: "More Preparation Needed",
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
      <Card className="group overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl transition-all duration-300 hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]">

        <CardContent className="p-7">

          {/* Header */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-green-500/20 p-3">

                <Rocket
                  size={24}
                  className="text-green-400"
                />

              </div>

              <div>

                <h3 className="text-lg font-semibold text-white">
                  Hire Readiness
                </h3>

                <p className="text-sm text-gray-400">
                  Overall Job Readiness
                </p>

              </div>

            </div>

            <Sparkles className="text-green-400" />

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

export default ReadinessCard;