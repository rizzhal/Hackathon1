import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FeedbackCard = ({ feedback }) => {

  if (!feedback) return null;

  return (
    <Card className="shadow-lg rounded-2xl col-span-2">

      <CardHeader>

        <CardTitle className="text-xl font-semibold">
          🤖 AI Recruiter Feedback
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-8">

        <div>

          <h3 className="font-bold text-green-600 mb-2">
            Strengths
          </h3>

          <ul className="list-disc ml-5 space-y-2">
            {feedback.strengths?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

        <div>

          <h3 className="font-bold text-red-500 mb-2">
            Weaknesses
          </h3>

          <ul className="list-disc ml-5 space-y-2">
            {feedback.weaknesses?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

        <div>

          <h3 className="font-bold text-blue-500 mb-2">
            Suggestions
          </h3>

          <ul className="list-disc ml-5 space-y-2">
            {feedback.suggestions?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

      </CardContent>

    </Card>
  );
};

export default FeedbackCard;