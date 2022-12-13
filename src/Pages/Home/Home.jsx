import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "./components/Footer";
import ImageIntro from "./components/ImageIntro";
import Testimonials from "./components/Testimonials";
import Valeur from "./components/Valeur";

function Home({ isSignedIn }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (isSignedIn) {
      navigate("/accueil");
    }
  });
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <ImageIntro />
      <Valeur />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
