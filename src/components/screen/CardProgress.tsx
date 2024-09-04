import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "@/components/ui/progress"
import { MessageSquareText, ArrowRight } from "lucide-react";
import { Gap } from "../atoms/Gap";

export function CardProgress({cardName,progressName,progressValue}): JSX.Element {
    return (
        <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
                <div className="flex items-center" style={{ justifyContent: 'space-between' }}>
                    <div style={{ backgroundColor: '#FFC70036', borderRadius: 10, padding: 6 }}>
                        <MessageSquareText style={{ color: '#C69A01' }} />
                    </div>
                    <ArrowRight style={{ color: '#ADA8A8' }} />
                </div>
            </CardHeader>
            <CardContent>
                <Gap height={10} />
                <div className="text-xs text-muted-foreground" style={{ fontWeight: '700', fontSize: 15, color: '#00C9B1', textAlign: 'left' }}>
                    {cardName}
                </div>
            </CardContent>
            <CardContent>
                <Gap height={10} />
                <Progress value={progressValue} aria-label="25% increase" style={{ backgroundColor: '#C4C4C4' }} />
                <div className="flex items-center" style={{ justifyContent: 'space-between' }}>
                    <p>{progressValue} {progressName}</p>
                    <p>/100</p>
                </div>
            </CardContent>
        </Card>
    );
}
