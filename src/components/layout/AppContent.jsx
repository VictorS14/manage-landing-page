import { CallToAction } from "./CallToAction";
import { Header } from "./Header";
import { MainContent } from "./MainContent";

export const AppContent = () => {
  return (
    <div className="w-full min-h-screen bg-orange-50 pb-8">
      <Header />
      <MainContent />
      <CallToAction />
    </div>
  );
};
