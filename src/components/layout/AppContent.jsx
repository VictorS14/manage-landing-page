import { Header } from "./Header";
import { SectionIntroduction } from "./SectionIntroduction";

export const AppContent = () => {
  return (
    <div className="w-full min-h-screen bg-orange-50">
      <Header />

      <main className=" w-full px-5 pt-3 flex flex-col items-center">
        <SectionIntroduction />
      </main>
    </div>
  );
};
