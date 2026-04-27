import { Users, Briefcase, Calendar, Activity } from "lucide-react";

export default function DashboardOverview() {
    const stats = [
        { name: "Total Members", value: "142", icon: <Users className="w-6 h-6 text-brand-light" />, trend: "+12%" },
        { name: "Active Committees", value: "4", icon: <Briefcase className="w-6 h-6 text-purple-400" />, trend: "0%" },
        { name: "Upcoming Events", value: "3", icon: <Calendar className="w-6 h-6 text-emerald-400" />, trend: "+1" },
        { name: "Platform Visits", value: "8.4k", icon: <Activity className="w-6 h-6 text-amber-400" />, trend: "+24%" },
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Overview</h1>
                <p className="text-gray-400">Welcome back, Admin. Here is what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, idx) => (
                    <div key={idx} className="p-6 rounded-xl bg-brand-primary/20 border border-brand-medium/20">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-black/20 rounded-lg">
                                {stat.icon}
                            </div>
                            <span className={`text-sm font-medium ${stat.trend.startsWith("+") ? "text-emerald-400" : "text-gray-400"}`}>
                                {stat.trend}
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                        <p className="text-sm text-gray-400">{stat.name}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity Mockup */}
                <div className="p-6 rounded-xl bg-brand-primary/20 border border-brand-medium/20">
                    <h2 className="text-xl font-semibold text-white mb-6">Recent Applications</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-black/30 border border-brand-medium/10">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-medium/30 flex items-center justify-center text-brand-accent font-bold">
                                        User
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium text-sm">New Applicant #{i}482</h4>
                                        <p className="text-xs text-gray-400">Applied for Technical Committee</p>
                                    </div>
                                </div>
                                <button className="text-xs px-3 py-1.5 bg-brand-light/20 text-brand-accent rounded hover:bg-brand-light/40 transition-colors">
                                    Review
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
