import React from "react";
import mockup3 from "./../assets/images/mockup3.png";

export default function ProblemSection() {
  return (
    <section id="problem" className="problem-section">
      <style>{`
        .problem-section {
        
 position: relative;
          z-index: 5; /* sit above hero */
          margin-top: -680px; /* pull up over hero to cover mockup */
       
     
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
        .mockup-img3 {
        margin-top: -90px;
          width: 1900px;
          max-width: 100%;
          border-radius: 10px;
          display: block;
        }
        @media (max-width: 900px) {
          .problem-title { font-size: 1.7rem; }
          
        }
        @media (max-width: 600px) {
        
          .problem-section { padding: 56px 14px 64px;        margin-top: -80px; }
          .problem-title { font-size: 1.35rem; }
          .problem-subtitle { font-size: 0.98rem; }
          .mockup-img3 {
        margin-top: 0px;
          width: 1900px;
          max-width: 100%;
          border-radius: 10px;
          display: block;
        }
        }
      `}</style>

      <div className="problem-container">
        <h2 className="problem-title">
          The Problem with Paper <span className="orange">Cheques</span>,
          <br />
          like manual <span className="orange">cheques</span> are slow, prone to
          <br />
          fraud, and <span className="blue">inconvenient</span>.
        </h2>
        <div className="problem-subtitle">
          Our Solution – Thank Pay: enables fully digital, traceable, and
          verifiable cheque transactions
        </div>
        <div className="mockup-box">
          <img
            src={mockup3}
            alt="Echeque app mockups"
            className="mockup-img3"
          />
        </div>
      </div>
    </section>
  );
}
