// import { CarouselProvider, Slider, Slide, } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import Slides from './../Hooks/Slider';

// const Banner = () => {
//     return (
//         <div>
//               <CarouselProvider
//         naturalSlideWidth={100}
//         naturalSlideHeight={55}
//         totalSlides={3}
//       >
//         <Slider>
//           <Slide index={0}>
            
//             <Slides title='Furniture mart' heading='lorem ipsum glubal finrtyun furniture' img='https://i.ibb.co/G0MkrYm/13-2-450x572.jpg' />
            
//             </Slide>
//           <Slide index={1}>   
          
//            <Slides title='Sale off 25%' heading='lorem ipsum glubal finrtyun furniture' img='https://i.ibb.co/s1ycDT7/35-450x572.jpg' />
           
//            </Slide>
//           <Slide index={2}>

//           <Slides title='Up to 45% off' heading='lorem ipsum glubal finrtyun furniture' img='https://i.ibb.co/G0MkrYm/13-2-450x572.jpg' />

//           </Slide>
//         </Slider>
     
//               </CarouselProvider>
//         </div>
//     );
// };

// export default Banner;



import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Slides from './../Hooks/Slider';

const Banner = () => {
  return (
    <div className="relative">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={55}
        totalSlides={3}
        infinite
        isPlaying
        interval={3000} // Adjust the interval as per your preference
        className="overflow-hidden rounded-lg shadow-lg"
      >
        <Slider className="h-[400px] md:h-[500px] lg:h-[600px]">
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
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center mb-4">
          {/* Add pagination dots here if needed */}
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Banner;
