import AdminSidebar from "@/components/admin/AdminSidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import authOptions from "../api/auth/option";
export const metadata = {
  title: "Admin Dashboard | Laptop Doc",
  description: "Admin Dashboard",
};

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session || session.user.role !== "admin") {
    redirect("/admin-login");
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <main className="p-6 max-w-7xl mx-auto">{children}</main>
      </div>
    </div>
  );
}
