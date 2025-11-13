import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Createtask = () => {

    const [userData, setUserdata] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskAsignTo, setTaskAsignTo] = useState('')
    const [taskCategory, setTaskCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, taskCategory, active: false, new_task: true, completed: false, failed: false })

        const data = userData
       
        
        data.forEach((e)=>{
            if(taskAsignTo==e.firstname){
                e.tasks.push(newTask)
                e.taskCounts.new_task = e.taskCounts.new_task+1
            }
        })

        setUserdata(data)
         console.log(data)
       
        setTaskTitle('')
        setTaskDescription("")
        setTaskDate('')
        setTaskAsignTo('')
        setTaskCategory('')
    }

    return (
        <div className='p-5 bg-gray-800 mt-7 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between '>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2 font-semibold'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-gray-600 mb-4' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2 font-semibold'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-gray-600 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2 font-semibold'>Asign to</h3>
                        <input
                            value={taskAsignTo}
                            onChange={(e) => {
                                setTaskAsignTo(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-gray-600 mb-4' type="text" placeholder='employee' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2 font-semibold'>Category</h3>
                        <input
                            value={taskCategory}
                            onChange={(e) => {
                                setTaskCategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-gray-600' type="text" placeholder='design dev etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h1 className='text-sm text-gray-300 mb-0.5 font-semibold'>Description</h1>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                        className='w-full h-44 text-sm text-white font-stretch-50% py-2 px-3 rounded outline-none bg-gray-400' cols='30' rows='10'></textarea>
                    <button className='mt-5 outline-none border-none hover:bg-red-600 font-semibold bg-red-500 text-xl py-2 px-8 w-full rounded-full placeholder:text-white text-white'>Create Task</button>
                </div>


            </form>
        </div>
    );
};

export default Createtask;