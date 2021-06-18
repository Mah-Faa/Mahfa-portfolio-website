import React from "react";
import styled from "styled-components";
import { About } from "../styles";

const FaqSeaction = () => {
  return (
    <Faq>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I start?</h4>
        <div className="answer">
          <p>a feeling of trust.</p>
          <p>
            a feeling of expectation and desire for a certain thing to happen.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>daily sachol</h4>
        <div className="answer">
          <p>believe that (someone or something) will arrive soon.</p>
          <p>
            used to indicate that one supposes something to be so, but has no
            firm evidence or knowledge.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>what produxt do you </h4>
        <div className="answer">
          <p>hala ye chizi</p>
          <p> dfkerfjnvgelgjlkdp;wkcfm frkelgjvdfnv sg</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How Do I start?</h4>
        <div className="answer">
          <p>hala ye chizi</p>
          <p> dfkerfjnvgelgjlkdp;wkcfm frkelgjvdfnv sg</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question{
    padding 3rem 0rem;
    cursor:pointer;
  
  }
  .answer{
    padding: 2rem 0rem;
    p{
      padding:1rem 0
    }
  }
`;

export default FaqSeaction;
