import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ReadinessCard = ({ score }) => {
  const numericScore = Number(score);

  const getStatus = () => {
    if (numericScore >= 90) {
      return {
        label: "Ready to Apply 🚀",
        color: "text-green-500",
      };
    }

    if (numericScore >= 75) {
      return {
        label: "Almost Ready 👍",
        color: "text-yellow-500",
      };
    }

    if (numericScore >= 60) {
      return {
        label: "Needs Some Improvements ⚡",
        color: "text-orange-500",
      };
    }

    return {
      label: "Needs More Preparation 📚",
      color: "text-red-500",
    };
  };

  const status = getStatus();

  return (
    <Card className="shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          🚀 Hire Readiness
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className={`text-5xl font-bold ${status.color}`}>
            {numericScore}%
          </h1>

          <Progress value={numericScore} className="w-full h-3" />

          <p className={`text-lg font-medium ${status.color}`}>
            {status.label}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReadinessCard;