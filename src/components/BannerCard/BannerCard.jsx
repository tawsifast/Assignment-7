import React from 'react';

const BannerCard = ({num, word}) => {
    return (
        <div>
            <div className='bg-base-200 p-8 text-center rounded-md flex flex-col items-center justify-center shadow-md'>
                    <h2 className='text-2xl font-bold text-[#244D3F]'>{num}</h2>
                    <p className='text-gray-600'>{word}</p>
                </div>
        </div>
    );
};

export default BannerCard;