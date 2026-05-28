import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { ContactSidebar } from "@/components/layout/contact-sidebar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <ContactSidebar />
      <FloatingWhatsApp />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
