"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Lightbulb,
  Shield,
  Plug,
  Flame,
  XCircle,
} from "lucide-react";
import { useAllEntities } from "@/hooks/use-query";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  image: string;
}

const fallbackServices: Service[] = [
  {
    id: 5,
    title: "Substation Construction",
    description: "Professional substation construction for reliable energy distribution.",
    icon: Plug,
    href: "/#service",
    image: "/images/sub.jpg",
  },
  {
    id: 6,
    title: "High Power Tower Construction",
    description: "Engineering high-power towers with safety and efficiency.",
    icon: Shield,
    href: "/#service",
    image: "/images/4.jpg",
  },
  {
    id: 7,
    title: "15kV/33kV Power Distribution",
    description: "Modern power distribution and automation solutions for industrial needs.",
    icon: Lightbulb,
    href: "/#service",
    image: "/images/4.jpg",
  },
  {
    id: 8,
    title: "Industrial Automation",
    description: "Modern power distribution and automation solutions for industrial needs.",
    icon: Flame,
    href: "/#service",
    image: "/images/sub.jpg",
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<Service>(fallbackServices[0]);
  const [services, setServices] = useState<Service[]>(fallbackServices);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { data } = useAllEntities('services', {
    page: currentPage,
    limit: pageSize,
  });

  useEffect(() => {
    try{
      if (data?.data && Array.isArray(data.data)) {
        setActiveService(data.data[0]);
        // setServices(data.data.length ? data.data : services);
        setTotalPages(data.pagination.totalPages);
        setPageSize(data.pagination?.pageSize || 5);
      }
      setServices(data.data.length ? data.data : services);
    } catch (err) {
        // console.log("API fetch failed, using fallback data");
        setError(true);
        setActiveService(fallbackServices[0]);
        setServices(fallbackServices);
    } finally {
        setLoading(false);
    }
  }, [data?.data, currentPage, pageSize, totalPages]);

  // --- Not Found ---
  if (!loading && services.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <XCircle size={50} className="text-primary mb-4" />
        <p className="text-lg">No services found.</p>
      </div>
    );
  }

  return (
    <section id="services" className="scroll-mt-24 py-12 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-10">

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
            <span className="h-[1px] w-12 bg-primary"></span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="h-[1px] w-12 bg-primary"></span>
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
                        isActive ? "text-orange-600" : "text-primary"
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
