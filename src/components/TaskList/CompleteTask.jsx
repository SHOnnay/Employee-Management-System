import React from 'react';

const CompleteTask = () => {
    return (
        <div>
            <div className='shrink-0 h-full w-[300px] bg-purple-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High
                    </h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-xl'>Make a yutube video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nihil nobis quos molestiae enim!</p>
                <div className='mt-2'>
                    <button className='w-full'>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default CompleteTask;