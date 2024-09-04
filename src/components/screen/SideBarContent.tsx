import { X } from 'lucide-react';
import '../../App.css';
import { Gap } from "../atoms/Gap";
import { LinkSideBar as Link } from "../atoms/LinkSideBar";
import { Card } from "../ui/card";

export function SideBarContent(): JSX.Element {
  return (
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <div>
              <Card style={{ backgroundColor: '#C80404', color: 'white', textAlign: 'left', padding: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <label style={{ fontSize: 15, fontWeight: '600' }}>Billing Expiration</label>
                  <X />
                </div>
                <Gap height={10} />
                <p style={{ fontSize: 10, fontWeight: '300' }}>Your billing is about expired in 3 days, Soon your account will be unactivated</p>
              </Card>
              <Gap height={24} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label style={{ fontSize: 10, fontWeight: 500, color: '#3A3A3A' }}>DASHBOARD</label>
              <Gap height={3} />
              <Link
                // href="#"
                icon="chart-column"
                active
              >
               Overview
              </Link>
              <Link
                // href="#"
                icon="chart-spline"
              >
                Analytics
              </Link>
            </div>
            <div style={{ textAlign: 'left' }}>
              <label style={{ fontSize: 10, fontWeight: 500, color: '#3A3A3A' }}>DEVICES</label>
              <Gap height={3} />
              <Link
                // href="#"
                icon="monitor-smartphone"
              >
                Attached Devices
              </Link>
              <Link
                // href="#"
                icon="users"
              >
                Customer Devices
              </Link>
            </div>
            <div style={{ textAlign: 'left' }}>
              <label style={{ fontSize: 10, fontWeight: 500, color: '#3A3A3A' }}>MESSAGING</label>
              <Gap height={3} />
              <Link
                // href="#"
                icon="message-square-text"
              >
                Templating
              </Link>
              <Link
                // href="#"
                icon="message-square"
              >
                Send Message
              </Link>
              <Link
                // href="#"
                icon="reply"
              >
                Auto Reply
              </Link>
              <Link
                // href="#"
                icon="rss"
              >
                Broadcast
              </Link>
              <Link
                // href="#"
                icon="calendar-check2"
              >
                Scheduler
              </Link>
            </div>
            <div style={{ textAlign: 'left' }}>
              <label style={{ fontSize: 10, fontWeight: 500, color: '#3A3A3A' }}>MEMBER</label>
              <Gap height={3} />
              <Link
                // href="#"
                icon="id-card"
              >
                Member Plan
              </Link>
              <Link
                // href="#"
                icon="notepad-text"
              >
                Invoices
              </Link>
            </div>
            <div style={{ textAlign: 'left' }}>
              <label style={{ fontSize: 10, fontWeight: 500, color: '#3A3A3A' }}>PROFILE</label>
              <Gap height={3} />
              <Link
                // href="#"
                icon="user"
              >
                Profile
              </Link>
              <Link
                // href="#"
                icon="settings"
              >
                Settings
              </Link>
            </div>
            <div style={{ textAlign: 'left' }}>
              <label style={{ fontSize: 10, fontWeight: 500, color: '#3A3A3A' }}>API DOCUMENTATION</label>
              <Gap height={3} />
              <Link
                // href="#"
                icon="file-code2"
              >
                API Documentation
              </Link>
            </div>
          </nav>
        </div>
  );
}
