import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";
import image1 from "../assets/images/hacathon-img/hackathon.jpeg";
import image2 from "../assets/images/internship-images/intenship-img1.jpg";
import image3 from "../assets/images/reacent-images/IMG20240930104111_01.jpg";
import image4 from "../assets/images/reacent-images/IMG20241004114738_01.jpg";

const Gallery = () => {
  const images = [image1, image2, image3, image4, image1, image2];
  const collaboratedImages = [image2, image2, image2, image2, image2, image2];

  const [viewAll, setViewAll] = useState({
    institute: false,
    visit: false,
    events: false,
    colleges: false,
  });

  // 🔹 Default settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 8000, // slower & smoother scroll
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // continuous scroll
    cssEase: "linear", // no acceleration, smooth motion
    swipe: true, // ✅ touch devices
    draggable: true, // ✅ mouse drag
    pauseOnHover: false, // pause on hover for clarity
    pauseOnFocus: false, // pause when focused
    arrows: false, // no arrows for clean look
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, swipe: true, draggable: true },
      },
    ],
  };

  const toggleViewAll = (section) => {
    setViewAll((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const renderImages = (section, list) => (
    <div className="row mx-1">
      {list.map((img, idx) => (
        <div
          key={`${section}-${idx}`}
          className="col-12 col-sm-6 col-md-4 col-lg-3 px-2 mb-3"
        >
          <img
            src={img}
            alt={`${section} ${idx}`}
            className="img-fluid gallery-image"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="gallery-container container-fluid">
      <h1 className="text-center my-4">Our Gallery</h1>

      {/* Our Institute (Right) */}
      <div className="gallery-section m-5">
        <h2 className="text-center mb-3">Our Institute</h2>

        {viewAll.institute ? (
          <Slider {...sliderSettings}>
            {images.map((img, idx) => (
              <div key={`institute-${idx}`} className="gallery-slide">
                <img
                  src={img}
                  alt={`Institute ${idx}`}
                  className="img-fluid gallery-image"
                />
              </div>
            ))}
          </Slider>
        ) : (
          renderImages("institute", images)
        )}

        <a
          href="#!"
          className="text-decoration-none mt-3"
          onClick={(e) => {
            e.preventDefault();
            toggleViewAll("institute");
          }}
        >
          {viewAll.institute ? "View Less" : "View All"}
        </a>
      </div>

      {/* Collaborated Colleges (Left) */}
      <div className="gallery-section m-5">
        <h2 className="text-center mb-3">Collaborated Colleges</h2>
        {!viewAll.colleges ? (
          <Slider {...{ ...sliderSettings, rtl: true }}>
            {collaboratedImages.map((img, idx) => (
              <div key={`colleges-${idx}`} className="gallery-slide">
                <img
                  src={img}
                  alt={`College ${idx}`}
                  className="img-fluid gallery-image"
                />
              </div>
            ))}
          </Slider>
        ) : (
          renderImages("colleges", collaboratedImages)
        )}

        {/* ✅ anchor moved inside same div */}
        <a
          href="#!"
          className="text-decoration-none mt-3"
          onClick={(e) => {
            e.preventDefault();
            toggleViewAll("colleges");
          }}
        >
          {viewAll.colleges ? "View Less" : "View All"}
        </a>
      </div>

      {/* Industrial Visit (Right) */}
      <div className="gallery-section m-5">
        <h2 className="text-center mb-3">Industrial Visit</h2>
        {!viewAll.visit ? (
          <Slider {...sliderSettings}>
            {images.map((img, idx) => (
              <div key={`visit-${idx}`} className="gallery-slide">
                <img
                  src={img}
                  alt={`Visit ${idx}`}
                  className="img-fluid gallery-image"
                />
              </div>
            ))}
          </Slider>
        ) : (
          renderImages("visit", images)
        )}
        <a
          href="#!"
          className="text-decoration-none mt-3"
          onClick={(e) => {
            e.preventDefault();
            toggleViewAll("visit");
          }}
        >
          {viewAll.visit ? "View Less" : "View All"}
        </a>
      </div>

      {/* Events (Left) */}
      <div className="gallery-section m-5">
        <h2 className="text-center mb-3">Events</h2>
        {!viewAll.events ? (
          <Slider {...{ ...sliderSettings, rtl: true }}>
            {images.map((img, idx) => (
              <div key={`events-${idx}`} className="gallery-slide">
                <img
                  src={img}
                  alt={`Events ${idx}`}
                  className="img-fluid gallery-image"
                />
              </div>
            ))}
          </Slider>
        ) : (
          renderImages("events", images)
        )}

        <a
          href="#!"
          className="text-decoration-none mt-3"
          onClick={(e) => {
            e.preventDefault();
            toggleViewAll("events");
          }}
        >
          {viewAll.events ? "View Less" : "View All"}
        </a>
      </div>
    </div>
  );
};

export default Gallery;
