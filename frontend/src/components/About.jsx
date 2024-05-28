import React from 'react'

const About = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 my-4' >
    <div className='  md:mx-4 md:px-5 tracking-wide leading-relaxed px-5 my-5 '>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere aut quibusdam laboriosam dolores sapiente magnam, excepturi minus eveniet ab itaque dicta, ea illum nihil aliquam? Voluptatem, vel blanditiis accusantium rerum dolorem odit?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ipsa saepe consequuntur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore aut corrupti sint perferendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum ad, ipsam earum provident quia autem nemo nam voluptatum mollitia voluptas!
</div>
<div  >
  <img src="book.avif" className='h-60 w-80 md:px-0 md:py-0 px-5 my-5'  alt="" />
</div>

    </div>

    <div className="grid grid-cols-1  md:grid-cols-4  px-10  py-5 ">
      <div className='py-5 px-16' >
      <img src="ceo.jpg" alt="" className="hover:scale-x-[-1] cursor-pointer rounded-full w-32 h-32" />
      <h3 className='font-bold font-serif -2xl px-4 py-4'>Jon Doe</h3>
      <p className=' font-serif  px-7 -2xl'>CEO</p>

      </div>

      <div className='py-5 px-16' >
      <img src="Hr.jfif" alt="" className="rounded-full w-32 h-32" />
      <h3 className='font-bold font-serif -2xl px-4 py-4'>Michael</h3>
      <p className=' font-serif  px-7 -2xl'>HR</p>
      
      </div>

      <div className='py-5 px-16' >
      <img src="ceo.jpg" alt="" className="rounded-full w-32 h-32" />
      <h3 className='font-bold font-serif -2xl px-4 py-4'>Jimmy</h3>
      <p className=' font-serif  px- -2xl'>Business Executive</p>
      </div>

      <div className='py-5 px-16' >
      <img src="ceo.jpg" alt="" className="rounded-full w-32 h-32" />
      <h3 className='font-bold font-serif -2xl px-5 py-4'>Steve</h3>
      <p className=' font-serif  px-3 -2xl'>Developer</p>
      </div>
    </div>

    </>
  )
}

export default About