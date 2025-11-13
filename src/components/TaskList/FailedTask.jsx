import React from 'react';

const FailedTask = ({data}) => {
    return (
        <div>
            <div className='shrink-0 h-full w-[300px] bg-amber-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}
                    </h3>
                    <h4 className='text-sm'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-xl'>{data.title}</h2>
                <p className='text-sm mt-2'>{data.description}</p>
                <div className='mt-4'>
                    <button className='bg-green-50  rounded-2xl py-1 px-2 text-sm'>Failed Task</button>
                </div>
            </div>
        </div>
    );
};

export default FailedTask;