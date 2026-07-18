import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const SummaryCard = ({ summary }) => {
  return (
    <Card className="shadow-lg rounded-2xl col-span-2">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          📄 AI Resume Summary
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-40">
          <p className="text-gray-700 dark:text-gray-300 leading-7">
            {summary}
          </p>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;