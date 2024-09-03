import { MainContent } from "@/components/screen/MainContent";
import { SideBar } from "@/components/screen/SideBar";

export function Dashboard(): JSX.Element {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar/>
     <MainContent/>
    </div>
  );
}
