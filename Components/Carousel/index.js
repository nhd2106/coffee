import Slider from "react-awesome-slider";
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';


const Carousel = () => {
  return (
    <Slider animation="fallAnimation" infinite bullets={false}>
      <div>
        <img
          width="100%"
          height="100%"
          style={{
              height: '100%'
          }}
          src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/home-2-slider-image-1a.jpg"
        />
      </div>
      <div>
        <img
          width="100%"
          height="100%"
          style={{
              height: '100%'
          }}
          src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/home-2-slider-image-2a.jpg"
        />
      </div>
      <div>
        <img
          width="100%"
          height="100%"
          style={{
              height: '100%'
          }}
          src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/home-2-slider-image-3a.jpg"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
