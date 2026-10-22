import ServiceDetail from "../../../views/ServiceDetail";
import { servicesData } from "../../../data/servicesData";

export async function generateStaticParams() {
  const baseParams = servicesData.map((s) => ({
    serviceId: s.id,
  }));
  const aliasParams = [
    { serviceId: "us-tax-filing" },
    { serviceId: "bookkeeping" },
    { serviceId: "itin-application" },
    { serviceId: "fbar-fatca" },
    { serviceId: "tax-planning" }
  ];
  return [...baseParams, ...aliasParams];
}

const findService = (id) => {
  if (!id) return null;
  return (
    servicesData.find((s) => s.id === id) ||
    (id === "us-tax-filing" ? servicesData.find((s) => s.id === "individual-tax") : null) ||
    (id === "bookkeeping" ? servicesData.find((s) => s.id === "accounting-bookkeeping") : null) ||
    (id === "itin-application" ? servicesData.find((s) => s.id === "individual-specialized") : null) ||
    (id === "fbar-fatca" ? servicesData.find((s) => s.id === "individual-specialized") : null) ||
    (id === "tax-planning" ? servicesData.find((s) => s.id === "tax-strategy") : null)
  );
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = findService(resolvedParams?.serviceId);

  if (!service) {
    return {
      title: "Service Details | Ananya Tax Co",
      description: "Professional tax, bookkeeping & payroll services by licensed CPAs.",
    };
  }

  return {
    title: `${service.title} | Ananya Tax Co`,
    description: service.shortDesc || service.longDesc?.slice(0, 160),
    alternates: {
      canonical: `https://ananyataxco.com/services/${service.id}`,
    },
    openGraph: {
      title: `${service.title} | Ananya Tax Co`,
      description: service.shortDesc,
      url: `https://ananyataxco.com/services/${service.id}`,
      images: [service.image || "/new-logo.jpeg"],
    },
  };
}

export default function ServiceDetailPage() {
  return <ServiceDetail />;
}
