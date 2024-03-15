import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between h-20'>
                <div className="w-40 h-40">
                    <img src="src/images/logo.png" alt="logo" />
                </div>
                <div className='flex justify-between'>
                    <div className='mt-4 rounded-lg bg-black w-10 h-10'>
                    </div>
                    <div className='mt-3'>
                    <h6 className='font-bold ml-2' >Garima Gautam</h6>
                    <h6 className='text-sm ml-2 '>fundraiser</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar