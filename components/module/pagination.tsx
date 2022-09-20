import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Props {
  totalPage: number;
  currPage: number;
  pageJump: (val: number) => void;
  pageFoward: () => void;
  pageBackward: () => void;
}

const pagination = ({
  totalPage,
  currPage,
  pageJump,
  pageFoward,
  pageBackward,
}: Props) => {
  return (
    <div className='w-[100%] flex gap-4 justify-center items-center mt-5'>
      {currPage !== 0 && (
        <div className='cursor-pointer' onClick={() => pageBackward()}>
          <IoIosArrowBack size='30px' color='#002245' />
        </div>
      )}

      <div className='flex gap-5'>
        {Array.from({ length: totalPage }, (x, i) => (
          <div
            className={`p-2 w-10 h-10 flex items-center justify-center cursor-pointer ${
              currPage === i ? 'bg-[#002245] text-white rounded-full' : ''
            }`}
            key={i}
            onClick={() => pageJump(i)}
          >
            <span>{i + 1}</span>
          </div>
        ))}
      </div>

      {currPage + 1 !== Math.trunc(totalPage) && (
        <div className='cursor-pointer' onClick={() => pageFoward()}>
          <IoIosArrowForward size='30px' color='#002245' />
        </div>
      )}
    </div>
  );
};

export default pagination;
