import { LinkSideBar as Link } from "../atoms/LinkSideBar";
import { ChartColumn,ChartSpline,X } from 'lucide-react';
import { Badge } from "../ui/badge";
import '../../App.css'
import { Card } from "../ui/card";
import { Gap } from "../atoms/Gap";
  
  export function SideBar(): JSX.Element {
    return (
        <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6" >
            <Link href="/">
                <div style={{display: 'flex',gap:6}}>
                <span className="">WhatsTrack</span>
                </div>
            </Link>
              <Badge 
                variant="outline" 
                size="icon" 
                style={{color:'#d6a93b',borderColor:'#d6a93b',backgroundColor:'#fffae8'}}
              >
                  PRO
              </Badge>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <div>
            <Card style={{backgroundColor:'#C80404',color:'white',textAlign:'left',padding:10}}>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <label style={{fontSize:15,fontWeight:'600'}}>Billing Expiration</label>
              <X/>
              </div>
              <Gap height={10}/>
              <p style={{fontSize:10,fontWeight:'300'}}>Your billing is about expired in 3 days, Soon your account will be unactivated</p>
            </Card>
            <Gap height={24}/>
          </div>
            <div style={{textAlign:'left'}}>
              <label style={{fontSize:10,fontWeight:500,color:'#3A3A3A'}}>DASHBOARD</label>
              <Gap height={3}/>
              <Link
                href="#"
                icon="chart-column"
                active
              >
                  <p>Overview</p>
              </Link>
              <Link
                href="#"
                icon="chart-spline"
              >
                Analytics
              </Link>
            </div>
            <div style={{textAlign:'left'}}>
              <label style={{fontSize:10,fontWeight:500,color:'#3A3A3A'}}>DEVICES</label>
              <Gap height={3}/>
              <Link
                href="#"
                icon="monitor-smartphone"
              >
                Attached Devices
              </Link>
              <Link
                href="#"
                icon="users"
              >
                Customer Devices
              </Link>
            </div>
            <div style={{textAlign:'left'}}>
              <label style={{fontSize:10,fontWeight:500,color:'#3A3A3A'}}>MESSAGING</label>
              <Gap height={3}/>
              <Link
                href="#"
                icon="message-square-text"
              >
                Templating
              </Link>
              <Link
                href="#"
                icon="message-square"
              >
                Send Message
              </Link>
              <Link
                href="#"
                icon="reply"
              >
                Auto Reply
              </Link>
              <Link
                href="#"
                icon="rss"
              >
                Broadcast
              </Link>
              <Link
                href="#"
                icon="calendar-check2"
              >
                Scheduler
              </Link>
            </div>
            <div style={{textAlign:'left'}}>
              <label style={{fontSize:10,fontWeight:500,color:'#3A3A3A'}}>MEMBER</label>
              <Gap height={3}/>
              <Link
                href="#"
                icon="id-card"
              >
                Member Plan
              </Link>
              <Link
                href="#"
                icon="notepad-text"
              >
                Invoices
              </Link>
            </div>
            <div style={{textAlign:'left'}}>
              <label style={{fontSize:10,fontWeight:500,color:'#3A3A3A'}}>PROFILE</label>
              <Gap height={3}/>
              <Link
                href="#"
                icon="user"
              >
                Profile
              </Link>
              <Link
                href="#"
                icon="settings"
              >
                Settings
              </Link>
            </div>
            <div style={{textAlign:'left'}}>
              <label style={{fontSize:10,fontWeight:500,color:'#3A3A3A'}}>API DOCUMENTATION</label>
              <Gap height={3}/>
              <Link
                href="#"
                icon="file-code2"
              >
                API Documentation
              </Link>
            </div>
            </nav>
          </div>
          {/* <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    );
  }
  