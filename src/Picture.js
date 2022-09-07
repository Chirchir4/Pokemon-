import React from 'react'

export default function Picture({data}) {
 
 console.log(data)
 
 
 const mapSprites= data.map((item)=>{
return(

  <div className="card">
    <div className="name">
{item.name}
      
  
    </div>

  <img className='img' src={item.sprites.other.home.front_default} alt='' />   

  </div>
)
 })

  return (
    <div className="picture">   

{
  mapSprites
}

    </div>
  )
}
