import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const MatchScoreCard = ({ score }) => {

    const numericScore = Number(score);

    const getStatus = () => {

        if (numericScore >= 90)
            return {
                label: "Excellent Match",
                color: "text-green-500",
            };

        if (numericScore >= 75)
            return {
                label: "Good Match",
                color: "text-yellow-500",
            };

        if (numericScore >= 60)
            return {
                label: "Average Match",
                color: "text-orange-500",
            };

        return {
            label: "Needs Improvement",
            color: "text-red-500",
        };
    };

    const status = getStatus();

    return (
        <Card>

            <CardHeader>

                <CardTitle>
                    Match Score
                </CardTitle>

            </CardHeader>

            <CardContent>

                <h1
                    className={`text-5xl font-bold ${status.color}`}
                >
                    {numericScore}%
                </h1>

                <Progress
                    value={numericScore}
                    className="mt-5"
                />

                <p
                    className={`mt-3 font-medium ${status.color}`}
                >
                    {status.label}
                </p>

            </CardContent>

        </Card>
    );
};

export default MatchScoreCard;