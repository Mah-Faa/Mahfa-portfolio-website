import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "../components/Toggle";
import { AnimateSharedLayout } from "framer-motion";
const FaqSeaction = () => {
  return (
    <Faq>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I start?">
          <div className="question">
            <div className="answer">
              <p>a feeling of trust.</p>
              <p>
                a feeling of expectation and desire for a certain thing to
                happen.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="daily sachol">
          <div className="answer">
            <p>believe that (someone or something) will arrive soon.</p>
            <p>
              used to indicate that one supposes something to be so, but has no
              firm evidence or knowledge.
            </p>
          </div>
        </Toggle>
        <Toggle title="what produxt do you ">
          <div className="answer">
            <p>hala ye chizi</p>
            <p> dfkerfjnvgelgjlkdp;wkcfm frkelgjvdfnv sg</p>
          </div>
        </Toggle>
        <Toggle title="hala ye chizi">
          <div className="answer">
            <p> dfkerfjnvgelgjlkdp;wkcfm frkelgjvdfnv sg</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSeaction;
