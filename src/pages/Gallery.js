// import React from 'react';
// import './Gallery.css';
// import image1 from '../assets/images/hacathon-img/hackathon.jpeg'
// import image2 from '../assets/images/internship-images/intenship-img1.jpg'
// import image3 from '../assets/images/reacent-images/IMG20240930104111_01.jpg'
// import image4 from '../assets/images/reacent-images/IMG20241004114738_01.jpg'

// const Gallery = () => {
 
//   return (
//    <>
//    <div className="gallery container-fluid">
//     <h1>Our Gallery</h1>
//     <div className='gallery1 container-fluid'>
//       <h1>Our Institute</h1>
//       <div className='gallery2 container-fluid d-flex col-lg-3'>
//         <img src={image1} alt="hackathon"  />
//         <img src={image2} alt="internship" />
//         <img src={image3} alt="recent images" />
//         <img src={image4} alt="recent images" />
//       </div>
//       </div>
//       <div className="gallery3" id="gallery">
//         <h1>Industrial Visit</h1>
//         <div className="gallery4">
//           <img src={image1} alt="hackathon" />
//           <img src={image2} alt="internship" />
//           <img src={image3} alt="recent images" />
//           <img src={image4} alt="recent images" />
//         </div>
      
//       </div>
//       <div className="gallery5" id="gallery">
//         <h1>Events</h1>
//         <div className="gallery6">
//           <img src={image1} alt="hackathon" />
//           <img src={image2} alt="internship" />
//           <img src={image3} alt="recent images" />
//           <img src={image4} alt="recent images" />
//         </div>
      
//       </div>
//       <div className="gallery7" id="gallery">
//         <h1></h1>
//         <div className="gallery8">
//           <img src={image1} alt="hackathon" />
//           <img src={image2} alt="internship" />
//           <img src={image3} alt="recent images" />
//           <img src={image4} alt="recent images" />
//         </div>
      
//       </div>
//     </div>
   
//    </>
//   );
// };

// export default Gallery;

// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Gallery.css";
// import image1 from "../assets/images/hacathon-img/hackathon.jpeg";
// import image2 from "../assets/images/internship-images/intenship-img1.jpg";
// import image3 from "../assets/images/reacent-images/IMG20240930104111_01.jpg";
// import image4 from "../assets/images/reacent-images/IMG20241004114738_01.jpg";

// const Gallery = () => {
//   const images = [image1, image2, image3, image4, image1, image2];

//   const [viewAll, setViewAll] = useState({
//     institute: false,
//     visit: false,
//     events: false,
//   });

//   // Slick carousel settings
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4, // Default for laptop
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024, // Tablet view
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768, // Mobile view
//         settings: "unslick", // Disable slideshow on mobile
//       },
//     ],
//   };

//   const toggleViewAll = (section) => {
//     setViewAll((prevState) => ({
//       ...prevState,
//       [section]: !prevState[section],
//     }));
//   };

//   const renderImages = (section) => (
//     <div className="row mx-1 ">
//       {images.map((img, idx) => (
//         <div className="col-12 col-sm-6 col-md-4 col-lg-3 px-2 mb-3" key={`${section}-${idx}`}>
//           <img src={img} alt={`${section} ${idx}`} className="img-fluid gallery-image" />
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="gallery-container container-fluid">
//       <h1 className="text-center my-4">Our Gallery</h1>

//       {/* Our Institute Section */}
//       <div className="gallery-section m-4">
//         <h2 className="text-center mb-3">Our Institute</h2>
//         {!viewAll.institute ? (
//           <Slider {...sliderSettings}>
//             {images.map((img, idx) => (
//               <div key={`institute-${idx}`} className="gallery-slide">
//                 <img src={img} alt={`Institute ${idx}`} className="img-fluid gallery-image" />
//               </div>
//             ))}
//           </Slider>
//         ) : (
//           renderImages("institute")
//         )}
//         <button className="btn btn-primary mt-3" onClick={() => toggleViewAll("institute")}>
//           {viewAll.institute ? "View Less" : "View All"}
//         </button>
//       </div>

//       {/* Industrial Visit Section */}
//       <div className="gallery-section mt-5 m-4">
//         <h2 className="text-center mb-3">Industrial Visit</h2>
//         {!viewAll.visit ? (
//           <Slider {...sliderSettings}>
//             {images.map((img, idx) => (
//               <div key={`visit-${idx}`} className="gallery-slide">
//                 <img src={img} alt={`Industrial Visit ${idx}`} className="img-fluid gallery-image" />
//               </div>
//             ))}
//           </Slider>
//         ) : (
//           renderImages("visit")
//         )}
//         <button className="btn btn-primary mt-3" onClick={() => toggleViewAll("visit")}>
//           {viewAll.visit ? "View Less" : "View All"}
//         </button>
//       </div>

//       {/* Events Section */}
//       <div className="gallery-section mt-5 m-4">
//         <h2 className="text-center mb-3">Events</h2>
//         {!viewAll.events ? (
//           <Slider {...sliderSettings}>
//             {images.map((img, idx) => (
//               <div key={`events-${idx}`} className="gallery-slide">
//                 <img src={img} alt={`Events ${idx}`} className="img-fluid gallery-image" />
//               </div>
//             ))}
//           </Slider>
//         ) : (
//           renderImages("events")
//         )}
//         <button className="btn btn-primary mt-3" onClick={() => toggleViewAll("events")}>
//           {viewAll.events ? "View Less" : "View All"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";
import image1 from "../assets/images/hacathon-img/hackathon.jpeg";
import image2 from "../assets/images/internship-images/intenship-img1.jpg";
import image3 from "../assets/images/reacent-images/IMG20240930104111_01.jpg";
import image4 from "../assets/images/reacent-images/IMG20241004114738_01.jpg";

const Gallery = () => {
  const images = [image1, image2, image3, image4, image1, image2];

  const [viewAll, setViewAll] = useState({
    institute: false,
    visit: false,
    events: false,
  });

  // Slick carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: "unslick", // Disable slideshow on mobile
      },
    ],
  };

  const toggleViewAll = (section) => {
    setViewAll((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const renderImages = (section) => (
    <div className="row mx-1">
      {images.map((img, idx) => (
        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3 px-2 mb-3"
          key={`${section}-${idx}`}
        >
          <img src={img} alt={`${section} ${idx}`} className="img-fluid gallery-image" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="gallery-container container-fluid">
      <h1 className="text-center my-4">Our Gallery</h1>

      {/* Our Institute Section */}
      <div className="gallery-section">
        <h2 className="text-center mb-3 m-4">Our Institute</h2>
        {!viewAll.institute ? (
          <Slider {...sliderSettings} className="slider-container">
            {images.map((img, idx) => (
              <div key={`institute-${idx}`} className="gallery-slide">
                <img src={img} alt={`Institute ${idx}`} className="img-fluid gallery-image" />
              </div>
            ))}
          </Slider>
        ) : (
          renderImages("institute")
        )}
        <button className="btn btn-primary mt-3" onClick={() => toggleViewAll("institute")}>
          {viewAll.institute ? "View Less" : "View All"}
        </button>
      </div>

      {/* Industrial Visit Section */}
      <div className="gallery-section mt-5 m-4">
        <h2 className="text-center mb-3">Industrial Visit</h2>
        {!viewAll.visit ? (
          <Slider {...sliderSettings} className="slider-container">
            {images.map((img, idx) => (
              <div key={`visit-${idx}`} className="gallery-slide">
                <img src={img} alt={`Industrial Visit ${idx}`} className="img-fluid gallery-image" />
              </div>
            ))}
          </Slider>
        ) : (
          renderImages("visit")
        )}
        <button className="btn btn-primary mt-3" onClick={() => toggleViewAll("visit")}>
          {viewAll.visit ? "View Less" : "View All"}
        </button>
      </div>

      {/* Events Section */}
      <div className="gallery-section mt-5 m-4" >
        <h2 className="text-center mb-3">Events</h2>
        {!viewAll.events ? (
          <Slider {...sliderSettings} className="slider-container">
            {images.map((img, idx) => (
              <div key={`events-${idx}`} className="gallery-slide">
                <img src={img} alt={`Events ${idx}`} className="img-fluid gallery-image" />
              </div>
            ))}
          </Slider>
        ) : (
          renderImages("events")
        )}
        <button className="btn btn-primary mt-3" onClick={() => toggleViewAll("events")}>
          {viewAll.events ? "View Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
