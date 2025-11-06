import React from "react";
import founderImg from "../assets/images/founder.jpeg";
import coFounderImg from "../assets/images/co-founder.jpeg";

export default function FoundersSection() {
  const founders = [
    {
      name: "Mr Raghu K S",
      role: "Founder",
      badge: "FOUNDER",
      image: founderImg,
      phone: "+91 9482164128",
      email: "ksraghuco@gmail.com",
    },
    {
      name: "Ms Likitha Bai",
      role: "Co-Founder",
      badge: "CO-FOUNDER",
      image: coFounderImg,
      phone: "+91 9731801368",
      email: "likithamanjunath95@gmail.com",
    },
  ];

  return (
    <section id="founders" className="fs-section">
      <style>{`
        .fs-section { width: 100vw; background: radial-gradient(1200px 600px at 20% 0%, #2a2420, #1e1b19 60%, #1a1918 100%); color: #fff; padding: 84px 20px; display:flex; justify-content:center; box-sizing:border-box; }
        .fs-container { width: 100%; max-width: 1200px; }
        .fs-kicker { color: #FFB14B; font-weight: 700; letter-spacing: .6px; }
        .fs-title { margin: 6px 0 10px; font-size: 2.4rem; font-weight: 800; }
        .fs-title .orange { color: #FFB14B; }
        .fs-title .blue { color: #34BCD6; }
        .fs-sub { color: #bdbdbd; margin-bottom: 30px; }

        .fs-grid { display:grid; grid-template-columns: repeat(2, minmax(340px, 1fr)); column-gap: 44px; row-gap: 34px; justify-items:center; align-items:start; }
        .fs-card { width: 350px; max-width: 100%; min-height: 300px; background: linear-gradient(180deg, #2c2826 0%, #211f1e 100%); border-radius: 24px; border: 1px solid #ffffff1a; box-shadow: inset 0 1px 0 #ffffff22, 0 12px 30px rgba(0,0,0,.35); padding: 26px 24px 22px; display:flex; flex-direction:column; align-items:center; text-align:center; }
        .fs-avatar-wrap { position:relative; display:flex; align-items:center; justify-content:center; margin-top: 2px; }
        .fs-avatar { width: 128px; height: 128px; border-radius:50%; background: radial-gradient(60% 60% at 40% 30%, #fff 0%, #e6e6e6 45%, #c7c7c7 100%); color:#333; display:flex; align-items:center; justify-content:center; font-size:40px; font-weight:800; border: 6px solid #7a4a26; box-shadow: 0 6px 18px rgba(0,0,0,.4); overflow:hidden; }
        .fs-avatar img { width:100%; height:100%; object-fit:cover; display:block; border-radius:50%; }
        .fs-badge { position:absolute; bottom:-12px; left:50%; transform:translateX(-50%); background:#FF8F2B; color:#1a1a1a; border-radius:999px; padding:8px 16px; font-weight:900; font-size:.9rem; letter-spacing:.4px; box-shadow: 0 8px 20px rgba(255,177,75,.45); }
        .fs-name { margin: 22px 0 6px; font-size: 1.9rem; font-weight: 800; }
        .fs-role { margin: 0 0 14px; color:#FFB14B; font-weight: 700; }
        .fs-socials { display:flex; gap:12px; justify-content:center; }
        .fs-social { width:36px; height:36px; border-radius:10px; background:#2c2a28; color:#d0d0d0; display:flex; align-items:center; justify-content:center; border:1px solid #ffffff1a; }

        @media (max-width: 900px) { .fs-grid { grid-template-columns: 1fr; } .fs-title { font-size: 1.8rem; } .fs-card { width: 100%; min-height: unset; } }
        @media (max-width: 600px) { .fs-section { padding: 56px 14px; } }
      `}</style>

      <div className="fs-container">
        <div className="fs-kicker">Thank Pay</div>
        <h2 className="fs-title">
          Meet the <span className="orange">Visionaries</span> Behind{" "}
          <span className="blue">Thank Pay</span>
        </h2>
        <div className="fs-sub">
          “A secure, paperless way to issue, verify, and manage cheques
          instantly.”
        </div>

        <div className="fs-grid">
          {founders.map((f) => (
            <div key={f.name} className="fs-card">
              <div className="fs-avatar-wrap">
                <div className="fs-avatar" aria-label={`${f.name} portrait`}>
                  {f.image ? <img src={f.image} alt={f.name} /> : null}
                </div>
                <div className="fs-badge">{f.badge}</div>
              </div>
              <div className="fs-name">{f.name}</div>
              <div className="fs-role">{f.role}</div>
              <div className="fs-phone">{f.phone}</div>
              <div className="fs-email">{f.email}</div>
              <div className="fs-socials" aria-label="social links">
                {/* <div className="fs-social" title="LinkedIn">in</div> */}
                {/* <div className="fs-social" title="Twitter">t</div> */}
                {/* <div className="fs-social" title="Email">✉️</div> */}
                {/* <div className="fs-social" title="GitHub">𝚐</div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
