import React from "react";
import mockup5 from "./../assets/images/mockup5.png";

export default function ProblemSection() {
  return (
    <section id="problem1" className="problem-section1">
      <style>{`
        .problem-section1 {
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
        .mockup-img5 {
          width: 980px;
          max-width: 100%;
          border-radius: 10px;
          display: block;
        }
        @media (max-width: 900px) {
          .problem-title { font-size: 1.7rem; }
        }
        @media (max-width: 600px) {
          .problem-section { padding: 56px 14px 64px; }
          .problem-title { font-size: 1.35rem; }
          .problem-subtitle { font-size: 0.98rem; }
        }
      `}</style>

      <div className="problem-container">
        <h2 className="problem-title">
          Traditional banking tasks{" "}
          <span className="orange">like deposits, invoices, and receipts</span>,
          <br />
          still rely on manual paperwork —
          <span className="blue"> causing delays,errors </span>
          <span className="orange">
            and lack of transparency.
            <br />
          </span>
        </h2>
        <div className="problem-subtitle">
          Our Solution – Thank Pay: Transforms every transaction into a seamless
          digital experience — enabling instant deposits, auto-generated
          invoices, and secure, verifiable e-receipts — all in one unified,
          traceable system.
        </div>
        <div className="mockup-box">
          <img
            src={mockup5}
            alt="Echeque app mockups"
            className="mockup-img5"
          />
        </div>
      </div>
    </section>
  );
}
