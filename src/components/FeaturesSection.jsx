import React from "react";

export default function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <style>{`
        .features-section { width: 100vw; background: linear-gradient(120deg, #fff 0%, #fff7f0 40%, #eef9fb 100%); padding: 84px 20px; display:flex; justify-content:center; box-sizing:border-box; position: relative; z-index: 2; margin-top: 0; }
        .features-container { width:100%; max-width:1100px; }
        .grid { display:grid; grid-template-columns: 1fr 1fr; gap: 28px 34px; align-items:start; }
        .title { font-size: 2.4rem; font-weight: 800; margin: 0; color:#1a1a1a; text-shadow: 0 6px 18px rgba(0,0,0,.08); }
        .title .orange { color:#FFB14B; }
        .title .blue { color:#34BCD6; }
        .spacer { height: 6px; }

        .card { /*background:#fff; border-radius:14px; box-shadow: 0 8px 28px rgba(0,0,0,.08);*/ padding:24px 26px; display:grid; grid-template-columns:56px 1fr; gap:16px; }
        .chip { width:56px; height:56px; border-radius:50%; background:#34BCD6; color:#FFB14B; display:flex; align-items:center; justify-content:center; font-size:22px; }
        .c-title { margin:2px 0 8px; font-size:1.28rem; font-weight:700; color:#111; }
        .c-desc { margin:0; color:#7a7a7a; line-height:1.65; }

        .text-block { display:grid; grid-template-columns:56px 1fr; gap:16px; }
        .text-chip { width:56px; height:56px; border-radius:50%; background:#34BCD6; color:#FFB14B; display:flex; align-items:center; justify-content:center; font-size:22px; }
        .t-title { margin:2px 0 6px; font-size:1.28rem; font-weight:700; color:#111; }
        .t-desc { margin:0; color:#6e6e6e; line-height:1.7; }

        .left-col { display:flex; flex-direction:column; gap:24px; }
        .right-col { display:flex; flex-direction:column; gap:26px; }

        @media (max-width: 900px) { .grid { grid-template-columns: 1fr; } .title { font-size: 1.8rem; } }
        @media (max-width: 600px) { .features-section { padding: 56px 14px; } .card, .text-block { grid-template-columns:48px 1fr; } }
      `}</style>

      <div className="features-container">
        <div className="grid">
          <div className="left-col">
            <h2 className="title">
              We provide <span className="orange">excellent</span>
              <br /> <span className="blue">features</span> from us
            </h2>
            <div className="card">
              <div className="chip" aria-hidden>
                💹
              </div>
              <div>
                <div className="t-title">Live Balance Preview</div>
                <p className="c-desc">
                  View the sender’s available balance directly on the cheque
                  card. If the sender has enough funds, the card glows green. If
                  it’s near the limit, it turns yellow, and if it exceeds the
                  balance, it shows red — ensuring clarity before you accept.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="chip" aria-hidden>
                📑
              </div>
              <div>
                <div className="t-title"> Online Deposits & Receipts</div>
                <p className="c-desc">
                  Track the lifecycle of every cheque — from issuance to
                  clearance — in real time. Receive instant updates and status
                  notifications for complete transparency and peace of mind.
                </p>
              </div>
            </div>
          </div>

          <div className="right-col">
            <div className="text-block">
              <div className="text-chip" aria-hidden>
                🪪
              </div>
              <div>
                <div className="t-title">Digital Cheque Creation</div>
                <p className="t-desc">
                  Create and send verified digital cheques instantly from your
                  device. No paperwork, no delays — just seamless transactions
                  secured with end-to-end encryption. Simplify payments for both
                  individuals and businesses with modern digital cheque
                  technology.
                </p>
              </div>
            </div>
            <div className="text-block">
              <div className="text-chip" aria-hidden>
                💵
              </div>
              <div>
                <div className="t-title">Instant Money Transfer</div>
                <p className="t-desc">
                  Send and receive funds in seconds through verified digital
                  channels. Experience faster, safer transfers with complete
                  transparency and traceable records — ensuring convenience and
                  confidence in every transaction.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="chip" aria-hidden>
                📊
              </div>
              <div>
                <div className="t-title">Analytics & Chat</div>
                <p className="c-desc">
                  Gain insights into your spending with built-in analytics and
                  smart chat. Track trends, monitor expenses, and resolve
                  queries instantly through real-time chat support — all within
                  one unified platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
