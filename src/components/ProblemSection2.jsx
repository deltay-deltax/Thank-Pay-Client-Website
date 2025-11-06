import React from "react";
import mockup4 from "./../assets/images/mockup4.png";
import mockup6 from "./../assets/images/mockup6.png";
import mockup7 from "./../assets/images/mockup7.png";

export default function ProblemSection() {
  return (
    <section id="problem2" className="problem-section2">
      <style>{`
        .problem-section2 {
          width: 100vw;
          background: #f7f7f7;
          color: #111;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 72px 20px 84px;
          box-sizing: border-box;
        }
        .problem-container {
          width: 100%;
          max-width: 1100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .problem-title {
          font-weight: 700;
          font-size: 2.2rem;
          line-height: 1.28;
          margin: 0;
          letter-spacing: -0.2px;
        }
        .problem-title .orange { color: #FFB14B; }
        .problem-title .blue { color: #34BCD6; }
        .problem-subtitle {
          margin-top: 14px;
          color: #777;
          font-size: 1.02rem;
          font-weight: 400;
        }
        .mockup-box {
          margin-top: 32px;
          width: 100%;
          border: none;
          border-radius: 0;
          background: transparent;
          padding: 0;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .mockup-img4 {
          width: 480px;
          max-width: 100%;
          border-radius: 10px;
          display: block;
        }
        .mockup-img6 {
          width: 480px;
          max-width: 100%;
          border-radius: 10px;
          display: block;
        }
        .mockup-img7 {
          width: 480px;
          max-width: 100%;
          border-radius: 10px;
          display: block;
        }
        @media (max-width: 900px) {
          .problem-title { font-size: 1.7rem; }
        }
        @media (max-width: 600px) {
        .mockup-box {
          margin-top: 32px;
          width: 100%;
          border: none;
          border-radius: 0;
          background: transparent;
          padding: 0;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
          .problem-section { padding: 56px 14px 64px; }
          .problem-title { font-size: 1.35rem; }
          .problem-subtitle { font-size: 0.98rem; }
        }
      `}</style>

      <div className="problem-container">
        <h2 className="problem-title">
          Banking and payment processes today are
          <span className="orange"> fragmented,</span>
          <br />
          users struggle with language barriers,{" "}
          <span className="orange">manual record-keeping,</span>
          <br />
          <span className="blue"> and limited access to integrated tools.</span>
        </h2>
        <div className="problem-subtitle">
          Our Solution – Thank Pay: A next-gen digital platform that goes beyond
          cheques — offering multilingual accessibility, smart expense & income
          tracking, and seamless banking features — all in one secure,
          transparent, and user-friendly ecosystem.
        </div>
        <div className="mockup-box">
          <img
            src={mockup4}
            alt="Echeque app mockups"
            className="mockup-img4"
          />
          <img
            src={mockup6}
            alt="Echeque app mockups"
            className="mockup-img6"
          />
          <img
            src={mockup7}
            alt="Echeque app mockups"
            className="mockup-img7"
          />
        </div>
      </div>
    </section>
  );
}
