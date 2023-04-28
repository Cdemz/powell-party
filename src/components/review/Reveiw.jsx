import Testimonial from "./Reviews";
import React from "react";
import {FaUserCircle} from "react-icons/fa"

function App() {
  const testimonials = [
    {
      name: "BILL C.",
      job: "Helping Hands 40th Anniversary",
      image: {FaUserCircle},
      testimonial:
        "Joe came out with powellparty.com and helped with our 40th Anniversary celebration, we were amazed at the quality of service, talent professionalism of Powell Productions. We would highly recommend them for any of your DJ needs.",
    },
    {
      name: "KERRY R.",
      job: "Holiday Party",
      image: {FaUserCircle},
      testimonial: "powellparty.com was perfect for the office Holiday Party. We provided some songs for the play list and he worked very well with our timing of games and judging winners. Music was just right. We were very pleased and would certainly use him again should the.",
    },
    {
      name: "LIESEL H.",
      job: "SO FUN",
      image: {FaUserCircle},
      testimonial:
        "Joe Powell rocked. Everyone just loved him and his wife, they were so sweet. They brought the fun to our backyard vow renewal for my parents and did everything we asked. Played all the perfect songs and everyone just had a blast. We had kids, grandparents and...",
    },
    {
      name: "Melisa R.",
      job: "A+++ Entertainment",
      image: {FaUserCircle},
      testimonial:
        "Joe and Julie were awesome and very accommodating to a bunch of 17-year-olds celebrating my daughter's birthday . The switch to karaoke from the original idea watching a movie was flawless and a big hit. Thank you for all that you all did to make the night great...",
    },
  ];

  return (
    <div>
      <Testimonial testimonials={testimonials} />
    </div>
  );
}

export default App;
