// // "use client";
// // // import { services } from "@/data/services";

// // export default function ServiceList() {
// //  interface Service {
// //   id: number;
// //   icon: string;
// //   title: string;
// //   description: string;
// // }

// // const services: Service[] = [
// //   {
// //     id: 1,
// //     icon: "lightbulb-o",
// //     title: "Lighting Upgrades",
// //     description:
// //       "Installation or replacement of lighting fixtures, bulbs, and controls to improve energy efficiency."
// //   },
// //   {
// //     id: 2,
// //     icon: "empire",
// //     title: "Electric Installation",
// //     description:
// //       "Professional installation of electrical systems ensuring safety and reliability."
// //   },
// //   {
// //     id: 3,
// //     icon: "power-off",
// //     title: "Electrical Panels",
// //     description:
// //       "Inspection, repair, and upgrade of electrical panels to meet modern requirements."
// //   }
// // ];

// //   return (
// //     <section id="services" className="py-16 bg-gray-50">
// //       <div className="container mx-auto px-6">
// //         <div className="text-center mb-8">
// //           <h1 className="text-5xl text-primary font-semibold">Our Service</h1>
// //           <h1 className=" mt-3">
// //             We Are The Professional Electrical Service
// //           </h1>
// //         </div>
// //         <div className="grid md:grid-cols-3 gap-6">
// //           {services.map((s) => (
// //             <div
// //               key={s.id}
// //               className="bg-white shadow rounded-lg p-6 flex flex-col"
// //             >
// //               <div className="text-orange-600 text-5xl mb-4">
// //                 <i className={`fa fa-${s.icon}`} />
// //               </div>
// //               <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
// //               <p className="text-gray-600 flex-grow">{s.description}</p>
// //               <a href="#" className="text-orange-600 font-semibold mt-4 inline-block">
// //                 READ MORE →
// //               </a>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }





// // "use client";

// // import Image from "next/image";
// // import { IconType } from "react-icons";
// // import { FaLightbulbO, FaShield, FaPlug, FaWindows } from "react-icons/fa";

// // interface Service {
// //   id: number;
// //   title: string;
// //   description: string;
// //   icon: IconType;
// //   href: string;
// // }

// // const services: Service[] = [
// //   {
// //     id: 1,
// //     title: "Electrical",
// //     description:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incid dolore magna.",
// //     icon: FaLightbulbO,
// //     href: "#",
// //   },
// //   {
// //     id: 2,
// //     title: "Security Systems",
// //     description:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incid dolore magna.",
// //     icon: FaShield,
// //     href: "#",
// //   },
// //   {
// //     id: 3,
// //     title: "Air Conditioning",
// //     description:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incid dolore magna.",
// //     icon: FaPlug,
// //     href: "#",
// //   },
// //   {
// //     id: 4,
// //     title: "Heating",
// //     description:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incid dolore magna.",
// //     icon: FaWindows,
// //     href: "#",
// //   },
// // ];

// // export default function ServicesSection() {
// //   return (
// //     <section id="serv_h" className="py-12 bg-white">
// //       <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
// //         {/* Left content */}
// //         <div className="md:w-2/3">
// //           <h2 className="text-3xl font-bold">
// //             Our <span className="text-orange-500">Services</span>
// //           </h2>
// //           <p className="mt-3 text-gray-600">
// //             Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor.
// //           </p>

// //           {/* Decorative line */}
// //           <div className="flex items-center gap-2 my-4">
// //             <span className="h-[1px] w-12 bg-orange-500"></span>
// //             <i className="fa fa-circle-o text-orange-500"></i>
// //             <span className="h-[1px] w-12 bg-orange-500"></span>
// //           </div>

// //           {/* Services grid */}
// //           <div className="grid md:grid-cols-2 gap-10 mt-8">
// //             {services.map((service) => {
// //               const Icon = service.icon;
// //               return (
// //                 <div
// //                   key={service.id}
// //                   className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-200"
// //                 >
// //                   <div>
// //                     <Icon className="text-orange-500 text-3xl" />
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
// //                 src="/img/5.jpg"
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

// import Image from "next/image";
// import {
//   Lightbulb,
//   Shield,
//   Plug,
//   Flame,
//   Monitor,
//   Smartphone,
//   Palette,
//   PenTool,
//   Settings,
// } from "lucide-react";

// interface Service {
//   id: number;
//   title: string;
//   description: string;
//   icon: React.ElementType;
//   href: string;
// }

// const services: Service[] = [
//   {
//     id: 1,
//     title: "ERP & Management Systems",
//     description:
//       "Custom ERP, HRM, CRM, and other management systems built for your business workflows.",
//     icon: Settings,
//     href: "#",
//   },
//   {
//     id: 2,
//     title: "Web & Mobile Apps",
//     description:
//       "Modern web and mobile app development for scalable and intuitive digital products.",
//     icon: Smartphone,
//     href: "#",
//   },
//   {
//     id: 3,
//     title: "UI/UX & Branding",
//     description:
//       "User interface and experience design, logo creation, and visual identity systems.",
//     icon: Palette,
//     href: "#",
//   },
//   {
//     id: 4,
//     title: "Infographics & Design",
//     description:
//       "Visual storytelling with custom infographics, business cards, and presentation materials.",
//     icon: PenTool,
//     href: "#",
//   },
//   {
//     id: 5,
//     title: "Electrical & Smart Systems",
//     description:
//       "IoT-based and electrical solutions for automation, safety, and reliability.",
//     icon: Plug,
//     href: "#",
//   },
//   {
//     id: 6,
//     title: "Security & Access Systems",
//     description:
//       "Installation and software integration for CCTV, biometric, and alarm systems.",
//     icon: Shield,
//     href: "#",
//   },
//   {
//     id: 7,
//     title: "Consulting & Support",
//     description:
//       "Professional advice, maintenance, and support for all your tech solutions.",
//     icon: Lightbulb,
//     href: "#",
//   },
//   {
//     id: 8,
//     title: "Heating & Power Systems",
//     description:
//       "Smart heating, power, and renewable energy control systems integration.",
//     icon: Flame,
//     href: "#",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section id="serv_h" className="py-12 bg-white">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
//         {/* Left content */}
//         <div className="md:w-2/3">
//           <h2 className="text-5xl font-semibold">
//             Our <span className="text-primary">Services</span>
//           </h2>
//           <p className="mt-3 text-gray-600">
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
//               return (
//                 <div
//                   key={service.id}
//                   className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-200"
//                 >
//                   <div>
//                     <Icon className="text-orange-500 w-7 h-7" />
//                   </div>
//                   <div>
//                     <h5 className="font-semibold text-lg">
//                       <a href={service.href} className="hover:text-orange-500">
//                         {service.title}
//                       </a>
//                     </h5>
//                     <p className="text-gray-600 text-sm">{service.description}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Right image */}
//         <div className="md:w-1/3 flex justify-center md:justify-end">
//           <div className="overflow-hidden rounded-md shadow-md max-w-sm">
//             <a href="#">
//               <Image
//                 src="/images/5.jpg"
//                 alt="Our Services"
//                 width={400}
//                 height={500}
//                 className="w-full hover:scale-105 transition-transform duration-300"
//               />
//             </a>
//           </div>
//         </div>
        
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Lightbulb,
  Shield,
  Plug,
  Flame,
  Smartphone,
  Palette,
  PenTool,
  Settings,
} from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  image: string;
}

const services: Service[] = [
  {
    id: 5,
    title: "Substation Construction",
    description: "Professional substation construction for reliable energy distribution.",
    icon: Plug,
    href: "#service",
    image: "/images/sub.jpg",
  },
  {
    id: 6,
    title: "High Power Tower Construction",
    description: "Engineering high-power towers with safety and efficiency.",
    icon: Shield,
    href: "#service",
    image: "/images/4.jpg",
  },
  {
    id: 7,
    title: "15kV/33kV Power Distribution",
    description: "Modern power distribution and automation solutions for industrial needs.",
    icon: Lightbulb,
    href: "#service",
    image: "/images/4.jpg",
  },
  {
    id: 8,
    title: "Industrial Automation",
    description: "Modern power distribution and automation solutions for industrial needs.",
    icon: Flame,
    href: "#service",
    image: "/images/4.jpg",
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<Service>(services[0]);

  return (
    <section id="service" className="scroll-mt-24 py-12 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10">

        {/* Left content */}
        <div className="lg:w-2/3">
          <h2 className="text-5xl font-semibold">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            We provide end-to-end digital and technology solutions — from
            software to electrical systems.
          </p>

          {/* Decorative line */}
          <div className="flex items-center gap-2 my-4">
            <span className="h-[1px] w-12 bg-orange-500"></span>
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            <span className="h-[1px] w-12 bg-orange-500"></span>
          </div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 gap-10 mt-8">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService.id === service.id;
              return (
                <div
                  key={service.id}
                  className={`flex items-start gap-4 cursor-pointer transition-transform duration-200 ${
                    isActive ? "translate-x-1" : "hover:translate-x-1"
                  }`}
                  onMouseEnter={() => setActiveService(service)}
                  onClick={() => setActiveService(service)}
                >
                  <div>
                    <Icon
                      className={`w-7 h-7 ${
                        isActive ? "text-orange-600" : "text-orange-500"
                      }`}
                    />
                  </div>
                  <div>
                    <h5
                      className={`font-semibold text-2xl ${
                        isActive ? "text-primary" : ""
                      }`}
                    >
                      {/* {service.title} */}
                      <a href={service.href}>{service.title}</a>
                    </h5>
                    <p className="text-gray-600 text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right image - dynamic */}
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <div className="overflow-hidden rounded-md shadow-md lg:max-w-sm">
            <Image
              key={activeService.id}
              src={activeService.image}
              alt={activeService.title}
              width={600}
              height={500}
              className="lg:w-[100%] lg:h-[100%] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
