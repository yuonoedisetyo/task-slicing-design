import '../../App.css';
import { SideBarContent } from "./SideBarContent";
import { SideBarHead } from "./SideBarHead";

export function SideBar(): JSX.Element {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <SideBarHead/>
       <SideBarContent/>
      </div>
    </div>
  );
}
