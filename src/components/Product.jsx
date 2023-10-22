import React from 'react';
import { BsEyeFill, BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  // Destructure properties from the product prop
  const { id, image, category, title, price } = product;

  console.log(product);

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img src={image} className='max-h-[200px] group-hover:scale-110 transition-all duration-300' alt="" />
          </div>
        </div>

        <div className='absolute top-0 right-0 bg-red-500/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link to={'/'} className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-lg"><BsEyeFill /></Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
