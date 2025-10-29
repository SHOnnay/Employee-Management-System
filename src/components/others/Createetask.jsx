import React from 'react';

const Createetask = () => {
    return (
        <div className='p-5 bg-gray-800 mt-7 rounded'>
            <form className='flex flex-wrap w-full items-start justify-between '>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2'>Task Title</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-gray-600 mb-4' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2'>Date</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-gray-600 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2'>Asign to</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-gray-600 mb-4' type="text" placeholder='employee' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2'>Category</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-gray-600' type="text" placeholder='design dev etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h1 className='text-sm text-gray-300 mb-0.5'>Description</h1>
                    <textarea className='w-full h-44 text-sm py-2 rounded-2xl outline-none bg-gray-400' cols='30' rows='10'></textarea>
                    <button className='mt-5 outline-none border-none hover:bg-red-600 font-semibold bg-red-500 text-gray-900 text-xl py-2 px-8 w-full rounded-full placeholder:text-white'>Create Task</button>
                </div>


            </form>
        </div>
    );
};

export default Createetask;