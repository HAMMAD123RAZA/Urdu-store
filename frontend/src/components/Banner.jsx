import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto container md:px-20 px-5 flex md:flex-row flex-col'>
        <div className="left w-full md:w-1/2">
<h1 className='text-5xl'>hay welcome , lets learn something <span className='text-pink-500'>new daily</span> </h1>
<p className='py-12 ' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum soluta quod nam ab dolorum vitae incidunt explicabo, doloremque alias! Magnam, tenetur nemo. Delectus, reiciendis repellendus minima deserunt </p>
<div><input type="email" className='px-12 py-3 border border-gray-300 ' placeholder='enter email' />
</div>
<button className="btn my-4 py-5 px-8 bg-pink-500 text-white rounded-md hover:text-pink-600 hover:bg-white ">Login</button>
        </div>
        <div className="right  w-full md:w-1/2">
            <img src="https://plus.unsplash.com/premium_photo-1676422355165-d809008b8342?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
    </div>
                        
    </>
  )
}

export default Banner