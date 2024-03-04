import PropTypes from 'prop-types';

const Slides = ({title,img,heading}) => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-between items-center">
            <div className='pl-20'>
                 {
                    title &&  <h1 className='text-lg font-bold '>{title}</h1>
                 }

                 {
                    heading && <h1 className='font-bold text-xl'>{heading}</h1>
                 }
            </div>
           {
             img&&  <img className='w-[50%] ' src={img}  />
           }
        </div>
    );
};

Slides.propTypes={
    title:PropTypes.node,
    img:PropTypes.node,
    heading:PropTypes.node,

}


export default Slides;