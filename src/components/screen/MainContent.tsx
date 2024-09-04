import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "@/components/ui/progress"
import { MessageSquareText,ArrowRight } from "lucide-react";
import { Gap } from "../atoms/Gap";
import { CardProgress } from "./CardProgress";
  
  export function MainContent(): JSX.Element {
    return (
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {/* <div style={{backgroundImage: `url("https://s3-alpha-sig.figma.com/img/fc9b/1c62/68e8de1df89ddecc951cc7a0c5fd040c?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AY0QRNVhCYAaNImxWgKuEgZbhjKWTKvsk4m2HSreUCUyKide8kxsB30hyDQmmhoGiGxD4fGpIEqPBjyjQDduaSXynv9x3J83nr2M5Wyu9GPvsb0bITdUtkk3qwl8~rKtd6e~PNN8AG5v2C0GB1eJSFQeAnjhcVdqe3eaiIbVp52dDbDajJECmtjs~z8Eyj4ObAZOU0Y7hU0et87~kQhS2nFnQ-EHS2lGUyS89PMfzMq1iz9B6igFKgYQPS9esnQRw~bbz7-9U3UwZq3r48lVKFFtluA5PyHP-ABLLS7PFTbCl3jn0ZvvSFz4Ioz3wo-dkJga1uStQ7-5lTjNjtLq1Q__")`,padding:40}}> */}
              <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Here’s What All You Need</h1>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <CardProgress cardName="MESSAGE BANDWIDTH" progressName="Messages" progressValue="20"/>
                <CardProgress cardName="BROADCAST MESSAGE" progressName="Messages" progressValue="20"/>
                <CardProgress cardName="CONVERSATION" progressName="Conversations" progressValue="20"/>
                <CardProgress cardName="OUTBOND MESSAGE" progressName="Persent" progressValue="35"/>
              </div>
            {/* </div> */}
            <div
              className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            >
              <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight">
                  You have no products
                </h3>
                <p className="text-sm text-muted-foreground">
                  You can start selling as soon as you add a product.
                </p>
                <Button className="mt-4">Add Product</Button>
              </div>
            </div>
          </main>
    );
  }
  