

export function Footer(): JSX.Element {
    return (
        <footer style={{ backgroundColor: '#686868',justifyContent:'space-between' }} 
        className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <label style={{color:'white'}}>Copyright@2021 WhatsTrack.com</label>
          <label style={{color:'white'}}>Powered By Zegen.id</label>
        </footer>
    );
}
