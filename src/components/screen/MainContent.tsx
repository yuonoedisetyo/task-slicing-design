import { IconAdd, IconPhone, IlustrasionProfil2, IlustrasionProfil3 } from "@/assets/index";
import { ChevronRight, GripVertical } from "lucide-react";
import { Gap } from "../atoms/Gap";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { CardProgress } from "./CardProgress";

export function MainContent(): JSX.Element {
  return (
    <main className="flex flex-1 flex-col " >
      <div className="gap-4 p-4 lg:gap-6 lg:p-6" style={{ backgroundImage: `url("https://s3-alpha-sig.figma.com/img/fc9b/1c62/68e8de1df89ddecc951cc7a0c5fd040c?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AY0QRNVhCYAaNImxWgKuEgZbhjKWTKvsk4m2HSreUCUyKide8kxsB30hyDQmmhoGiGxD4fGpIEqPBjyjQDduaSXynv9x3J83nr2M5Wyu9GPvsb0bITdUtkk3qwl8~rKtd6e~PNN8AG5v2C0GB1eJSFQeAnjhcVdqe3eaiIbVp52dDbDajJECmtjs~z8Eyj4ObAZOU0Y7hU0et87~kQhS2nFnQ-EHS2lGUyS89PMfzMq1iz9B6igFKgYQPS9esnQRw~bbz7-9U3UwZq3r48lVKFFtluA5PyHP-ABLLS7PFTbCl3jn0ZvvSFz4Ioz3wo-dkJga1uStQ7-5lTjNjtLq1Q__")`, backgroundSize: 'cover' }}>
        <div className="flex items-center">
          <h1 style={{ textAlign: 'left', fontSize: 30, textDecoration: 'underline' }} className="text-lg font-semibold md:text-2xl">Here’s What All You Need</h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <CardProgress cardName="MESSAGE BANDWIDTH" progressName="Messages" progressValue={20} />
          <CardProgress cardName="BROADCAST MESSAGE" progressName="Messages" progressValue={20} />
          <CardProgress cardName="CONVERSATION" progressName="Conversations" progressValue={20} />
          <CardProgress cardName="OUTBOND MESSAGE" progressName="Persent" progressValue={35} />
        </div>
      </div>
      <div
        className="ounded-lg shadow-sm gap-4 p-4 lg:gap-6 lg:p-6"
        style={{ textAlign: 'left' }}
      >
        <>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 className="text-lg font-semibold md:text-2xl" style={{ fontSize: 20 }}>Messaging</h1>
            <Gap width={10} />
            <ChevronRight style={{ color: '#00C9B1' }} />
          </div>
          <div className="flex p-4 gap-4 p-4 lg:gap-6 lg:p-6 " >
            <Card x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-2">
                <h1>Recent Message Sent</h1>
              </CardHeader>
              <CardContent>
                <div >
                  {/* <div style={{backgroindColor:'yellow'}}> */}
                    <div style={{borderLeftWidth:2,borderLeftColor:'#00C9B1',paddingLeft:10,position:'relative'}}>
                      <label style={{fontWeight:'600',fontSize:10}}>15 Second Ago</label>
                      <p style={{fontWeight:'300',fontSize:12}}>Sent to Thomas, “ Hi How are you today thomas. Did you feel ......</p>
                    </div>
                      {/* <div style={{width:15,height:15,backgroundColor:'#00C9B1',borderRadius:100,position:'absolute'}}></div> */}
                  {/* </div> */}
                  <Gap height={8} />
                  <div style={{borderLeftWidth:2,borderLeftColor:'#848484',paddingLeft:10}}>
                  <label style={{fontWeight:'600',fontSize:10}}>40 Minutes Ago</label>
                    <p style={{fontWeight:'300',fontSize:12}}>Sent to Thomas, “ Hi How are you today thomas. Did you feel ......</p>
                  </div>
                  <Gap height={8} />
                  <div style={{borderLeftWidth:2,borderLeftColor:'#848484',paddingLeft:10}}>
                  <label style={{fontWeight:'600',fontSize:10}}>Hour Ago</label>
                    <p style={{fontWeight:'300',fontSize:12}}>Sent to Thomas, “ Hi How are you today thomas. Did you feel ......</p>
                  </div>
                  <Gap height={8} />
                  <div style={{borderLeftWidth:2,borderLeftColor:'#848484',paddingLeft:10}}>
                  <label style={{fontWeight:'600',fontSize:10}}>2 Hours Ago</label>
                    <p style={{fontWeight:'300',fontSize:12}}>Sent to Thomas, “ Hi How are you today thomas. Did you feel ......</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* <Gap width={10} /> */}
            <Card x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-2">
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <h1>Reminder</h1>
                <img src={IconAdd} style={{height:28,width:65}}/>
                </div>
              </CardHeader>
              <CardContent>
              <Gap height={6} />
                <div style={{display:'flex',justifyContent:'space-arround',borderWidth:0.1,borderColor:'#00C9B1',border:'groove',borderRadius:6,padding:6,alignItems:'center'}}>
                  <GripVertical/>
                  <Gap width={6} />
                  <Checkbox/>
                  <Gap width={6} />
                  <div>
                  <p style={{fontWeight:'300',fontSize:12}}>Send Invoices to Jimmy, and Ask him about yesterday</p>
                  </div>
                    
                  <Gap width={6} />
                  <Badge style={{backgroundColor:'#C80404',fontSize:7}}>DUE IN 2 HOURS</Badge>
                </div>
                <Gap height={10} />
                <div style={{display:'flex',justifyContent:'space-arround',borderWidth:0.1,borderColor:'#00C9B1',border:'groove',borderRadius:6,padding:6,alignItems:'center'}}>
                  <GripVertical/>
                  <Gap width={6} />
                  <Checkbox/>
                  <Gap width={6} />
                  <div>
                  <p style={{fontWeight:'300',fontSize:12}}>Send Invoices to Jimmy, and Ask him about yesterday</p>
                  </div>
                    
                  <Gap width={6} />
                  <Badge style={{backgroundColor:'#C80404',fontSize:7}}>DUE IN 2 HOURS</Badge>
                </div>
                <Gap height={10} />
                <div style={{display:'flex',justifyContent:'space-arround',borderWidth:0.1,borderColor:'#00C9B1',border:'groove',borderRadius:6,padding:6,alignItems:'center'}}>
                  <GripVertical/>
                  <Gap width={6} />
                  <Checkbox/>
                  <Gap width={6} />
                  <div>
                  <p style={{fontWeight:'300',fontSize:12}}>Send Invoices to Jimmy, and Ask him about yesterday</p>
                  </div>
                    
                  <Gap width={6} />
                  <Badge style={{backgroundColor:'#C80404',fontSize:7}}>DUE IN 2 HOURS</Badge>
                </div>
                
              </CardContent>
            </Card>
          </div>
        </>
        <>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 className="text-lg font-semibold md:text-2xl" style={{ fontSize: 20 }}>Devices</h1>
            <Gap width={10} />
            <ChevronRight style={{ color: '#00C9B1' }} />
          </div>
          <div className="flex p-4 gap-4 p-4 lg:gap-6 lg:p-6 " >
            <Card x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-2">
                <h1>Device Status</h1>
              </CardHeader>
              <Gap height={16} />
              <CardContent>
                <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center', gap: 6,borderBottomWidth:1,paddingBottom:6  }}>
                  <img src={IconPhone} style={{width:32,height:32}}/>
                  <div>
                    <label>Database Customers</label>
                  </div>
                  <Badge style={{ color: '#00DC30', backgroundColor: '#00DC303D' }}>Connected</Badge>
                </div>
                <Gap height={10} />
                <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center', gap: 6,borderBottomWidth:1,paddingBottom:6  }}>
                  <img src={IconPhone} style={{width:32,height:32}} />
                  <div>
                    <label>Nancy’s Device</label>
                  </div>
                  <Badge style={{ color: '#C80404', backgroundColor: '#C8040466' }}>Disconnected</Badge>
                </div>
                <Gap height={10} />
                <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center', gap: 6,borderBottomWidth:1,paddingBottom:6 }}>
                  <img src={IconPhone} style={{width:32,height:32}}/>
                  <div>
                    <label>Juan’s Device</label>
                  </div>
                  <Badge style={{ color: '#00DC30', backgroundColor: '#00DC303D' }}>Connected</Badge>
                </div>
                
              </CardContent>
            </Card>
            {/* <Gap width={10} /> */}
            <Card x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-2">
                <h1>Database Customers</h1>
              </CardHeader>
              <Gap height={16} />
              <CardContent>
                <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center', gap: 6,borderBottomWidth:1,paddingBottom:6  }}>
                  <img src={IlustrasionProfil2} style={{width:32,height:32}}/>
                  <div>
                    <label>Gretchen Stanton</label>
                  </div>
                  <Badge style={{ color: '#00DC30', backgroundColor: '#00DC303D' }}>VERIFIED</Badge>
                </div>
                <Gap height={10} />
                <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center', gap: 6,borderBottomWidth:1,paddingBottom:6  }}>
                  <img src={IlustrasionProfil3} style={{width:32,height:32}} />
                  <div>
                    <label>Carter Workman</label>
                  </div>
                  <Badge style={{ color: '#C80404', backgroundColor: '#C8040466' }}>UNVERIFIED</Badge>
                </div>
                
              </CardContent>
             
            </Card>
          </div>
        </>
      </div>
    </main>
  );
}
