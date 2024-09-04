import { IlustrasionProfil } from "@/assets/index";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bell, LogOut, Menu, Settings } from "lucide-react";
import { Gap } from "../atoms/Gap";
import { SideBarContent } from "./SideBarContent";
import { SideBarHead } from "./SideBarHead";


export function Header(): JSX.Element {
    return (
        <header style={{ backgroundColor: '#59cab2' }} className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        <SideBarHead />
                        <SideBarContent />
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
            </div>
            <div style={{ marginRight: 16 }}>
                <Bell style={{ color: 'white' }} />
            </div>
            <div style={{ marginRight: 16 }}>
                <Settings style={{ color: 'white' }} />
            </div>
            <div style={{ marginRight: 16 }}>
                <LogOut style={{ color: 'white' }} />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="rounded-full" style={{ backgroundColor: '#b9fcf7', paddingLeft: 2 }}>
                        <>
                            {/* <CircleUser className="h-5 w-5" /> */}
                            <img
                                alt="avatar"
                                src={IlustrasionProfil}
                                style={{
                                    height: 32,
                                    width: 30,
                                    borderRadius: 100
                                }}
                            />
                            <span className="sr-only">Toggle user menu</span>
                        </>
                        <Gap width={6} />
                        <label>Jasmine</label>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}
