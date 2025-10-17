import { CallToAction } from "./CallToAction";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MainContent } from "./MainContent";

export const AppContent = () => {
  return (
    <div className="w-full min-h-screen bg-orange-50">
      <Header />
      <MainContent />
      <CallToAction />
      <Footer />
    </div>
  );
};
