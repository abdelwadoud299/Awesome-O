import { Code2, PenTool, Calendar, Users, Cpu, MonitorPlay, FileText, HeartHandshake } from "lucide-react";

export default function CommitteesPage() {
    const committees = [
        {
            id: "technical",
            title: "Technical",
            icon: <Code2 className="w-8 h-8 text-brand-light" />,
            description: "The core architects of Awesome-O. Master software engineering paradigms, artificial intelligence, and lead hands-on technical workshops.",
            color: "border-brand-light",
            subcommittees: [
                { name: "Software Engineering", icon: <Code2 className="w-5 h-5" />, desc: "Building full-stack web and mobile applications using modern frameworks." },
                { name: "Artificial Intelligence", icon: <Cpu className="w-5 h-5" />, desc: "Deploying machine learning models and exploring data science concepts." }
            ]
        },
        {
            id: "media",
            title: "Media Production",
            icon: <MonitorPlay className="w-8 h-8 text-purple-400" />,
            description: "The visual and aesthetic voice. Create stunning algorithmic graphics, edit engaging technical videos, and oversee brand identity.",
            color: "border-purple-400",
            subcommittees: [
                { name: "Graphic Design", icon: <PenTool className="w-5 h-5" />, desc: "UI/UX design, social media assets, and branding materials." },
                { name: "Video & Animation", icon: <MonitorPlay className="w-5 h-5" />, desc: "Motion graphics, workshop recordings, and promotional content." }
            ]
        },
        {
            id: "logistics",
            title: "Operational Logistics",
            icon: <Calendar className="w-8 h-8 text-emerald-400" />,
            description: "The operational backbone. Execute precision event management, handle resource allocation, and ensure flawless workshop delivery.",
            color: "border-emerald-400",
            subcommittees: [
                { name: "Event Management", icon: <Calendar className="w-5 h-5" />, desc: "Planning venues, schedules, and on-ground operations." },
                { name: "Resource Allocation", icon: <FileText className="w-5 h-5" />, desc: "Managing equipment, budgets, and physical materials." }
            ]
        },
        {
            id: "pr-hr",
            title: "PR & HR",
            icon: <Users className="w-8 h-8 text-amber-400" />,
            description: "The ambassadors and community builders. Manage external communications, internal talent acquisition, and member well-being.",
            color: "border-amber-400",
            subcommittees: [
                { name: "Public Relations", icon: <Users className="w-5 h-5" />, desc: "Sponsorships, external partnerships, and social media management." },
                { name: "Human Resources", icon: <HeartHandshake className="w-5 h-5" />, desc: "Recruitment, performance tracking, and community engagement." }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-brand-dark container mx-auto px-4 py-12 max-w-6xl">
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Structure</h1>
                <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                    Awesome-O operates through four highly specialized committees. Each unit plays a critical role in
                    delivering high-quality technical education and managing our expanding university network.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {committees.map((committee) => (
                    <div key={committee.id} className={`p-8 rounded-xl bg-brand-primary/20 border-t-4 ${committee.color} border-l border-r border-b border-brand-medium/30 flex flex-col`}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-brand-primary/40 rounded-lg">
                                {committee.icon}
                            </div>
                            <h2 className="text-2xl font-bold text-white">{committee.title}</h2>
                        </div>

                        <p className="text-gray-300 mb-8 flex-grow leading-relaxed">
                            {committee.description}
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">Sub-committees</h3>
                            {committee.subcommittees.map((sub, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-black/20 border border-brand-medium/20">
                                    <div className="mt-1 text-gray-400">
                                        {sub.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">{sub.name}</h4>
                                        <p className="text-sm text-gray-400 mt-1">{sub.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
