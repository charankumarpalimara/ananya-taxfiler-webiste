import UserDashboard from "../../user-dashboard/UserDashboard";

export const metadata = {
  title: "Client Portal & Tax Dashboard | Ananya Tax Co",
  description:
    "Secure client portal to manage tax returns, upload financial documents, track refund status, and schedule appointments.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardPage() {
  return <UserDashboard />;
}
