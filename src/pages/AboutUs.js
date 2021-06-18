import React from "react";
import AboutSection from "../components/AboutSection";
import FaqSeaction from "../components/FaqSection";
import ServiseSection from "../components/ServiseSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServiseSection />
      <FaqSeaction />
    </motion.div>
  );
};

export default AboutUs;
