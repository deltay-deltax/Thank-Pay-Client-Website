import React from "react";

export default function InvestorsSection() {
  const items = [
    {
      icon: "🧱",
      title: "MVP Built",
      desc: "The core Thank Pay platform has been successfully developed and tested, showcasing a complete suite of digital financial tools. Our MVP demonstrates secure digital cheque creation and verification, online deposit and receipt management, instant money transfers, and integrated analytics with chat support — all built within a secure, paperless ecosystem.",
    },
    {
      icon: "🧪",
      title: "Beta Testing in Progress",
      desc: "We're onboarding select users and businesses to refine performance and user experience. Early feedback is helping us enhance security, streamline UI, and improve cross-device usability.",
    },
    {
      icon: "🏦",
      title: "Bank Integrations Underway",
      desc: "We are collaborating with partner banks to enable seamless account linking and real-time fund verification, ensuring compliance and smooth interoperability with banking systems.",
    },
    {
      icon: "🚀",
      title: "Preparing for Public Launch",
      desc: "A scalable, production-ready version is in progress with improved infrastructure and onboarding flows. We're aligning with regulatory frameworks for a compliant and trustworthy launch.",
    },
  ];

  return (
    <section id="investors" className="investors-section">
      <style>{`
        .investors-section {
          width: 100vw;
          background: linear-gradient(120deg, #fff7f0 0%, #eef9fb 60%, #ffffff 100%);
          padding: 84px 20px;
          box-sizing: border-box;
          display: flex; justify-content: center;
        }
        .investors-container { width: 100%; max-width: 1100px; }
        .investors-title {
          font-size: 2.2rem; font-weight: 800; margin: 0; color: #1a1a1a;
          text-align: left; text-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        .investors-title .blue { color: #34BCD6; }
        .investors-title .orange { color: #FFB14B; }
        .investors-sub { margin-top: 10px; color: #7a7a7a; }
        .investors-grid { margin-top: 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 26px 34px; }
        .inv-card {
          background: #fff; border-radius: 14px; padding: 22px 26px; box-shadow: 0 8px 28px rgba(0,0,0,0.08);
          display: grid; grid-template-columns: 56px 1fr; gap: 16px; align-items: flex-start;
        }
        .inv-icon { width:56px; height:56px; border-radius:50%; background:#ffefe0; display:flex; align-items:center; justify-content:center; color:#FFB14B; font-size:22px; }
        .inv-title { margin: 2px 0 8px; font-size: 1.25rem; font-weight: 700; color: #111; }
        .inv-desc { margin: 0; color: #7a7a7a; line-height: 1.65; }
        @media (max-width: 900px) { .investors-grid { grid-template-columns: 1fr; } .investors-title { font-size: 1.7rem; } }
        @media (max-width: 600px) { .investors-section { padding: 56px 14px; } .inv-card { grid-template-columns: 48px 1fr; } }
      `}</style>

      <div className="investors-container">
        <h2 className="investors-title">
          Investors <span className="blue">&</span> Future{" "}
          <span className="orange">Plans</span>
        </h2>
        <div className="investors-sub">
          Join us in redefining digital payments.
        </div>
        <div className="investors-grid">
          {items.map((it) => (
            <article key={it.title} className="inv-card">
              <div className="inv-icon" aria-hidden>
                {it.icon}
              </div>
              <div>
                <div className="inv-title">{it.title}</div>
                <p className="inv-desc">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
