import React from 'react';

const Header = (props) => {
    const username = props?.data?.firstname || 'Admin';

    const logOutuser = () => {
        localStorage.setItem('loggedInUser', '');
        props.changeUser('');
        // window.location.reload();
    };

    return (
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-medium'>
                Hello
                <br />
                <span className='text-3xl font-semibold'>
                    {username}
                </span>
            </h1>
            <button
                onClick={logOutuser}
                className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>
                Log out
            </button>
        </div>
    );
};

export default Header;