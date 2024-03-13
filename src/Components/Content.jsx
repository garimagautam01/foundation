import React from 'react'
import Footer from './Footer'
import '../Styles/content.css'

const Content = () => {
  return (
    <>
      <div>
        <div className='flex justify-between mx-20 '>
          <h2 className='font-bold'>Dashboard</h2>
          <h4>General / Dashboard</h4>
        </div>
        <div>
          <div>
            <img src="src/images/front1.png" alt="" />
          </div>
          <div className='flex justify-between'>
            <div className='ml-40 mt-40'>
              <div className=''>
                <h3 className='font-bold text-red-600'>Goal Achieved</h3>
                <h4 className='font-bold'>0</h4>
              </div>
              <div>
                <h3 className='font-bold text-red-600'>Total Goal</h3>
                <h3 className='font-bold'>₹3000</h3>
              </div>
            </div>
            <div className='mt-20 mb-6'>
              <div>
                <h3 className='font-bold text-red-600'>Level Achieved : <span className='text-black'>Star</span></h3>
                <div className='w-64 h-1 bg-slate-300 rounded-xl'></div>
              </div>
              <div className='mt-10 flex justify-between'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Rewards</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Copy Link</button>
              </div>
              <h5 className='mt-4'>Unlock <span className='font-bold'>Ninja Level</span> at 5000</h5>
              <div className='mt-8'>
                <h3 className='font-bold text-red-600 mt-4'>Time Left: <span className='text-black'>29 Days Left</span></h3>
                <div className='w-64 h-1 bg-slate-300 rounded-xl mt-8'></div>
                <h3 className='text-red-600 font-bold mt-6'>Reference Code: <span className='text-black'>gari9024</span></h3>
              </div>
              <button className=" mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Here</button>
            </div>
          </div><hr />
          <div>
          <button className="mt-4 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Share On WhatsApp</button>
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Content 
