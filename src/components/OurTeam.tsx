// "use client";

// import Image from "next/image";
// import { Linkedin, Mail } from "lucide-react";
// import { motion } from "framer-motion";

// interface TeamMember {
//   id: number;
//   name: string;
//   role: string;
//   bio: string;
//   image: string;
//   linkedin?: string;
//   email?: string;
// }

// const team: TeamMember[] = [
//   {
//     id: 1,
//     name: "Ketsebaot Ertumo",
//     role: "Founder & Lead Software Engineer",
//     bio: "Building scalable systems that blend innovation, reliability, and impact.",
//     image: "/images/team/1.jpg",
//     linkedin: "https://www.linkedin.com/in/ketsebaot-ertumo/",
//     email: "ertumoketsebaot@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Azaria Yacob",
//     role: "Co-Founder & Electrical Systems Lead",
//     bio: "Connecting smart systems with intelligent software for seamless automation.",
//     image: "/images/team/1.jpg",
//     linkedin: "#",
//     email: "azaria@example.com",
//   },
//   {
//     id: 3,
//     name: "Tadelech Tadesse",
//     role: "Operations & Project Manager",
//     bio: "Driving efficiency, strategy, and client success across all initiatives.",
//     image: "/images/team/1.jpg",
//     linkedin: "#",
//     email: "tadelech@example.com",
//   },
//   {
//     id: 4,
//     name: "Ertumo Erdako",
//     role: "UI/UX & Product Designer",
//     bio: "Designing intuitive digital experiences that delight and convert.",
//     image: "/images/team/1.jpg",
//     linkedin: "#",
//     email: "era@example.com",
//   },
// ];

// export default function TeamSection() {
//   return (
//     <section
//       id="team"
//       className="relative py-20 overflow-hidden"
//     >
//       {/* Decorative background glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-6 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-5xl font-semibold mb-4"
//         >
//           Meet <span className="text-primary">Our Team</span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-gray-600 max-w-2xl mx-auto mb-3 text-lg"
//         >
//           A collective of creators, engineers, and innovators shaping the
//           future of technology.
//         </motion.p>

//         <span className="relative inline-flex items-center justify-center mb-12">
//             <span className="block w-12 h-[2px] bg-orange-500 mr-2"></span>
//             <span className="text-orange-500">●</span>
//             <span className="block w-12 h-[2px] bg-orange-500 ml-2"></span>
//         </span>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {team.map((member, index) => (
//             <motion.div
//               key={member.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-xl"
//             >
//               {/* Image */}
//               <div className="relative w-full h-64 overflow-hidden">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   width={400}
//                   height={400}
//                   className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
//               </div>

//               {/* Content */}
//               <div className="p-6 text-left">
//                 <h5 className="text-xl font-semibold">{member.name}</h5>
//                 <p className="text-orange-400 text-sm mb-2">{member.role}</p>
//                 {/* <p className="text-gray-400 text-sm">{member.bio}</p> */}

//                 {/* Social links */}
//                 <div className="flex gap-4 mt-4">
//                   {member.linkedin && (
//                     <a
//                       href={member.linkedin}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="text-gray-400 hover:text-blue-600 transition-colors"
//                     >
//                       <Linkedin size={20} />
//                     </a>
//                   )}
//                   {member.email && (
//                     <a
//                       href={`mailto:${member.email}`}
//                       className="text-gray-400 hover:text-blue-500 transition-colors"
//                     >
//                       <Mail size={20} />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const team: TeamMember[] = [
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
    name: "Tadelech Tadesse",
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
  return (
    <section id="team" className="relative py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-4"
        >
          Meet <span className="text-orange-500">Our Team</span>
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-3 text-lg">
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
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-400/80 to-transparent p-4 text-left">
                    <h5 className="text-lg font-semibold">{member.name}</h5>
                    <p className="text-primary text-base">{member.role}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-gray-200 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex flex-col justify-center items-center px-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h5 className="text-xl font-semibold mb-1">{member.name}</h5>
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
