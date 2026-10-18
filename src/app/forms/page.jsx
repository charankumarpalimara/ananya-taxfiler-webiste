import Forms from "../../views/Forms";

export const metadata = {
  title: "Tax Forms & Resource Hub | Ananya Tax Co",
  description:
    "Explore and download essential IRS tax forms (Form W-4, W-2, 1099-NEC, LLC formation, ITIN W-7) with comprehensive filing instructions.",
  alternates: {
    canonical: "https://ananyataxco.com/forms",
  },
};

export default function FormsPage() {
  return <Forms />;
}
