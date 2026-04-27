"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Calendar, MapPin } from "lucide-react";

type Workshop = {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    status: "Upcoming" | "Completed";
    attendees: number;
};

export default function WorkshopsManager() {
    const [workshops, setWorkshops] = useState<Workshop[]>([
        { id: "w1", title: "Advanced React Context", date: "Mar 15, 2026", time: "2:00 PM", location: "Lab 4", status: "Upcoming", attendees: 45 },
        { id: "w2", title: "Figma Prototyping", date: "Mar 18, 2026", time: "1:00 PM", location: "Studio", status: "Upcoming", attendees: 28 },
        { id: "w3", title: "Intro to ML", date: "Feb 28, 2026", time: "11:00 AM", location: "Hall C", status: "Completed", attendees: 120 },
    ]);

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Workshops Manager</h1>
                    <p className="text-gray-400">Schedule new events, manage RSVPs, and archive past sessions.</p>
                </div>
                <button className="flex justify-center items-center gap-2 px-5 py-2.5 bg-brand-light text-white font-medium rounded-lg hover:bg-brand-medium transition-colors w-full md:w-auto">
                    <Plus className="w-5 h-5" />
                    Create Workshop
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {workshops.map((workshop) => (
                    <div key={workshop.id} className="p-6 rounded-xl bg-brand-primary/20 border border-brand-medium/20 hover:border-brand-medium/50 transition-colors relative flex flex-col">
                        <div className="absolute top-0 right-0 p-4">
                            <span className={`px-2.5 py-1 text-xs rounded font-medium ${workshop.status === "Upcoming" ? "bg-brand-light/20 text-brand-accent tracking-wide" : "bg-black/30 text-gray-400 border border-brand-medium/20"
                                }`}>
                                {workshop.status}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4 pr-20">{workshop.title}</h3>

                        <div className="space-y-3 mb-6 flex-grow">
                            <div className="flex items-center text-sm text-gray-300 gap-3">
                                <Calendar className="w-4 h-4 text-brand-medium" />
                                {workshop.date} at {workshop.time}
                            </div>
                            <div className="flex items-center text-sm text-gray-300 gap-3">
                                <MapPin className="w-4 h-4 text-brand-medium" />
                                {workshop.location}
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-brand-medium/20">
                            <span className="text-sm font-medium text-gray-400">
                                <span className="text-white">{workshop.attendees}</span> Attendees
                            </span>
                            <div className="flex gap-2">
                                <button className="p-2 text-gray-400 hover:text-brand-light transition-colors rounded hover:bg-black/20">
                                    <Edit2 className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-red-400 transition-colors rounded hover:bg-black/20">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
