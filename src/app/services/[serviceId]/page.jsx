import ServiceDetail from "../../../views/ServiceDetail";
import { servicesData } from "../../../data/servicesData";

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    serviceId: s.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.id === resolvedParams.serviceId);

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
