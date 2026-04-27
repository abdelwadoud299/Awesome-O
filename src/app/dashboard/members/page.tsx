"use client";

import { useState } from "react";
import { Search, Filter, MoreVertical, Plus } from "lucide-react";

type Member = {
    id: string;
    name: string;
    email: string;
    role: string;
    committee: string;
    status: "Active" | "Pending" | "Inactive";
};

export default function MembersManager() {
    const [members, setMembers] = useState<Member[]>([
        { id: "101", name: "Ahmed Ali", email: "ahmed@mti.edu.eg", role: "Head", committee: "Technical", status: "Active" },
        { id: "102", name: "Sara Youssef", email: "sara@mti.edu.eg", role: "Head", committee: "Media", status: "Active" },
        { id: "103", name: "Mo Salah", email: "mo.s@mti.edu.eg", role: "Member", committee: "Logistics", status: "Active" },
        { id: "104", name: "Ali R.", email: "ali.r@mti.edu.eg", role: "Applicant", committee: "Technical", status: "Pending" },
    ]);

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Members & Roles</h1>
                    <p className="text-gray-400">Manage all internal Awesome-O personnel, applications, and permissions.</p>
                </div>
                <button className="flex justify-center items-center gap-2 px-5 py-2.5 bg-brand-light text-white font-medium rounded-lg hover:bg-brand-medium transition-colors w-full md:w-auto">
                    <Plus className="w-5 h-5" />
                    Add Member
                </button>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search members by name or email..."
                        className="w-full pl-10 pr-4 py-2.5 bg-brand-primary/10 border border-brand-medium/30 rounded-lg text-white focus:outline-none focus:border-brand-light placeholder-gray-500 transition-colors"
                    />
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-primary/10 border border-brand-medium/30 text-gray-300 rounded-lg hover:bg-brand-medium/20 transition-colors">
                    <Filter className="w-5 h-5" />
                    Filters
                </button>
            </div>

            {/* Table */}
            <div className="bg-brand-primary/20 border border-brand-medium/20 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-black/40 border-b border-brand-medium/20 text-gray-400 text-sm uppercase tracking-wider">
                                <th className="p-4 font-medium">Name</th>
                                <th className="p-4 font-medium">Contact</th>
                                <th className="p-4 font-medium">Committee</th>
                                <th className="p-4 font-medium">Role</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-medium/10">
                            {members.map((member) => (
                                <tr key={member.id} className="hover:bg-brand-medium/10 transition-colors">
                                    <td className="p-4 text-white font-medium">{member.name}</td>
                                    <td className="p-4 text-gray-400 text-sm">{member.email}</td>
                                    <td className="p-4 text-brand-accent">{member.committee}</td>
                                    <td className="p-4 text-gray-300">{member.role}</td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${member.status === "Active" ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20" :
                                                member.status === "Pending" ? "bg-amber-400/10 text-amber-400 border border-amber-400/20" :
                                                    "bg-red-400/10 text-red-400 border border-red-400/20"
                                            }`}>
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="text-gray-400 hover:text-white transition-colors">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
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
