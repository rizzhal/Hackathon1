import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const AtsCard = ({ score }) => {

    return (

        <Card>

            <CardHeader>

                <CardTitle>
                    ATS Score
                </CardTitle>

            </CardHeader>

            <CardContent>

                <h1 className="text-5xl font-bold">
                    {score}%
                </h1>

                <Progress
                    value={score}
                    className="mt-5"
                />

            </CardContent>

        </Card>

    );

};

export default AtsCard;