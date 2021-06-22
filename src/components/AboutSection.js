import React from "react";

import women from "../img/women.jpg";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

import { motion } from "framer-motion";
import Wave from "../Wave";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>I work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              my <span> dearms</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Contact me for any writing or coding idea
          </motion.p>
          <motion.button variants={fade}> Contact Me</motion.button>
        </motion.div>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={women} alt="women with camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
