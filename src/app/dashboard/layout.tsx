import Link from "next/link";
import { LayoutDashboard, Users, Calendar, Briefcase, Settings, LogOut } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const navItems = [
        { name: "Overview", href: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
        { name: "Committees", href: "/dashboard/committees", icon: <Briefcase className="w-5 h-5" /> },
        { name: "Members", href: "/dashboard/members", icon: <Users className="w-5 h-5" /> },
        { name: "Workshops", href: "/dashboard/workshops", icon: <Calendar className="w-5 h-5" /> },
        { name: "Settings", href: "/dashboard/settings", icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-brand-dark flex">
            {/* Sidebar */}
            <aside className="w-64 bg-brand-primary/10 border-r border-brand-medium/20 flex flex-col hidden md:flex h-[calc(100vh-64px)] fixed mt-16">
                <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-brand-medium/20 transition-all font-medium"
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="p-4 border-t border-brand-medium/20">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-all font-medium"
                    >
                        <LogOut className="w-5 h-5" />
                        Exit Dashboard
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 md:ml-64 p-8 min-h-[calc(100vh-64px)] mt-16 relative">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
