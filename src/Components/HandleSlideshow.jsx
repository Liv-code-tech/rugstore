import { useEffect, useState } from "react";
import Products from '../products.json';

const delay = 7000;

function HandleSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
      setIndex((prevIndex) =>
      prevIndex === Products.length - 1 ? 0 : prevIndex + 1),
      delay
    );

    return () => {};
  }, [index]);
  
    return (
      <div className="slideshow text-center m-auto overflow-hidden w-full mb-5">
        <div className="slideshowSlider whitespace-nowrap transition duration-1000" style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
          {Products.map((product, index) => (
          <div className="slide h-[700px] w-full rounded-3xl inline-block mb-24 -mt-24 cursor-pointer" key={index}>
            <a href={product.link}>
              <img className="object-none object-bottom" src={product.picture_url}/>
            </a> 
          </div> 
          ))}  
        </div>
        
        <div className="slideshowDots text-center ">
          {Products.map((_, idx) => (
          <div 
            key={idx} 
            className= "slideshowDot inline-block h-[14px] w-[20px] rounded-3xl bg-stone-400 cursor-pointer m-1 mb-5"
          ></div>
        ))}
        </div>
      </div>

      
    );
}
export default HandleSlideshow;