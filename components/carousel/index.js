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
          src="slider1.jpeg"
        />
      </div>
      <div>
        <img
          width="100%"
          height="100%"
          style={{
              height: '100%'
          }}
          src="slider2.jpeg"
        />
      </div>
      <div>
        <img
          width="100%"
          height="100%"
          style={{
              height: '100%'
          }}
          src="slider3.jpeg"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
