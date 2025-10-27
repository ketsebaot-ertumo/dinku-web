// // // "use client";
// // // // import { services } from "@/data/services";

// // // export default function ServiceList() {
// // //  interface Service {
// // //   id: number;
// // //   icon: string;
// // //   title: string;
// // //   description: string;
// // // }

// // // const services: Service[] = [
// // //   {
// // //     id: 1,
// // //     icon: "lightbulb-o",
// // //     title: "Lighting Upgrades",
// // //     description:
// // //       "Installation or replacement of lighting fixtures, bulbs, and controls to improve energy efficiency."
// // //   },
// // //   {
// // //     id: 2,
// // //     icon: "empire",
// // //     title: "Electric Installation",
// // //     description:
// // //       "Professional installation of electrical systems ensuring safety and reliability."
// // //   },
// // //   {
// // //     id: 3,
// // //     icon: "power-off",
// // //     title: "Electrical Panels",
// // //     description:
// // //       "Inspection, repair, and upgrade of electrical panels to meet modern requirements."
// // //   }
// // // ];

// // //   return (
// // //     <section id="services" className="py-16 bg-gray-50">
// // //       <div className="container mx-auto px-6">
// // //         <div className="text-center mb-8">
// // //           <h1 className="text-5xl text-primary font-semibold">Our Service</h1>
// // //           <h1 className=" mt-3">
// // //             We Are The Professional Electrical Service
// // //           </h1>
// // //         </div>
// // //         <div className="grid md:grid-cols-3 gap-6">
// // //           {services.map((s) => (
// // //             <div
// // //               key={s.id}
// // //               className="bg-white shadow rounded-lg p-6 flex flex-col"
// // //             >
// // //               <div className="text-orange-600 text-5xl mb-4">
// // //                 <i className={`fa fa-${s.icon}`} />
// // //               </div>
// // //               <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
// // //               <p className="text-gray-600 flex-grow">{s.description}</p>
// // //               <a href="#" className="text-orange-600 font-semibold mt-4 inline-block">
// // //                 READ MORE →
// // //               </a>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }





// // // "use client";

// // // import Image from "next/image";
// // // import { IconType } from "react-icons";
// // // import { FaLightbulbO, FaShield, FaPlug, FaWindows } from "react-icons/fa";

// // // interface Service {
// // //   id: number;
// // //   title: string;
// // //   description: string;
// // //   icon: IconType;
// // //   href: string;
// // // }

// // // const services: Service[] = [
// // //   {
// // //     id: 1,
// // //     title: "Electrical",
// // //     description:
// // //       "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incid dolore magna.",
// // //     icon: FaLightbulbO,
// // //     href: "#",
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Security Systems",
// // //     description:
// // //       "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incid dolore magna.",
// // //     icon: FaShield,
// // //     href: "#",
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "Air Conditioning",
// // //     description:
// // //       "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incid dolore magna.",
// // //     icon: FaPlug,
// // //     href: "#",
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "Heating",
// // //     description:
// // //       "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incid dolore magna.",
// // //     icon: FaWindows,
// // //     href: "#",
// // //   },
// // // ];

// // // export default function ServicesSection() {
// // //   return (
// // //     <section id="serv_h" className="py-12 bg-white">
// // //       <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
// // //         {/* Left content */}
// // //         <div className="md:w-2/3">
// // //           <h2 className="text-3xl font-bold">
// // //             Our <span className="text-orange-500">Services</span>
// // //           </h2>
// // //           <p className="mt-3 text-gray-600">
// // //             Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor.
// // //           </p>

// // //           {/* Decorative line */}
// // //           <div className="flex items-center gap-2 my-4">
// // //             <span className="h-[1px] w-12 bg-orange-500"></span>
// // //             <i className="fa fa-circle-o text-orange-500"></i>
// // //             <span className="h-[1px] w-12 bg-orange-500"></span>
// // //           </div>

// // //           {/* Services grid */}
// // //           <div className="grid md:grid-cols-2 gap-10 mt-8">
// // //             {services.map((service) => {
// // //               const Icon = service.icon;
// // //               return (
// // //                 <div
// // //                   key={service.id}
// // //                   className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-200"
// // //                 >
// // //                   <div>
// // //                     <Icon className="text-orange-500 text-3xl" />
// // //                   </div>
// // //                   <div>
// // //                     <h5 className="font-semibold text-lg">
// // //                       <a href={service.href} className="hover:text-orange-500">
// // //                         {service.title}
// // //                       </a>
// // //                     </h5>
// // //                     <p className="text-gray-600 text-sm">{service.description}</p>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>

// // //         {/* Right image */}
// // //         <div className="md:w-1/3 flex justify-center md:justify-end">
// // //           <div className="overflow-hidden rounded-md shadow-md max-w-sm">
// // //             <a href="#">
// // //               <Image
// // //                 src="/img/5.jpg"
// // //                 alt="Our Services"
// // //                 width={400}
// // //                 height={500}
// // //                 className="w-full hover:scale-105 transition-transform duration-300"
// // //               />
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }



// // "use client";

// // import Image from "next/image";
// // import {
// //   Lightbulb,
// //   Shield,
// //   Plug,
// //   Flame,
// //   Monitor,
// //   Smartphone,
// //   Palette,
// //   PenTool,
// //   Settings,
// // } from "lucide-react";

// // interface Service {
// //   id: number;
// //   title: string;
// //   description: string;
// //   icon: React.ElementType;
// //   href: string;
// // }

// // const services: Service[] = [
// //   {
// //     id: 1,
// //     title: "ERP & Management Systems",
// //     description:
// //       "Custom ERP, HRM, CRM, and other management systems built for your business workflows.",
// //     icon: Settings,
// //     href: "#",
// //   },
// //   {
// //     id: 2,
// //     title: "Web & Mobile Apps",
// //     description:
// //       "Modern web and mobile app development for scalable and intuitive digital products.",
// //     icon: Smartphone,
// //     href: "#",
// //   },
// //   {
// //     id: 3,
// //     title: "UI/UX & Branding",
// //     description:
// //       "User interface and experience design, logo creation, and visual identity systems.",
// //     icon: Palette,
// //     href: "#",
// //   },
// //   {
// //     id: 4,
// //     title: "Infographics & Design",
// //     description:
// //       "Visual storytelling with custom infographics, business cards, and presentation materials.",
// //     icon: PenTool,
// //     href: "#",
// //   },
// //   {
// //     id: 5,
// //     title: "Electrical & Smart Systems",
// //     description:
// //       "IoT-based and electrical solutions for automation, safety, and reliability.",
// //     icon: Plug,
// //     href: "#",
// //   },
// //   {
// //     id: 6,
// //     title: "Security & Access Systems",
// //     description:
// //       "Installation and software integration for CCTV, biometric, and alarm systems.",
// //     icon: Shield,
// //     href: "#",
// //   },
// //   {
// //     id: 7,
// //     title: "Consulting & Support",
// //     description:
// //       "Professional advice, maintenance, and support for all your tech solutions.",
// //     icon: Lightbulb,
// //     href: "#",
// //   },
// //   {
// //     id: 8,
// //     title: "Heating & Power Systems",
// //     description:
// //       "Smart heating, power, and renewable energy control systems integration.",
// //     icon: Flame,
// //     href: "#",
// //   },
// // ];

// // export default function ServicesSection() {
// //   return (
// //     <section id="serv_h" className="py-12 bg-white">
// //       <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
// //         {/* Left content */}
// //         <div className="md:w-2/3">
// //           <h2 className="text-5xl font-semibold">
// //             Our <span className="text-primary">Services</span>
// //           </h2>
// //           <p className="mt-3 text-gray-600">
// //             We provide end-to-end digital and technology solutions — from
// //             software to electrical systems.
// //           </p>

// //           {/* Decorative line */}
// //           <div className="flex items-center gap-2 my-4">
// //             <span className="h-[1px] w-12 bg-orange-500"></span>
// //             <span className="h-2 w-2 rounded-full bg-orange-500"></span>
// //             <span className="h-[1px] w-12 bg-orange-500"></span>
// //           </div>

// //           {/* Services grid */}
// //           <div className="grid sm:grid-cols-2 gap-10 mt-8">
// //             {services.map((service) => {
// //               const Icon = service.icon;
// //               return (
// //                 <div
// //                   key={service.id}
// //                   className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-200"
// //                 >
// //                   <div>
// //                     <Icon className="text-orange-500 w-7 h-7" />
// //                   </div>
// //                   <div>
// //                     <h5 className="font-semibold text-lg">
// //                       <a href={service.href} className="hover:text-orange-500">
// //                         {service.title}
// //                       </a>
// //                     </h5>
// //                     <p className="text-gray-600 text-sm">{service.description}</p>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* Right image */}
// //         <div className="md:w-1/3 flex justify-center md:justify-end">
// //           <div className="overflow-hidden rounded-md shadow-md max-w-sm">
// //             <a href="#">
// //               <Image
// //                 src="/images/5.jpg"
// //                 alt="Our Services"
// //                 width={400}
// //                 height={500}
// //                 className="w-full hover:scale-105 transition-transform duration-300"
// //               />
// //             </a>
// //           </div>
// //         </div>
        
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import {
//   Lightbulb,
//   Shield,
//   Plug,
//   Flame,
//   Smartphone,
//   Palette,
//   PenTool,
//   Settings,
//   Loader2,
//   XCircle,
// } from "lucide-react";
// import { useAllEntities } from "@/hooks/use-query";

// interface Service {
//   id: number;
//   title: string;
//   description: string;
//   icon: React.ElementType;
//   href: string;
//   image: string;
// }

// const fallbackServices: Service[] = [
//   {
//     id: 5,
//     title: "Substation Construction",
//     description: "Professional substation construction for reliable energy distribution.",
//     icon: Plug,
//     href: "/#service",
//     image: "/images/sub.jpg",
//   },
//   {
//     id: 6,
//     title: "High Power Tower Construction",
//     description: "Engineering high-power towers with safety and efficiency.",
//     icon: Shield,
//     href: "/#service",
//     image: "/images/4.jpg",
//   },
//   {
//     id: 7,
//     title: "15kV/33kV Power Distribution",
//     description: "Modern power distribution and automation solutions for industrial needs.",
//     icon: Lightbulb,
//     href: "/#service",
//     image: "/images/4.jpg",
//   },
//   {
//     id: 8,
//     title: "Industrial Automation",
//     description: "Modern power distribution and automation solutions for industrial needs.",
//     icon: Flame,
//     href: "/#service",
//     image: "/images/4.jpg",
//   },
// ];

// export default function ServicesSection() {
//   const [activeService, setActiveService] = useState<Service>(fallbackServices[0]);
//   const [services, setServices] = useState<Service[]>(fallbackServices);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(5);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   const { data } = useAllEntities('services', {
//     page: currentPage,
//     limit: pageSize,
//   });

//   useEffect(() => {
//     try{
//       if (data?.data && Array.isArray(data.data)) {
//         setActiveService(data.data[0]);
//         // setServices(data.data.length ? data.data : services);
//         setTotalPages(data.pagination.totalPages);
//         setPageSize(data.pagination?.pageSize || 5);
//       }
//       setServices(data.data.length ? data.data : services);
//     } catch (err) {
//         // console.log("API fetch failed, using fallback data");
//         setError(true);
//         setActiveService(fallbackServices[0]);
//         setServices(fallbackServices);
//     } finally {
//         setLoading(false);
//     }
//   }, [data?.data, currentPage, pageSize, totalPages]);

//   // --- Not Found ---
//   if (!loading && services.length === 0) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//         <XCircle size={50} className="text-primary mb-4" />
//         <p className="text-lg">No services found.</p>
//       </div>
//     );
//   }

//   return (
//     <section id="service" className="scroll-mt-24 py-12 bg-white">
//       <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-10">

//         {/* Left content */}
//         <div className="lg:w-2/3">
//           <h2 className="text-5xl font-semibold">
//             Our <span className="text-primary">Services</span>
//           </h2>
//           <p className="mt-3 text-gray-600 text-lg">
//             We provide end-to-end digital and technology solutions — from
//             software to electrical systems.
//           </p>

//           {/* Decorative line */}
//           <div className="flex items-center gap-2 my-4">
//             <span className="h-[1px] w-12 bg-orange-500"></span>
//             <span className="h-2 w-2 rounded-full bg-orange-500"></span>
//             <span className="h-[1px] w-12 bg-orange-500"></span>
//           </div>

//           {/* Services grid */}
//           <div className="grid sm:grid-cols-2 gap-10 mt-8">
//             {services.map((service) => {
//               const Icon = service.icon;
//               const isActive = activeService.id === service.id;
//               return (
//                 <div
//                   key={service.id}
//                   className={`flex items-start gap-4 cursor-pointer transition-transform duration-200 ${
//                     isActive ? "translate-x-1" : "hover:translate-x-1"
//                   }`}
//                   onMouseEnter={() => setActiveService(service)}
//                   onClick={() => setActiveService(service)}
//                 >
//                   <div>
//                     <Icon
//                       className={`w-7 h-7 ${
//                         isActive ? "text-orange-600" : "text-primary"
//                       }`}
//                     />
//                   </div>
//                   <div>
//                     <h5
//                       className={`font-semibold text-2xl ${
//                         isActive ? "text-primary" : ""
//                       }`}
//                     >
//                       {/* {service.title} */}
//                       <a href={service.href}>{service.title}</a>
//                     </h5>
//                     <p className="text-gray-600 text-base">
//                       {service.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Right image - dynamic */}
//         <div className="lg:w-1/3 flex justify-center lg:justify-end">
//           <div className="overflow-hidden rounded-md shadow-md lg:max-w-sm">
//             <Image
//               key={activeService.id}
//               src={activeService.image}
//               alt={activeService.title}
//               width={600}
//               height={500}
//               className="lg:w-[100%] lg:h-[100%] object-cover transition-transform duration-500 hover:scale-105"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, XCircle } from "lucide-react";
import clsx from "clsx";
import SectionDivider from "./SectionDivider";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatarColor: string;
}

// Fallback testimonials data
const fallbackTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Eget Nulla",
    role: "Electrician",
    rating: 4,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    avatarColor: "bg-gray-400",
  },
  {
    id: 2,
    name: "Lorem Porta",
    role: "Electrician",
    rating: 3,
    text: "Separated they live in Bookmarksgrove right at the coast of the Semantics.",
    avatarColor: "bg-purple-500",
  },
  {
    id: 3,
    name: "Dolor Amet",
    role: "Electrician",
    rating: 5,
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    avatarColor: "bg-blue-600",
  },
  {
    id: 4,
    name: "Mattis Quis",
    role: "Engineer",
    rating: 5,
    text: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    avatarColor: "bg-green-600",
  },
  {
    id: 5,
    name: "Justo Ligula",
    role: "Contractor",
    rating: 4,
    text: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas.",
    avatarColor: "bg-yellow-500",
  },
  {
    id: 6,
    name: "Nunc Vitae",
    role: "Electrician",
    rating: 5,
    text: "She packed her seven versalia, put her initial into the belt and made herself on the way.",
    avatarColor: "bg-red-500",
  },
];

// Mock API hook - replace with your actual API hook
function useAllEntities(entity: string, options: { page: number; limit: number }) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace this with your actual API call
        // const response = await fetch(`/api/${entity}?page=${options.page}&limit=${options.limit}`);
        // const result = await response.json();
        
        // Mock API response - remove this and use actual API
        const mockResponse = {
          data: fallbackTestimonials,
          pagination: {
            totalPages: 2,
            pageSize: options.limit,
            currentPage: options.page,
            totalItems: fallbackTestimonials.length
          }
        };
        
        setData(mockResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [entity, options.page, options.limit]);

  return { data, loading };
}

export default function TestimonialsCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const [current, setCurrent] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { data } = useAllEntities('testimonials', {
    page: currentPage,
    limit: pageSize,
  });

  useEffect(() => {
    try {
      if (data?.data && Array.isArray(data.data)) {
        setTestimonials(data.data);
        setTotalPages(data.pagination?.totalPages || 1);
        setPageSize(data.pagination?.pageSize || 6);
      } else {
        setError(true);
        setTestimonials(fallbackTestimonials);
      }
    } catch (err) {
      console.log("API fetch failed, using fallback data");
      setError(true);
      setTestimonials(fallbackTestimonials);
    } finally {
      setLoading(false);
    }
  }, [data?.data, currentPage, pageSize]);

  // Split testimonials into groups of 3 per slide
  const perSlide = 3;
  const groupedSlides = [];
  for (let i = 0; i < testimonials.length; i += perSlide) {
    groupedSlides.push(testimonials.slice(i, i + perSlide));
  }

  const nextSlide = () => setCurrent((prev) => (prev + 1) % groupedSlides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + groupedSlides.length) % groupedSlides.length);

  // Auto-slide only when not loading and has testimonials
  useEffect(() => {
    if (!loading && testimonials.length > 0 && groupedSlides.length > 1) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [loading, testimonials.length, groupedSlides.length]);

  // --- Loading State ---
  if (loading) {
    return (
      <section id="testimonial" className="scroll-mt-24 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h2 className="font-semibold tracking-wide uppercase mb-2 text-gray-500 text-lg">
              Testimonials
            </h2>
            <h3 className="text-4xl font-bold text-gray-800 leading-tight text-primary">
              What Our Clients Say About Us
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
              Real stories from real customers — see why professionals trust our services.
            </p>
            <SectionDivider />
          </div>
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  // --- Not Found ---
  if (!loading && testimonials.length === 0) {
    return (
      <section id="testimonial" className="scroll-mt-24 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h2 className="font-semibold tracking-wide uppercase mb-2 text-gray-500 text-lg">
              Testimonials
            </h2>
            <h3 className="text-4xl font-bold text-gray-800 leading-tight text-primary">
              What Our Clients Say About Us
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
              Real stories from real customers — see why professionals trust our services.
            </p>
            <SectionDivider />
          </div>
          <div className="flex flex-col items-center justify-center py-12">
            <XCircle size={50} className="text-primary mb-4" />
            <p className="text-lg text-gray-600">No testimonials found.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonial" className="scroll-mt-24 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 text-center">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="font-semibold tracking-wide uppercase mb-2 text-gray-500 text-lg">
            Testimonials
          </h2>
          <h3 className="text-4xl font-bold text-gray-800 leading-tight text-primary">
            What Our Clients Say About Us
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Real stories from real customers — see why professionals trust our services.
          </p>
          {error && (
            <p className="text-yellow-600 text-sm mt-2">
              Showing fallback data - unable to fetch testimonials
            </p>
          )}
          <SectionDivider />
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {groupedSlides[current].map((t) => (
                <div
                  key={t.id}
                  className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-orange-100"
                >
                  <div className="flex items-center mb-6">
                    <div
                      className={clsx(
                        "w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 shadow-md",
                        t.avatarColor
                      )}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={clsx(
                            "w-4 h-4 transition-colors",
                            i < t.rating ? "text-orange-500" : "text-gray-300"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                    “{t.text}”
                  </p>
                  <div className="text-left">
                    <h5 className="font-semibold text-lg text-gray-800">{t.name}</h5>
                    <p className="text-orange-500 text-sm">{t.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          {groupedSlides.length > 1 && (
            <>
              <div className="flex justify-center space-x-3 mt-8">
                {groupedSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-8 h-1 rounded-full transition ${
                      current === i ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Controls */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/70 text-gray-700 p-3 rounded-full shadow hover:bg-primary hover:text-white transition"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/70 text-gray-700 p-3 rounded-full shadow hover:bg-primary hover:text-white transition"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Pagination Controls for API */}
        {/* {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-primary text-white rounded disabled:bg-gray-300"
            >
              Previous
            </button>
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-primary text-white rounded disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
}