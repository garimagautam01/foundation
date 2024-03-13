import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className="w-40 h-40">
                    <img src="src/images/logo.png" alt="logo" />
                </div>
                <div className='mt-4 rounded-lg bg-black w-9 h-9'>
                </div>
            </div>
        </div>
    )
}

export default Navbar