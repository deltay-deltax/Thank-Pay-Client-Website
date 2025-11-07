import React from "react";

export default function AboutUs() {
  return (
    <footer className="aboutus-section" id="about">
      <style>{`
        .aboutus-section {
          width: 100vw;
          background: radial-gradient(1200px 600px at 20% 0%, #2a2420, #1e1b19 60%, #1a1a19 100%);
          color: #e8e8e8;
          padding: 64px 20px 22px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
        }
        .aboutus-container {
          width: 100%;
          max-width: 1100px;
        }
        .top {
          display: flex;
          flex-direction: row;
          gap: 28px;
          align-items: stretch;
          justify-content: space-evenly;
        }
        .brand {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1 1 0%;
        }
        .logo { font-size: 1.6rem; font-weight: 800; }
        .logo .orange { color: #FFB14B; }
        .logo .white { color: #ffffff; }
        .brand p { margin:0; color:#b9b9b9; line-height:1.6; max-width: 380px; }
        .socials { display: flex; gap: 10px; margin-top: 10px; }
        .sbtn {
          width: 40px; height: 40px; border-radius: 8px;
          background: #2c2a28; color: #e0e0e0;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid #ffffff22; cursor:pointer; font-size:1.3rem;
          transition: background 0.2s, color 0.2s;
        }
        .sbtn svg { width: 24px; height: 24px; transition: color 0.2s; }
        .sbtn:hover { background: #FFB14B1a; }
        .cols { display: flex; gap: 34px; flex: 2 2 0%; justify-content: space-evenly; }
        .col { flex: 1 1 0%; min-width: 150px; }
        .col h4 { margin: 0 0 12px; color: #ffffff; font-size: 1.02rem; }
        .link { color: #cfcfcf; text-decoration: none; display: block; margin: 8px 0; font-size: .98rem; }
        .contact { display: flex; flex-direction: column; gap: 12px; width: 280px; }
        .newsletter { background: rgba(255,255,255,0.04); border: 1px solid #ffffff22; border-radius: 14px; padding: 18px; }
        .newsletter h4 { margin: 0 0 10px; color: #ffffff; font-size: 1.06rem; }
        .newsletter p { margin: 0 0 14px; color: #bdbdbd; }
        .form { display: flex; gap: 10px; }
        .input { flex: 1; background: #ffffff; color: #1a1a1a; border: none; border-radius: 8px; padding: 12px 14px; font-size: .98rem; }
        .btn { background: #FFB14B; color: #1a1a1a; border: none; border-radius: 8px; padding: 12px 16px; font-weight: 700; cursor: pointer; }
        .bottom { margin-top: 28px; text-align: center; color: #b9b9b9; font-size: .95rem; }
        .bottom a { color: #FFB14B; text-decoration: none; }
        .c-row { display: flex; align-items: flex-start; gap: 12px; color: #d8d8d8; }
        .c-ico { width: 32px; height: 32px; border-radius: 999px; display: flex; align-items: center; justify-content: center; }
        .c-ico.phone { background: #27ae60; }
        .c-ico.mail  { background: #2d9cdb; }
        .c-ico.addr  { background: #bb6bd9; }
        .c-title { font-size: .92rem; color: #9fc1cf; margin: 0; }
        .c-text { margin: 0; color: #e8e8e8; }
        @media (max-width: 900px) { .top { flex-direction: column; gap: 32px; } .cols { flex-direction: column; gap: 24px; } }
        @media (max-width: 600px) { .aboutus-section { padding: 42px 14px 18px; } .cols { flex-direction: column; gap: 18px; } .form { flex-direction: column; } .btn { width: 100%; } }
      `}</style>
      <div className="aboutus-container">
        <div className="top">
          <div className="brand">
            <div className="logo">
              <span className="orange">Thank Pay</span>
              <span className="white"></span>
            </div>
          
            <div className="socials">
              {/* Facebook */}
              <div className="sbtn facebook" aria-label="Facebook">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
                      style={{ fill: "#1877f2", fillRule: "nonzero" }}
                    />
                    <path
                      d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z"
                      style={{ fill: "#fff", fillRule: "nonzero" }}
                    />
                  </g>
                </svg>
              </div>
              {/* LinkedIn */}
              <div className="sbtn linkedin" aria-label="LinkedIn">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="M512,64c0,-35.323 -28.677,-64 -64,-64l-384,0c-35.323,0 -64,28.677 -64,64l0,384c0,35.323 28.677,64 64,64l384,0c35.323,0 64,-28.677 64,-64l0,-384Z"
                      style={{ fill: "#2867b2" }}
                    />
                    <rect
                      height="257.962"
                      width="85.76"
                      x="61.053"
                      y="178.667"
                      style={{ fill: "#fff" }}
                    />
                    <path
                      d="M104.512,54.28c-29.341,0 -48.512,19.29 -48.512,44.573c0,24.752 18.588,44.574 47.377,44.574l0.554,0c29.903,0 48.516,-19.822 48.516,-44.574c-0.555,-25.283 -18.611,-44.573 -47.935,-44.573Z"
                      style={{ fill: "#fff", fillRule: "nonzero" }}
                    />
                    <path
                      d="M357.278,172.601c-45.49,0 -65.866,25.017 -77.276,42.589l0,-36.523l-85.738,0c1.137,24.197 0,257.961 0,257.961l85.737,0l0,-144.064c0,-7.711 0.554,-15.42 2.827,-20.931c6.188,-15.4 20.305,-31.352 43.993,-31.352c31.012,0 43.436,23.664 43.436,58.327l0,138.02l85.741,0l0,-147.93c0,-79.237 -42.305,-116.097 -98.72,-116.097Z"
                      style={{ fill: "#fff", fillRule: "nonzero" }}
                    />
                  </g>
                </svg>
              </div>
              {/* X (Twitter) */}
              {/* X (Twitter) */}
              <div className="sbtn x" aria-label="Twitter X">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 1200 1227"
                  fill="currentColor"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="1200" height="1227" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="cols">
            <div className="col">
              <h4>About us</h4>
              <a className="link" href="#">
                Our Mission
              </a>
              <a className="link" href="#">
                Meet the Team
              </a>
              <a className="link" href="#">
                Contact
              </a>
            </div>
            <div className="col contact">
              <h4>Contact Us</h4>
              <div className="c-row">
                <div className="c-ico phone" aria-hidden>
                  📞
                </div>
                <div>
                  <p className="c-title">Phone</p>
                  <p className="c-text">+91 9482164128</p>
                </div>
              </div>
              <div className="c-row">
                <div className="c-ico mail" aria-hidden>
                  ✉️
                </div>
                <div>
                  <p className="c-title">Email</p>
                  <p className="c-text">allbankspay@gmail.com</p>
                </div>
              </div>
              <div className="c-row">
                <div className="c-ico addr" aria-hidden>
                  📍
                </div>
                <div>
                  <p className="c-title">Address</p>
                  <p className="c-text">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          © 2025 <a href="#">Thank Pay</a> — All rights reserved.
          <br />
          <a
            href="https://github.com/deltay-deltax"
            target="_blank"
            rel="noopener noreferrer"
            className="orange"
          >
            Aaditya Gupta and <span></span>
          </a>
          <a
            href="https://github.com/aaru1127"
            target="_blank"
            rel="noopener noreferrer"
            className="orange"
          >
            Aaruhi
          </a>
          , Designer & Developer.
        </div>
      </div>
    </footer>
  );
}
