import "./globals.css";
import AssignovaNavigation from "@/components/assignova/AssignovaNavigation";
import AssignovaFooter from "@/components/assignova/AssignovaFooter";
import WhatsappButton from "@/components/WhatsappButtion";

export const metadata = {
  title: "Assignova - Premium Digital Solutions | Next-Gen Technology",
  description:
    "Transform your business with cutting-edge digital solutions. Enterprise-grade software development, AI integration, and innovative technology solutions.",
};

export default function AssignovaLayout({ children }) {
  return (
    <>
      <AssignovaNavigation />
      <main className="min-h-screen">{children}</main>
      <WhatsappButton />
      <AssignovaFooter />
    </>
  );
}
