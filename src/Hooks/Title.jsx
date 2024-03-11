
import PropTypes from 'prop-types';

const Title = ({heading}) => {
    return (
        <div className='w-40   mx-auto bg-slate-300 text-white rounded-t-lg'>
          <h1 className='text-center p-5 text-xl font-bold '>  {heading}</h1>
        </div>
    );
};

Title.propTypes = {
    heading:PropTypes.node,
};

export default Title;