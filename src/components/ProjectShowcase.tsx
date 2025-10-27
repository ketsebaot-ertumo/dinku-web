// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Clock, Construction, Loader2, MapPin, XCircle } from "lucide-react";
// import { useEffect, useState } from "react";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   client: string;
//   location: string;
//   year: string;
//   category: "Industrial" | "Commercial" | "Residential";
//   status: "Completed" | "Ongoing";
//   technologies: string[];
//   img: string;
//   gallery: string[];
// }

// const fallbackProjects: Project[] = [
//   {
//     id: 1,
//     title: "Substation Construction",
//     description:
//       "Comprehensive design and construction of a 132/33kV substation ensuring high reliability and minimal transmission loss. Includes control panels, transformers, and safety automation.",
//     client: "Ethiopian Electric Utility (EEU)",
//     location: "Addis Ababa, Ethiopia",
//     year: "2024",
//     category: "Industrial",
//     status: "Completed",
//     technologies: ["SCADA", "ABB Relays", "HV Switchgear", "Transformer 132/33kV"],
//     img: "/images/sub.jpg",
//     gallery: [
//       "/images/sub.jpg",
//       "/images/sub.jpg",
//       "/images/sub.jpg",
//     ],
//   },
//   {
//     id: 2,
//     title: "High Power Transmission Tower Construction",
//     description:
//       "Installation of steel lattice transmission towers across a 25km corridor, optimizing power delivery and grid stability with top-tier safety standards.",
//     client: "Hydro Electric Engineering PLC",
//     location: "Adama, Ethiopia",
//     year: "2023",
//     category: "Industrial",
//     status: "Completed",
//     technologies: ["High-Voltage Insulators", "Hot-Dip Galvanized Steel", "GIS Mapping"],
//     img: "/images/projects/tower-main.jpg",
//     gallery: [
//       "/images/projects/tower1.jpg",
//       "/images/projects/tower2.jpg",
//       "/images/projects/tower3.jpg",
//     ],
//   },
//   {
//     id: 3,
//     title: "15kV/33kV Power Distribution & Automation",
//     description:
//       "Turnkey power distribution and smart automation project for manufacturing plants, including energy monitoring and IoT-based safety controls.",
//     client: "Ethio Steel Manufacturing",
//     location: "Bishoftu, Ethiopia",
//     year: "2025",
//     category: "Commercial",
//     status: "Ongoing",
//     technologies: ["PLC Control", "Energy Metering", "Remote Monitoring", "IoT Automation"],
//     img: "/images/projects/automation-main.jpg",
//     gallery: [
//       "/images/projects/auto1.jpg",
//       "/images/projects/auto2.jpg",
//       "/images/projects/auto3.jpg",
//     ],
//   },
//   {
//     id: 4,
//     title: "Smart Lighting & Energy Management System",
//     description:
//       "Integrated street lighting system with automatic dimming, solar backup, and remote diagnostics for sustainable urban development.",
//     client: "Addis City Administration",
//     location: "Addis Ababa, Ethiopia",
//     year: "2024",
//     category: "Residential",
//     status: "Completed",
//     technologies: ["Smart Sensors", "Solar Panels", "IoT", "LED Lighting"],
//     img: "/images/projects/smart-lighting-main.jpg",
//     gallery: [
//       "/images/projects/light1.jpg",
//       "/images/projects/light2.jpg",
//     ],
//   },
//   {
//     id: 5,
//     title: "Industrial Power Backup & Generator Automation",
//     description:
//       "Setup of automatic generator synchronization and backup systems to ensure uninterrupted operation in high-load environments.",
//     client: "Bunna Bank HQ",
//     location: "Addis Ababa, Ethiopia",
//     year: "2023",
//     category: "Commercial",
//     status: "Completed",
//     technologies: ["ATS Panel", "Diesel Generator", "Load Balancing", "Smart Monitoring"],
//     img: "/images/projects/generator-main.jpg",
//     gallery: [
//       "/images/projects/gen1.jpg",
//       "/images/projects/gen2.jpg",
//       "/images/projects/gen3.jpg",
//     ],
//   },
// ];

// export default function ProjectsPage() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch("/projects", { cache: "no-store" });
//         if (!res.ok) throw new Error("Failed to fetch projects");
//         const data = await res.json();
//         setProjects(data.length ? data : fallbackProjects);
//       } catch (err) {
//         console.error(err);
//         setError(true);
//         setProjects(fallbackProjects);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProjects();
//   }, []);

//   // --- Loading State ---
//   if (loading) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//         <Loader2 className="animate-spin text-primary mb-4" size={36} />
//         <p>Loading projects...</p>
//       </div>
//     );
//   }

//   // --- Not Found State ---
//   if (!loading && projects.length === 0) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//         <XCircle size={50} className="text-orange-500 mb-4" />
//         <p className="text-lg">No projects found.</p>
//       </div>
//     );
//   }

//   return (
//     <section id="projects" className="scroll-mt-24 bg-[#0a0a0a] text-white min-h-screen py-16">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-orange-500">Our Projects</h1>
//         <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
//           Showcasing excellence in electrical engineering and innovation across industries.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="container mx-auto grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
//         {projects.map((p, i) => (
//           <motion.div
//             key={p.id}
//             whileHover={{ y: -8 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/20 transition"
//           >
//             <div className="relative">
//               <img
//                 src={p.img}
//                 alt={p.title}
//                 className="w-full h-56 object-cover"
//               />
//               <span className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
//                 {p.category}
//               </span>
//             </div>

//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-orange-400 mb-2">
//                 {p.title}
//               </h3>
//               <p className="text-gray-300 text-sm line-clamp-3 mb-4">
//                 {p.description}
//               </p>

//               <div className="text-sm text-gray-400 space-y-1 mb-3">
//                 <p className="flex items-center gap-2">
//                   <Construction size={16} /> {p.client}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <MapPin size={16} /> {p.location}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <Clock size={16} /> {p.year} — {p.status}
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {p.technologies.map((tech, idx) => (
//                   <span
//                     key={idx}
//                     className="bg-orange-500/10 text-orange-400 text-xs px-3 py-1 rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// // export default function ProjectsShowcase() {
// //   return (
// //     <section id="projects" className="scroll-mt-24 py-20 bg-gray-900">
// //       <div className="container mx-auto px-6 text-center">
// //         {/* Section Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="mb-12"
// //         >
// //           <h2 className="text-gray-500 font-semibold tracking-wide uppercase mb-2">
// //             Our Projects
// //           </h2>
// //           <h3 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
// //             Showcasing Our Expertise
// //           </h3>
// //           <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
// //             High-quality engineering projects delivered across power infrastructure and automation.
// //           </p>
// //         </motion.div>

// //         {/* Project Grid */}
// //         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {projects.map((project) => (
// //             <motion.div
// //               key={project.id}
// //               whileHover={{ scale: 1.05 }}
// //               transition={{ duration: 0.3 }}
// //               className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-white"
// //             >
// //               {/* Project Image */}
// //               <div className="relative h-64">
// //                 <Image
// //                   src={project.img}
// //                   alt={project.title}
// //                   fill
// //                   className="object-cover transition-transform duration-500 group-hover:scale-110"
// //                 />
// //               </div>

// //               {/* Overlay */}
// //               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
// //                 <p className="text-white text-center px-4">{project.description}</p>
// //               </div>

// //               {/* Title */}
// //               <div className="p-">
// //                 <h4 className="text-xl font-semibold text-gray-300 bg-gray-800 p-6">{project.title}</h4>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, MapPin, Clock, Construction, XCircle } from "lucide-react";
import { useAllEntities } from "@/hooks/use-query";

// --- Project Type ---
interface Project {
  id: number;
  title: string;
  description: string;
  client: string;
  location: string;
  year: string;
  category: string;
  status: string;
  technologies: string[];
  img: string;
  gallery: string[];
}

// --- Local Fallback Data ---
const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "Substation Construction",
    description:
      "Comprehensive design and construction of a 132/33kV substation ensuring high reliability and minimal transmission loss.",
    client: "Ethiopian Electric Utility (EEU)",
    location: "Addis Ababa, Ethiopia",
    year: "2024",
    category: "Industrial",
    status: "Completed",
    technologies: ["SCADA", "ABB Relays", "HV Switchgear", "Transformer 132/33kV"],
    img: "/images/5.jpg",
    gallery: [
      "/images/sub.jpg",
      "/images/1.jpg",
      "/images/2.jpg",
    ],
  },
  {
    id: 2,
    title: "High Power Transmission Tower Construction",
    description:
      "Installation of steel lattice transmission towers across a 25km corridor, optimizing power delivery and grid stability.",
    client: "Hydro Electric Engineering PLC",
    location: "Adama, Ethiopia",
    year: "2023",
    category: "Industrial",
    status: "Completed",
    technologies: ["High-Voltage Insulators", "Hot-Dip Galvanized Steel", "GIS Mapping"],
    img: "/images/projects/tower-main.jpg",
    gallery: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
    ],
  },
  {
    id: 3,
    title: "15kV/33kV Power Distribution & Automation",
    description:
      "Turnkey power distribution and smart automation project for manufacturing plants, including energy monitoring and IoT-based controls.",
    client: "Ethio Steel Manufacturing",
    location: "Bishoftu, Ethiopia",
    year: "2025",
    category: "Commercial",
    status: "Ongoing",
    technologies: ["PLC Control", "Energy Metering", "IoT Automation"],
    img: "/images/projects/automation-main.jpg",
    gallery: [
      "/images/sub.jpg",
      "/images/3.jpg",
      "/images/1.jpg",
    ],
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeIndex, setActiveIndex] = useState<{ [key: number]: number }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  // const [total, setTotal] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  const { data } = useAllEntities('projects', {
    page: currentPage,
    limit: pageSize,
  });

  console.log("projects:", data);
   console.log("projects:", data?.data.length);

  useEffect(() => {
    try{
      if (data?.data) {
        console.log("length?")
        // setProjects(data.data.length ? data.data : fallbackProjects);
        setTotalPages(data.pagination.totalPages);
        setPageSize(data.pagination?.pageSize || 5);
      }
      setProjects(data.data.length ? data.data : fallbackProjects);
    } catch (err: any) {
        // console.log("API fetch failed, using fallback data");
        setError(err.message);
        setProjects(fallbackProjects);
    } finally {
        setLoading(false);
    }
  }, [data?.data, currentPage, pageSize, totalPages]);


  // --- Loading ---
  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
  //       <Loader2 className="animate-spin text-orange-500 mb-4" size={36} />
  //       <p>Loading projects...</p>
  //     </div>
  //   );
  // }

  // if (!loading && error) {
  //   return (
  //     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
  //       <XCircle size={50} className="text-red-500 mb-4" />
  //       <p>{error}.</p>
  //     </div>
  //   );
  // }

  // --- Not Found ---
  if (!loading && projects.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <XCircle size={50} className="text-primary mb-4" />
        <p className="text-lg">No projects found.</p>
      </div>
    );
  }

  // --- Gallery Navigation ---
  const handleNext = (id: number, galleryLength: number) => {
    setActiveIndex((prev) => ({
      ...prev,
      [id]: ((prev[id] ?? 0) + 1) % galleryLength,
    }));
  };

  const handlePrev = (id: number, galleryLength: number) => {
    setActiveIndex((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) === 0 ? galleryLength - 1 : (prev[id] ?? 0) - 1,
    }));
  };

  return (
    <section id="projects" className="scroll-mt-24 bg-[#0a0a0a] text-white py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">Our Projects</h1>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Showcasing excellence in electrical engineering and innovation across Ethiopia.
        </p>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          const currentImg = p.gallery[activeIndex[p.id] ?? 0] || p.img;
          return (
            <motion.div
              key={p.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-orange-500/20"
            >
              {/* Image Slider */}
              <div className="relative">
                <img
                  src={currentImg}
                  alt={p.title}
                  className="w-full h-56 object-cover transition duration-300"
                />
                {p.gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => handlePrev(p.id, p.gallery.length)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => handleNext(p.id, p.gallery.length)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center"
                    >
                      ›
                    </button>
                  </>
                )}
                <span className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {p.category}
                </span>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-400 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                  {p.description}
                </p>

                <div className="text-sm text-gray-400 space-y-1 mb-3">
                  <p className="flex items-center gap-2">
                    <Construction size={16} /> {p.client}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={16} /> {p.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock size={16} /> {p.year} — {p.status}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-orange-500/10 text-orange-400 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
