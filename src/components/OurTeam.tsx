
"use client";

import Image from "next/image";
import { Linkedin, Mail, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAllEntities } from "@/hooks/use-query";
import Loader from "./layout/Loader";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const teamFallbackData: TeamMember[] = [
  {
    id: 1,
    name: "Ketsebaot Ertumo",
    role: "Founder & Lead Software Engineer",
    bio: "Building scalable systems that blend innovation, reliability, and impact.",
    image: "/images/team/1.jpg",
    linkedin: "https://www.linkedin.com/in/ketsebaot-ertumo/",
    email: "ertumoketsebaot@gmail.com",
  },
  {
    id: 2,
    name: "Azaria Yacob",
    role: "Co-Founder & Electrical Systems Lead",
    bio: "Connecting smart systems with intelligent software for seamless automation.",
    image: "/images/team/1.jpg",
    linkedin: "#",
    email: "azaria@example.com",
  },
  {
    id: 3,
    name: "Tadelech Taggesse",
    role: "Operations & Project Manager",
    bio: "Driving efficiency, strategy, and client success across all initiatives.",
    image: "/images/team/1.jpg",
    linkedin: "#",
    email: "tadelech@example.com",
  },
  {
    id: 4,
    name: "Ertumo Erdako",
    role: "UI/UX & Product Designer",
    bio: "Designing intuitive digital experiences that delight and convert.",
    image: "/images/team/1.jpg",
    linkedin: "#",
    email: "era@example.com",
  },
];

export default function TeamSection() {
  const [team, setTeam] = useState<TeamMember[]>(teamFallbackData);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { data } = useAllEntities('teams', {
    page: currentPage,
    limit: pageSize,
  });

  useEffect(() => {
    try{
      if (data?.data && Array.isArray(data.data)) {
        setTotalPages(data.pagination.totalPages);
        setPageSize(data.pagination?.pageSize || 5);
      }
      setTeam(data.data.length ? data.data : teamFallbackData);
    } catch (err) {
        // console.log("API fetch failed, using fallback data");
        setError(true);
        setTeam(teamFallbackData);
    } finally {
        setLoading(false);
    }
  }, [data?.data, currentPage, pageSize, totalPages]);
  
  
    // --- Loading ---
    // <Loader/>
  
    // --- Not Found ---
    if (!loading && team.length === 0) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
          <XCircle size={50} className="text-primary mb-4" />
          <p className="text-lg">No team member found.</p>
        </div>
      );
    }

  return (
    <section id="team" className="scroll-mt-24 relative py-20 bg-gray-900 overflow-hidden">
      {/* Background glow */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>
      </div> */}

      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-gray-300"
        >
          Meet <span className="text-primary">Our Team</span>
        </motion.h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-3 text-lg">
          A collective of creators, engineers, and innovators shaping the
          future of technology.
        </p>

        <span className="relative inline-flex items-center justify-center mb-12">
            <span className="block w-12 h-[2px] bg-orange-500 mr-2"></span>
            <span className="text-primary">●</span>
            <span className="block w-12 h-[2px] bg-orange-500 ml-2"></span>
        </span>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group [perspective:1000px]"
            >
              <div className="relative w-full h-80 [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden [backface-visibility:hidden]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent p-4 text-left">
                    <h5 className="text-lg font-semibold">{member.name}</h5>
                    <p className="text-primary text-base">{member.role}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-gray-600 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex flex-col justify-center items-center px-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h5 className="text-xl font-semibold mb-1 text-gray-300">{member.name}</h5>
                  <p className="text-primary text-base mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-5">{member.bio}</p>

                  <div className="flex gap-5">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 hover:opacity-60 transition-colors"
                      >
                        <Linkedin size={22} />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-blue-400 hover:opacity-60 transition-colors"
                      >
                        <Mail size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
