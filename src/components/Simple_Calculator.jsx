import React from 'react'

function Simple_Calculator({ principle, rate, time, calculateInterest, interest, setPrinciple, setRate, setTime, reset, setreset, Resetbtn })
{
  return (
    <div className='h-[96%] w-auto px-4 pt-2 border-4 border-white rounded-2xl overflow-hidden flex flex-col justify-center space-y-4 items-center bg-orange-600 text-white'>
        <div className='h-[14%] w-[100%] flex flex-col justify-center items-center bg-yellow-800'>
            <h1 className='font-mono text-2xl'>Simple Calculator</h1>
            <p className='text-2xl'>Calculate your simple interest Easily</p>
        </div>
        <div className='h-[20%] w-[100%] flex flex-col justify-center items-center bg-yellow-600'>
            <h1 className='text-3xl font-mono'>Rs</h1>
            <p className='text-2xl font-mono'>Total Simple Interest : {interest}</p>
        </div>
        <div className='h-[14%] w-full'>
            <input type="number" className='px-2 border-4 border-green-500 bg-white outline-none w-[100%] h-[58%] rounded-[15px] text-black font-bold font-mono text-2xl text-center' placeholder='R Principle amount' value={principle} onChange={(e)=>{setPrinciple(e.target.value)}} />
        </div>
        <div className='h-[14%] w-full'>
            <input type="number" className='px-2 outline-none border-4 border-green-500 bg-white  w-[100%] h-[58%] rounded-[15px] text-black font-bold font-mono text-2xl text-center' placeholder='Rate of interest (p.a)%' value={rate} onChange={(e)=>{setRate(e.target.value)}} />
        </div>
        <div className='h-[14%] w-full'>
            <input type="number" className='px-2 border-4 border-green-500 bg-white outline-none w-[100%] h-[58%] rounded-[15px] text-black font-bold font-mono text-2xl text-center' placeholder='Time Period(yr)' value={time} onChange={(e)=>{setTime(e.target.value)}} />
        </div>
        <div className='h-[14%] w-full flex items-center justify-around'>
            <button className='cursor-pointer w-[150px] border-4 border-violet-300 rounded-2xl text-2xl font-mono bg-blue-600 h-[50%] mr-[5%]' onClick={calculateInterest}>Calculate</button>
            <button className='cursor-pointer w-[150px] border-4 border-violet-300 rounded-2xl text-2xl font-mono bg-blue-600 h-[50%]' onClick={Resetbtn}>Reset</button>
        </div>
    </div>
  )
}

export default Simple_Calculator