import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const SkillCard = ({ resumeSkills, missingSkills }) => {
  return (
    <Card className="shadow-lg rounded-2xl col-span-2">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          🛠 Skill Analysis
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">

        <div>
          <h3 className="font-semibold mb-3">
            Resume Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {resumeSkills?.map((skill) => (
              <Badge
                key={skill}
                className="bg-green-600"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Missing Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {missingSkills?.length > 0 ? (
              missingSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="destructive"
                >
                  {skill}
                </Badge>
              ))
            ) : (
              <p className="text-green-600 font-medium">
                🎉 No Missing Skills
              </p>
            )}
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default SkillCard;