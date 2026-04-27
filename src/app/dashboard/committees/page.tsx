"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";

type Committee = {
    id: string;
    name: string;
    head: string;
    subcommittees: string[];
};

export default function CommitteesManager() {
    const [committees, setCommittees] = useState<Committee[]>([
        { id: "1", name: "Technical", head: "Ahmed Ali", subcommittees: ["Software Engineering", "AI"] },
        { id: "2", name: "Media Production", head: "Sara Youssef", subcommittees: ["Graphic Design", "Video"] },
        { id: "3", name: "Logistics", head: "Omar Hassan", subcommittees: ["Event Management", "Resources"] },
        { id: "4", name: "PR & HR", head: "Nour Kamal", subcommittees: ["Public Relations", "Human Resources"] },
    ]);

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Committees Manager</h1>
                    <p className="text-gray-400">Add, edit, or remove Awesome-O committees and subcommittees.</p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-brand-light text-white font-medium rounded-lg hover:bg-brand-medium transition-colors">
                    <Plus className="w-5 h-5" />
                    Add Committee
                </button>
            </div>

            <div className="bg-brand-primary/20 border border-brand-medium/20 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-black/40 border-b border-brand-medium/20 text-gray-400 text-sm uppercase tracking-wider">
                                <th className="p-4 font-medium">Committee Name</th>
                                <th className="p-4 font-medium">Committee Head</th>
                                <th className="p-4 font-medium">Subcommittees</th>
                                <th className="p-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-medium/10">
                            {committees.map((com) => (
                                <tr key={com.id} className="hover:bg-brand-medium/10 transition-colors">
                                    <td className="p-4 text-white font-medium">{com.name}</td>
                                    <td className="p-4 text-brand-accent">{com.head}</td>
                                    <td className="p-4">
                                        <div className="flex flex-wrap gap-2">
                                            {com.subcommittees.map((sub, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-black/30 border border-brand-medium/20 text-xs text-gray-300 rounded">
                                                    {sub}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <button className="text-gray-400 hover:text-brand-light transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="text-gray-400 hover:text-red-400 transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
