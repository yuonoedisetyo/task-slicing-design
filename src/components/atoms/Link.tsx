  
  export function Link({children,semibold}): JSX.Element {
      let className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"

      if(semibold){
        className="lex items-center gap-2 font-semibold"
      }
    return (
        <div className={className}>
            {children}
        </div>
    );
  }
  
