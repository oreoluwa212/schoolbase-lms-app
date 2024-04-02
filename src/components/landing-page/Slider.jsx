import React, { useState } from "react";
import { SlideImgFour, SlideImgOne, SlideImgThree, SlideImgTwo, Star } from "../../assets";

const slides = [
  <div key={1} className="flex flex-col">
    <div className="flex justify-between">
      <div className="  ">
        <img src={SlideImgOne} alt="slide" className="relative"/>
        <div className="relative px-5 py-3 rounded-lg left-12 bottom-[130px]  bg-white w-[348px] " 
        style={{boxShadow: ' 1px 1px 52px 5px rgba(192,192,253,0.75);'}} >
          <p className=" text-xs ">
            Thank you so much for your help. It's exactly what I've been looking
            for. You won't regret it. It really saves me time and effort.
            Skilline is exactly what our business has been lacking."
          </p>
          <div className="flex justify-between p-4 rounded-lg">
            <h1 className=" font-semibold">Roseline Olasoji</h1>
            <div className="flex flex-col">
              <img src={Star} alt="Ratings" />
              <p className="text-xs font-semibold">12 reviews at Yelp</p>
            </div>
          </div>
        </div>
      </div>
      <div >
        <img src={SlideImgTwo} alt="slide" />
        <div className="relative px-5 py-3 rounded-lg left-12 bottom-[130px]  bg-white w-[348px] " style={{boxShadow: ' 1px 1px 52px 5px rgba(192,192,253,0.75);'}}>
          <p className=" text-xs ">
            Thank you so much for your help. It's exactly what I've been looking
            for. You won't regret it. It really saves me time and effort.
            Skilline is exactly what our business has been lacking."
          </p>
          <div className="flex justify-between p-4 rounded-lg">
            <h1 className=" font-semibold">Oreoluwa Ajayi</h1>
            <div className="flex flex-col">
              <img src={Star} alt="Ratings" />
              <p className="text-xs font-semibold">12 reviews at Yelp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-between">
<div>
<img src={SlideImgThree} alt="Avatar"/>
<div className="relative px-5 py-3 rounded-lg left-12 bottom-[130px]  bg-white w-[348px] " >
          <p className=" text-xs ">
            Thank you so much for your help. It's exactly what I've been looking
            for. You won't regret it. It really saves me time and effort.
            Skilline is exactly what our business has been lacking."
          </p>
          <div className="flex justify-between p-4 rounded-lg">
            <h1 className=" font-semibold">Roseline Olasoji</h1>
            <div className="flex flex-col">
              <img src={Star} alt="Ratings" />
              <p className="text-xs font-semibold">12 reviews at Yelp</p>
            </div>
          </div>
        </div>
</div>
<div >
<img src={SlideImgFour} alt="Avatar"/>
<div className="relative px-5 py-3 rounded-lg left-12 bottom-[100px]  bg-white w-[348px] shadow-lg " s style={{boxShadow: 'box-shadow: 1px 1px 52px 5px rgba(192,192,253,0.75);'}}>
          <p className=" text-xs ">
            Thank you so much for your help. It's exactly what I've been looking
            for. You won't regret it. It really saves me time and effort.
            Skilline is exactly what our business has been lacking."
          </p>
          <div className="flex justify-between p-4 rounded-lg">
            <h1 className=" font-semibold">Roseline Olasoji</h1>
            <div className="flex flex-col">
              <img src={Star} alt="Ratings" />
              <p className="text-xs font-semibold">12 reviews at Yelp</p>
            </div>
          </div>
        </div>
</div>
    </div>
  </div>,
  <div key={2}>Slide 2</div>,
  <div key={3}>Slide 3</div>,
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hidden lgss:flex items-center justify-between w-full mt-10 border-2 border-red-600">
      
      <button onClick={goToPrevSlide} className="w-1/6 border-2 border-red-600">Previous</button>
    <div className="w-4/5 border-2 border-red-600" >
    {slides[currentSlide] }
    </div>
     <div className="w-1/6 border-2 border-red-600 flex items-end" >
     <button  onClick={goToNextSlide} >Next</button>
     </div>
    </div>
  );
};

export default Slider;
