import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

    const [userData, setUserdata] = useContext(AuthContext)

   

    return (
        <div className='bg-gray-800 p-5 rounded mt-5'>
            <div className='bg-red-500 mb-2 py-2 px-4 flex justify-between rounded gap-2 it'>
                <h2 className='w-1/5 bg-red-700 py-1 px-2 rounded font-semibold'>Employee</h2>
                <h3 className='w-1/5 bg-red-700 py-1 px-2 rounded font-semibold'>New Task</h3>
                <h5 className='w-1/5 bg-red-700 py-1 px-2 rounded font-semibold'>Active Task</h5>
                <h5 className='w-1/5 bg-red-700 py-1 px-2 rounded font-semibold'>Completed</h5>
                <h5 className='w-1/5 bg-red-700 py-1 px-2 rounded font-semibold'>Failed</h5>
            </div>
            <div className='overflow-auto' >
                {userData.map((e, idx)=>{
                return <div key={idx} className='bg-red-500 mb-2 py-2 px-4 flex justify-between rounded gap-2'>
                <h2 className='w-1/5 bg-red-600 font-lg rounded py-1 px-2'>{e.firstname}</h2>
                <h3 className='w-1/5 bg-blue-400 font-lg rounded py-1 px-2'>{e.taskCounts.new_task}</h3>
                <h5 className='w-1/5 bg-amber-500 font-lg rounded py-1 px-2 '>{e.taskCounts.active}</h5>
                <h5 className='w-1/5 bg-green-500 font-lg rounded py-1 px-2'>{e.taskCounts.completed}</h5>
                <h5 className='w-1/5 bg-red-600 font-lg rounded py-1 px-2'>{e.taskCounts.failed}</h5>
            </div>
            })}
            </div>
        </div>
    );
};

export default AllTask;