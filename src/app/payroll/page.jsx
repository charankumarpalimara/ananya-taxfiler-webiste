import Payroll from "../../views/Payroll";

export const metadata = {
  title: "Automated Payroll Processing | Ananya Tax Co",
  description:
    "Seamless direct deposit payroll, automated federal/state tax filings, W-2 & 1099 compliance, and employee onboarding for small & medium businesses.",
  alternates: {
    canonical: "https://ananyataxco.com/payroll",
  },
};

export default function PayrollPage() {
  return <Payroll />;
}
