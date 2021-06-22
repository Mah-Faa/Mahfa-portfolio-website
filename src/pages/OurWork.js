import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { motion } from "framer-motion";
import { pageAnimation, photoAnim, fade, lineAnim } from "../animation";

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show">
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <motion.img variants={photoAnim} src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The theracer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <Hide>
            <img src={theracer} alt="theracer" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>The goodtimes</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: white;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default OurWork;
