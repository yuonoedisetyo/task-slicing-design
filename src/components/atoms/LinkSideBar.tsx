import { 
  ChartColumn,ChartSpline,MonitorSmartphone,Users,MessageSquareText,MessageSquare,Reply,Rss,
  CalendarCheck2,
  IdCard,
  NotepadText,
  User,
  Settings,
  FileCode2,
 } from "lucide-react";

  
  export function LinkSideBar({children,semibold,active,icon=''}): JSX.Element {
      let className="flex items-center gap-3 rounded-lg px-3 text-muted-foreground transition-all hover:text-primary"

      if(semibold){
        className="lex items-center gap-2 font-semibold"
      }
      let renderIcon = null
      if(icon==='chart-column'){
        renderIcon = <ChartColumn style={{color:active?'#00C9B1':'black'}} className="h-4 w-4"/>
      }else
      if(icon==='chart-spline'){
        renderIcon = <ChartSpline style={{color:active?'#00C9B1':'black'}} className="h-4 w-4"/>
      }else
      if(icon==='monitor-smartphone'){
        renderIcon = <MonitorSmartphone style={{color:active?'#00C9B1':'black'}} className="h-4 w-4"/>
      }else
      if(icon==='users'){
        renderIcon = <Users style={{color:active?'#00C9B1':'black'}} className="h-4 w-4"/>
      }else
      if(icon==='message-square-text'){
        renderIcon = <MessageSquareText style={{color:active?'#00C9B1':'black'}} className="h-4 w-4"/>
      }else
      if(icon==='message-square'){
        renderIcon = <MessageSquare style={{color:active?'#00C9B1':'black'}} className="h-4 w-4"/>
      }else
      if(icon==='reply'){
        renderIcon = <Reply style={{color:active?'#00C9B1':'black'}} className="h-4 w-4"/>
      }else
      if(icon==='rss'){
        renderIcon = <Rss style={{color:active?'#00C9B1':'black'}} className="h-4 w-4"/>
      }else
      if(icon==='calendar-check2'){
        renderIcon = <CalendarCheck2 style={{color:active?'#00C9B1':'black'}} className="h-4 w-4"/>
      }else
      if(icon==='id-card'){
        renderIcon = <IdCard style={{color:active?'#00C9B1':'black'}} className="h-4 w-4"/>
      }else
      if(icon==='notepad-text'){
        renderIcon = <NotepadText style={{color:active?'#00C9B1':'black'}} className="h-4 w-4"/>
      }else
      if(icon==='user'){
        renderIcon = <User style={{color:active?'#00C9B1':'black'}} className="h-4 w-4"/>
      }else
      if(icon==='settings'){
        renderIcon = <Settings style={{color:active?'#00C9B1':'black'}} className="h-4 w-4"/>
      }
      if(icon==='file-code2'){
        renderIcon = <FileCode2 style={{color:active?'#00C9B1':'black'}} className="h-4 w-4"/>
      }
    return (
        <div className={className} >
           <div style={{backgroundColor:active?'#00C9B129':'transparent',display:'flex',gap:6,paddingTop:6,paddingBottom:6,paddingLeft:10,paddingRight:10,borderRadius:24,textAlign:'center',justifyContent:'center',color:active?'#00C9B1':'black'}}>
            {renderIcon}
            {children}
           </div>
        </div>
    );
  }
  
