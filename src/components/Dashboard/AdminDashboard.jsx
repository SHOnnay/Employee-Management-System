import React from 'react';
import Header from '../others/Header';
import Createetask from '../others/Createetask';
import AllTask from '../others/AllTask';

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full p-10'>
            <Header></Header>
            <Createetask></Createetask>
            <AllTask></AllTask>
        </div>
    );
};

export default AdminDashboard;