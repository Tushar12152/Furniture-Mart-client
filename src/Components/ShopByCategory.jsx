
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../src/CSS/style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const ShopByCategory = () => {

    const products=[
        {
            id:1,
            name:'Table',
            img:'https://i.ibb.co/s1ycDT7/35-450x572.jpg',
            Quantity:75,
        },
        {
            id:2,
            name:'Chair',
            img:'https://i.ibb.co/G0MkrYm/13-2-450x572.jpg',
            Quantity:5,
        },
        {
            id:3,
            name:'bed',
            img:'https://i.ibb.co/s1ycDT7/35-450x572.jpg',
            Quantity:79,
        },
        {
            id:4,
            name:'sofa',
            img:'https://i.ibb.co/G0MkrYm/13-2-450x572.jpg',
            Quantity:10,
        },
        {
            id:5,
            name:'Table',
            img:'https://i.ibb.co/s1ycDT7/35-450x572.jpg',
            Quantity:46,
        },
        {
            id:6,
            name:'Table',
            img:'https://i.ibb.co/G0MkrYm/13-2-450x572.jpg',
            Quantity:19,
        },
        {
            id:7,
            name:'Table',
            img:'https://i.ibb.co/s1ycDT7/35-450x572.jpg',
            Quantity:12,
        },
        {
            id:8,
            name:'Table',
            img:'https://i.ibb.co/s1ycDT7/35-450x572.jpg',
            Quantity:75,
        },
        {
            id:9,
            name:'Chair',
            img:'https://i.ibb.co/G0MkrYm/13-2-450x572.jpg',
            Quantity:5,
        },
        {
            id:10,
            name:'bed',
            img:'https://i.ibb.co/s1ycDT7/35-450x572.jpg',
            Quantity:79,
        },
        {
            id:11,
            name:'sofa',
            img:'https://i.ibb.co/G0MkrYm/13-2-450x572.jpg',
            Quantity:10,
        },
        {
            id:12,
            name:'Table',
            img:'https://i.ibb.co/s1ycDT7/35-450x572.jpg',
            Quantity:46,
        },
        {
            id:13,
            name:'Table',
            img:'https://i.ibb.co/G0MkrYm/13-2-450x572.jpg',
            Quantity:19,
        },
        {
            id:14,
            name:'Table',
            img:'https://i.ibb.co/s1ycDT7/35-450x572.jpg',
            Quantity:12,
        },
    ]

    return (
        <div>
            <h1 className='font-bold text-xl my-16'>S H O P    BY    P R O D U C T</h1>
             <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         
       {products.map(item=><div key={item.id}>
        <SwiperSlide>
             <Link to={`product/${item?.id}`}>
             <div className='shadow-lg rounded-xl p-5 shadow-black'>
                  <img className='w-8 rounded-2xl p-5' src={item?.img} />
                  <h1 className='font-bold'>{item?.name}</h1>
                <p>Available : {item?.Quantity}</p>
              </div>
             </Link>
        </SwiperSlide>
       </div>)}

        
       
      </Swiper>
        </div>
    );
};

export default ShopByCategory;