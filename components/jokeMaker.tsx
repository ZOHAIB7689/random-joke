import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'

export default function Joke() {
  interface JokeResponse{
    setup : string,
    punchline:string;
  }


  const [joke, setJoke] = useState<string>("")
  
useEffect(()=>{
  fetchJoke()
},[])

async function fetchJoke(): Promise<void> {
  try{
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data : JokeResponse = await response.json();
    setJoke(`${data.setup} - ${data.punchline}`);
  
  } catch (error){
    console.error("error fetching joke :" , error);
    setJoke("Failed to fetch joke. please try again")
  }
}


  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#ffa500] to-[#ff6b6b]'>
      <div className='bg-white rounded-2xl shadow-lg p-8 w-full max-w-md'>
        <h1 className='text-3xl font-bold mb-4 text-[#333]'>😂 Random Joke</h1>
        <div className="p-6 bg-[#f5f5f5] rounded-lg mb-6 text-[#555] text-lg">
        {joke|| "Loading..."}
        
        </div>
        <Button
        onClick={fetchJoke}
        className='bg-[#4caf50] hover:bg-[#43a047] p-8  mb-6 text-white font-bold py-3  px-4 rounded-xl transition-colors duration-200'>
          😂Get New Joke 😂

        </Button>

      </div>

      
    </div>
  )
}
