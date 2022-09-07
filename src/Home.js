
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from './Header'
import Picture from './Picture'

export default function Home(){
    const[data,setData]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect (()=>{
      fetch("https://pokeapi.co/api/v2/pokemon/")
           .then((response)=>{
             if(response.ok){
               console.log(response)
               return response.json()
             }
           })
           .then((allpokemon)=>{
                allpokemon.results.map((item)=>{              
               console.log(item.url)
                  fetch(item.url)
                  .then(async (response)=>{
                    const jsn = await response.json()
                    const currData= data
                    currData.push(jsn)
                    setData([...currData])
                  })
                })
           })
           .catch((err)=>{
             console.log(err.message)
           })
           .finally(()=>{
            setLoading(false)
           })
       },[])
       console.log("dataaaaaa",data)

       if(loading){
        (
          <p>Your data is loading</p>
        )
       }
  
  return (
    <div  className='home'>
      <Header/>
    <Picture data={data} />
</div>


  )
}
