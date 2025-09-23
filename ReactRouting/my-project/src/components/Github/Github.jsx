import React from 'react'
import { useEffect } from 'react'
function Github() {
    const [data ,setData] = React.useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response=> response.json())
        .then(data=>{
            console.log(data);
            setData(data);
        })

    },[])
  return (
<div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github Followers:{data.followers}
    <img src={data.avtar_url} alt="Avatar" className='rounded-full w-24 h-24 mx-auto' />
      
    </div>
  )
}

export default Github
