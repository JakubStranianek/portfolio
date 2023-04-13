import React from 'react'

function MainGrid() {
  return (
    <div className='bg-gray-950 h-screen p-8 font-inter'>
        <div className='h-full grid grid-cols-12 grid-row-[8] gap-2'>
            <div className='col-span-6 row-span-3 bg-myGrey rounded-lg relative overflow-hidden'>
                <div className='p-6 absolute'>
                    <h2 className='text-white text-[82px] leading-[1.2] tracking-normal font-bold'>Bringing Your Ideas To Life Through Web or App</h2>    
                </div>

                <div className='absolute bottom-8 right-8 w-1/5 h-14 bg-purple-500 text-white rounded-full flex items-center justify-center'>
                    <p className='font-semibold text-xl'>Hire me 👋</p>
                </div>
            </div>            
            <div className='col-span-6 row-span-1 bg-myGrey rounded-lg'>2</div>            
            <div className='col-span-3 row-span-4 col-start-7 row-start-2 bg-myGrey rounded-lg'>2</div>            
            <div className='col-span-3 row-span-1 col-start-10 row-start-2 bg-myGrey rounded-lg'>2</div>            
            <div className='col-span-3 row-span-2 col-start-10 row-start-3 bg-myGrey rounded-lg'>2</div>            
            <div className='col-span-3 row-span-1 col-start-10 row-start-5 bg-myGrey rounded-lg'>2</div>            
            <div className='col-span-2 row-span-2 col-start-1 row-start-4 bg-myGrey rounded-lg'>2</div>            
            <div className='col-span-2 row-span-2 col-start-3 row-start-4 bg-myGrey rounded-lg'>2</div>            
            <div className='col-span-2 row-span-2 col-start-5 row-start-4 bg-myGrey rounded-lg'>2</div>            
            <div className='col-span-7 row-span-3 col-start-1 row-start-6 bg-myGrey rounded-lg'>2</div>            
            <div className='col-span-5 row-span-3 col-start-8 row-start-6 bg-myGrey rounded-lg'>2</div>            
        </div>
    </div>
  )
}

export default MainGrid