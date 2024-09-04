import '../../App.css';
import { LinkSideBar as Link } from "../atoms/LinkSideBar";
import { Badge } from "../ui/badge";

export function SideBarHead(): JSX.Element {
  return (
        <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6" >
          <Link href="/">
            <div style={{ display: 'flex', gap: 6 }}>
              <span className="">WhatsTrack</span>
            </div>
          </Link>
          <Badge
            variant="outline"
            size="icon"
            style={{ color: '#d6a93b', borderColor: '#d6a93b', backgroundColor: '#fffae8' }}
          >
            PRO
          </Badge>
        </div>
       
  );
}
