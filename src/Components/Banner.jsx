import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Slides from './../Hooks/Slider';

const Banner = () => {
    return (
        <div>
              <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            
            <Slides title='Furniture mart' heading='lorem ipsum glubal finrtyun furniture' img='https://i.ibb.co/G0MkrYm/13-2-450x572.jpg' />
            
            </Slide>
          <Slide index={1}>   
          
           <Slides title='Sale off 25%' heading='lorem ipsum glubal finrtyun furniture' img='https://i.ibb.co/s1ycDT7/35-450x572.jpg' />
           
           </Slide>
          <Slide index={2}>

          <Slides title='Up to 45% off' heading='lorem ipsum glubal finrtyun furniture' img='https://i.ibb.co/G0MkrYm/13-2-450x572.jpg' />

          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
              </CarouselProvider>
        </div>
    );
};

export default Banner;