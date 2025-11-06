import React from "react";
import mockup9 from "./../assets/images/mockup9.png";

export default function ProblemSection() {
  return (
    <section id="problem3" className="problem-section3">
      <style>{`
        .problem-section3 {
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
          Users often face delays and confusion while navigating banking systems
          <span className="orange"> — from waiting for responses,</span>
          <br />
          <span className="orange"> to manually searching data</span>
          <br />
          <span className="blue"> or struggling with complex interfaces.</span>
        </h2>
        <div className="problem-subtitle">
          Empowered with an intelligent chatbot, instant query resolution,
          real-time data updates, and smooth voice input — ensuring effortless
          interaction, faster responses, and a truly conversational banking
          experience.
        </div>
        <div className="mockup-box">
          <img
            src={mockup9}
            alt="Echeque app mockups"
            className="mockup-img7"
            style={{ width: "1600px" }}
          />
        </div>
      </div>
    </section>
  );
}
