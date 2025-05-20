// import React from "react";
// import "./Testimonial.css";
// import TestimonialCard from "./TestimonialCard";
// // import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const TestimonialMain = () => {
//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{
//           ...style,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           background: "#ff2230",
//           borderTopRightRadius: "10px",
//           borderBottomRightRadius: "14px",
//           height: "40px",
//           cursor: "pointer",
//         }}
//         onClick={onClick}
//       />
//     );
//   }
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{
//           ...style,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           background: "#ff2230",
//           borderTopLeftRadius: "10px",
//           borderBottomLeftRadius: "10px",
//           height: "40px",
//           cursor: "pointer",
//         }}
//         onClick={onClick}
//       />
//     );
//   }

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 990,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="testimonialMainContainer">
//       <TestimonialCard
//         para="“I have taken C2 German classes in Bangalore at Prizma Academy, and I couldn’t be happier with my progress. The trainers are knowledgeable and supportive, and the interactive sessions make learning enjoyable.” "
//         by="- Ananya"
//       />

//       <TestimonialCard
//         para="“Prizma Academy’s C2 German classes in Bangalore have exceeded my expectations. The curriculum is well-structured, and the trainers are excellent. I feel confident and prepared to use German in professional settings.” "
//         by="- Rohan"
//       />
//     </div>
//   );
// };

// export default TestimonialMain;
