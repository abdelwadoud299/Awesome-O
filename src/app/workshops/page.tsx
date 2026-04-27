import { PlayCircle, Clock, MapPin, CalendarDays } from "lucide-react";

export default function WorkshopsPage() {
    const upcomingEvents = [
        {
            id: 1,
            title: "Advanced React Context & Redux",
            date: "March 15, 2026",
            time: "2:00 PM - 5:00 PM",
            location: "Lab 4, Building B",
            type: "Technical",
            instructor: "Software Engineering Team"
        },
        {
            id: 2,
            title: "Figma Prototyping Masterclass",
            date: "March 18, 2026",
            time: "1:00 PM - 3:00 PM",
            location: "Design Studio",
            type: "Media",
            instructor: "Graphic Design Team"
        }
    ];

    const pastEvents = [
        {
            id: 3,
            title: "Introduction to Machine Learning Models",
            date: "February 28, 2026",
            duration: "1h 45m",
            views: "1.2k",
            type: "AI",
            thumbnail: "bg-brand-medium"
        },
        {
            id: 4,
            title: "Public Speaking & Leadership",
            date: "February 15, 2026",
            duration: "2h 10m",
            views: "850",
            type: "PR & HR",
            thumbnail: "bg-brand-primary"
        }
    ];

    return (
        <div className="min-h-screen bg-brand-dark container mx-auto px-4 py-12 max-w-6xl">
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Workshops & Events</h1>
                <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                    Access the Awesome-O technical knowledge base. Register for upcoming in-person training sessions at MTI, or review our digital archive of past workshop recordings.
                </p>
            </div>

            {/* Upcoming Section */}
            <div className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <CalendarDays className="w-6 h-6 text-brand-accent" />
                    <h2 className="text-2xl font-semibold text-white">Upcoming Sessions</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {upcomingEvents.map(event => (
                        <div key={event.id} className="p-6 rounded-xl bg-gradient-to-br from-brand-primary/30 to-black/40 border border-brand-medium/40 hover:border-brand-light transition-colors relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4">
                                <span className="px-3 py-1 bg-brand-light/20 text-brand-accent text-xs rounded-full font-medium tracking-wide">
                                    {event.type}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 pr-20">{event.title}</h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center text-sm text-gray-300 gap-3">
                                    <Clock className="w-4 h-4 text-brand-light" />
                                    {event.date} • {event.time}
                                </div>
                                <div className="flex items-center text-sm text-gray-300 gap-3">
                                    <MapPin className="w-4 h-4 text-brand-light" />
                                    {event.location}
                                </div>
                            </div>

                            <div className="flex justify-between items-center border-t border-brand-medium/20 pt-4 mt-2">
                                <span className="text-sm text-gray-400">By: {event.instructor}</span>
                                <button className="px-5 py-2 bg-brand-light text-white text-sm font-medium rounded hover:bg-brand-medium transition-colors">
                                    Reserve Seat
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Past Recordings Section */}
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <PlayCircle className="w-6 h-6 text-brand-accent" />
                    <h2 className="text-2xl font-semibold text-white">Knowledge Archive</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pastEvents.map(event => (
                        <div key={event.id} className="rounded-xl bg-brand-primary/20 border border-brand-medium/20 overflow-hidden hover:border-brand-medium transition-all group cursor-pointer">
                            {/* Fake Video Thumbnail */}
                            <div className={`h-40 w-full ${event.thumbnail} relative flex items-center justify-center`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                <PlayCircle className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform" />
                                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                    {event.duration}
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">{event.type}</span>
                                    <span className="text-xs text-gray-400">{event.views} views</span>
                                </div>
                                <h3 className="text-white font-medium mb-1 leading-snug">{event.title}</h3>
                                <p className="text-xs text-gray-500">{event.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
