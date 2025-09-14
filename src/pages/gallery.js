import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* =============== Bulk import (Webpack/CRA) =============== */
const importAll = (r) => {
  const sorted = r.keys().sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return sorted.map(r);
};

// 🔧 Adjust folder paths to your project
const allInstitute = importAll(require.context("../assets/images/gallery/institute", true, /\.(png|jpe?g|webp|svg)$/));
const allColleges  = importAll(require.context("../assets/images/gallery/colleges",  true, /\.(png|jpe?g|webp|svg)$/));
const allVisits    = importAll(require.context("../assets/images/gallery/visits",    true, /\.(png|jpe?g|webp|svg)$/));
const allEvents    = importAll(require.context("../assets/images/gallery/events",    true, /\.(png|jpe?g|webp|svg)$/));

const defaultConfig = {
  institute: allInstitute,
  colleges:  allColleges,
  visits:    allVisits,
  events:    allEvents,
};

/* -----------------------
   Modern Styles (injected)
--------------------------*/
const injectStyles = () => {
  const css = `
  :root { --glx-bg:#0b1220; --glx-card:#101827; --glx-text:#e5e7eb; --glx-primary:#7c3aed; }
  .glx-root {
    min-height: 100%;
    background:
      radial-gradient(1200px 800px at 10% -10%, rgba(124,58,237,.12), transparent 60%),
      radial-gradient(1000px 600px at 110% 10%, rgba(59,130,246,.10), transparent 50%),
      var(--glx-bg);
    color: var(--glx-text);
    padding: clamp(12px, 2vw, 24px);
  }
  .glx-page-title {
    font-size: clamp(28px, 3.2vw, 44px);
    font-weight: 800; margin: 16px 0 24px;
    background: linear-gradient(90deg,#fff,#c7d2fe 40%,#a78bfa);
    -webkit-background-clip: text; background-clip: text; color: transparent; text-align: center;
  }
  .glx-section { margin: 32px auto 56px; max-width: 1400px; }
  .glx-header { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:10px; padding:0 6px; }
  .glx-title { font-size: clamp(18px, 2vw, 26px); font-weight: 700; margin: 0; }
  .glx-toggle {
    border: 1px solid rgba(255,255,255,.08);
    background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
    color: var(--glx-text); padding:.55rem .9rem; border-radius:999px; font-weight:600; cursor:pointer;
    box-shadow: 0 10px 30px rgba(0,0,0,.25), inset 0 1px rgba(255,255,255,.06);
    transition: transform .15s ease, box-shadow .2s ease, border-color .15s ease;
  }
  .glx-toggle:hover { transform: translateY(-1px); border-color: rgba(255,255,255,.14); }
  .glx-slide { padding: 0 .6rem; }
  .glx-card { position:relative; overflow:hidden; border-radius:18px; background:var(--glx-card); box-shadow:0 10px 40px rgba(2,6,23,.45); }
  .glx-img { width:100%; height:260px; object-fit:cover; display:block; transform:scale(1.01);
    transition: transform .6s cubic-bezier(.2,.8,.2,1), filter .3s ease; filter: saturate(1.02) contrast(1.02); }
  .glx-card:hover .glx-img { transform: scale(1.06); }
  .glx-lightbox { position: fixed; inset:0; display:grid; place-items:center; background: rgba(5,7,12,.85); z-index:9999; padding:24px; }
  .glx-lightbox img { max-width:min(1100px,94vw); max-height:86vh; border-radius:16px; box-shadow:0 16px 60px rgba(0,0,0,.55); }
  .glx-close { position:absolute; top:14px; right:18px; width:44px; height:44px; border-radius:50%;
    background:rgba(255,255,255,.92); border:none; font-size:28px; cursor:pointer; line-height:44px; text-align:center; box-shadow:0 10px 30px rgba(0,0,0,.25); }
  .glx-close:hover { background:#fff; }
  @media (max-width: 768px) { .glx-img { height: 220px; } }
  `;
  if (!document.getElementById("glx-styles")) {
    const style = document.createElement("style");
    style.id = "glx-styles"; style.innerHTML = css; document.head.appendChild(style);
  }
};

/* -----------------------
   Reusable image card
--------------------------*/
const ImageCard = ({ src, alt, onClick }) => (
  <div
    className="glx-card"
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick?.()}
    aria-label={`Open ${alt || "image"} preview`}
  >
    <img className="glx-img" loading="lazy" src={src} alt={alt} />
  </div>
);

/* -----------------------
   Lightbox
--------------------------*/
const Lightbox = ({ src, alt, onClose }) => {
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);
  if (!src) return null;
  return (
    <div className="glx-lightbox" role="dialog" aria-modal="true">
      <button className="glx-close" onClick={onClose} aria-label="Close preview">×</button>
      <img src={src} alt={alt || "Preview"} />
    </div>
  );
};

/* -----------------------
   Section Component
--------------------------*/
const GallerySection = ({ title, images, rtl = false }) => {
  const [viewAll, setViewAll] = useState(false);
  const [preview, setPreview] = useState(null);

  const sliderSettings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 8000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      swipe: true,
      draggable: true,
      pauseOnHover: true,
      pauseOnFocus: false,
      arrows: false,
      rtl,
      responsive: [
        { breakpoint: 1280, settings: { slidesToShow: 3 } },
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: "unslick" },
      ],
    }),
    [rtl]
  );

  const sliderSlice = images.slice(0, 24);

  return (
    <section className="glx-section">
      <div className="glx-header">
        <h2 className="glx-title">{title}</h2>
        <button className="glx-toggle" onClick={() => setViewAll((v) => !v)} aria-pressed={viewAll}>
          {viewAll ? "View Less" : "View All"}
        </button>
      </div>

      {!viewAll ? (
        <Slider {...sliderSettings}>
          {sliderSlice.map((img, idx) => (
            <div key={`${title}-${idx}`} className="glx-slide">
              <ImageCard src={img} alt={`${title} ${idx + 1}`} onClick={() => setPreview(img)} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="row mx-1">
          {images.map((img, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 px-2 mb-3" key={`${title}-grid-${idx}`}>
              <ImageCard src={img} alt={`${title} ${idx + 1}`} onClick={() => setPreview(img)} />
            </div>
          ))}
        </div>
      )}

      <Lightbox src={preview} alt={`${title} preview`} onClose={() => setPreview(null)} />
    </section>
  );
};

/* -----------------------
   Page Component
--------------------------*/
const Gallery = ({ config }) => {
  useEffect(() => injectStyles(), []);
  const cfg = config || defaultConfig;
  return (
    <main className="glx-root">
      <h1 className="glx-page-title">Our Gallery</h1>
      <GallerySection title="Our Institute" images={cfg.institute} />
      <GallerySection title="Collaborated Colleges" images={cfg.colleges} rtl />
      <GallerySection title="Industrial Visit" images={cfg.visits} />
      <GallerySection title="Events" images={cfg.events} rtl />
    </main>
  );
};

export default Gallery;
