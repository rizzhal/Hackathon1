import { motion } from "framer-motion";
import { BadgeCheck, Wrench } from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const SkillCard = ({ resumeSkills = [], missingSkills = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]">

        <CardContent className="p-8">

          {/* Header */}

          <div className="mb-8 flex items-center gap-4">

            <div className="rounded-2xl bg-cyan-500/20 p-3">

              <Wrench
                size={28}
                className="text-cyan-400"
              />

            </div>

            <div>

              <h2 className="text-2xl font-bold text-white">
                Skill Analysis
              </h2>

              <p className="text-gray-400">
                Compare your resume with the job requirements
              </p>

            </div>

          </div>

          {/* Skills Grid */}

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Resume Skills */}

            <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">

              <div className="mb-5 flex items-center gap-3">

                <BadgeCheck
                  className="text-green-400"
                  size={22}
                />

                <h3 className="text-lg font-semibold text-green-400">
                  Resume Skills
                </h3>

              </div>

              <div className="flex flex-wrap gap-3">

                {resumeSkills.length > 0 ? (
                  resumeSkills.map((skill) => (
                    <Badge
                      key={skill}
                      className="rounded-full border border-green-400/30 bg-green-500/20 px-4 py-2 text-sm font-medium text-green-300 hover:bg-green-500/30"
                    >
                      {skill}
                    </Badge>
                  ))
                ) : (
                  <p className="text-gray-400">
                    No skills detected.
                  </p>
                )}

              </div>

            </div>

            {/* Missing Skills */}

            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">

              <div className="mb-5 flex items-center gap-3">

                <Wrench
                  className="text-red-400"
                  size={22}
                />

                <h3 className="text-lg font-semibold text-red-400">
                  Missing Skills
                </h3>

              </div>

              <div className="flex flex-wrap gap-3">

                {missingSkills.length > 0 ? (
                  missingSkills.map((skill) => (
                    <Badge
                      key={skill}
                      className="rounded-full border border-red-400/30 bg-red-500/20 px-4 py-2 text-sm font-medium text-red-300 hover:bg-red-500/30"
                    >
                      {skill}
                    </Badge>
                  ))
                ) : (
                  <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-5 py-3 text-green-400 font-medium">
                    🎉 Perfect Match! No missing skills detected.
                  </div>
                )}

              </div>

            </div>

          </div>

          {/* Bottom Stats */}

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

              <p className="text-sm text-gray-400">
                Skills Found
              </p>

              <h3 className="mt-2 text-4xl font-black text-green-400">
                {resumeSkills.length}
              </h3>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

              <p className="text-sm text-gray-400">
                Missing Skills
              </p>

              <h3 className="mt-2 text-4xl font-black text-red-400">
                {missingSkills.length}
              </h3>

            </div>

          </div>

        </CardContent>

      </Card>
    </motion.div>
  );
};

export default SkillCard;