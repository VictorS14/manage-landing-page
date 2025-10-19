import { CallToAction } from "./CallToAction";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MainContent } from "./MainContent";

import { useState } from "react";

export const AppContent = () => {
  const [modalIsOpen, setModalIsopen] = useState(false);

  const handleClick = () => {
    setModalIsopen(!modalIsOpen)
  }

  return (
    <div className="w-full min-h-screen bg-orange-50 flex flex-col items-center">
      <Header 
        modalIsOpen={modalIsOpen} 
        handleClick={handleClick} />
      <MainContent
        handleClick={handleClick} 
        modalIsOpen={modalIsOpen}/>
      <CallToAction />
      <Footer />
    </div>
  );
};
