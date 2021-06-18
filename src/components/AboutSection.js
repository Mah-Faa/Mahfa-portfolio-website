import React from "react";

import women from "../img/women.jpg";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

import { motion } from "framer-motion";
import Wave from "../Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>we work to make</motion.h2>
          </Hide>
          <Hide>
            <h2>
              your <span> dearms</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
          <p>contact us for any photography or videography idea</p>
          <button> Contact Us</button>
        </motion.div>
      </Description>
      <Image>
        <img src={women} alt="women with camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
