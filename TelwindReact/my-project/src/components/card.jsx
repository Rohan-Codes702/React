import React from 'react'

function Card(props) {
  return (
    <div className='gap-7'>
    <div className='mt-30 gap-7 '>
      <div className='w-3xs gap-2.5 h-full border rounded-xl  bg-black '>
     <center> <img src="/image/logo.png" alt="" className='rounded-t-xl' /></center>
      <br />
      <div className='font-bold text-white ml-5'> Title:{props.username}</div>
      <br />
      <div className='text-white p-2'><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quam vero voluptates, placeat odit itaque illum repudiandae sit eius id consectetur quaerat numquam quod quibusdam excepturi architecto corporis voluptas eveniet!</p></div>
      </div>
    </div>
    </div>
  )
}

export default Card
