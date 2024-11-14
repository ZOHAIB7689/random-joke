"use client"
import { useState , ChangeEvent } from 'react'
import React from 'react'
import { Card , CardHeader ,CardTitle , CardContent } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'


export default function Calculator() {
 
  const [num1 , setNum1] = useState<string>("")
  const [num2 ,setNum2] = useState <string>("")
  const [result, setResult] = useState<string>("")
 
 const handleNum1Change = (e:ChangeEvent<HTMLInputElement>):void =>{
  setNum1(e.target.value)
 };
 const handleNum2Change = (e:ChangeEvent<HTMLInputElement>):void =>{
  setNum2(e.target.value)
 };

 const add = ():void =>{
  setResult((parseFloat(num1) + parseFloat(num2)).toString())
 }

 const subtract =():void =>{
  setResult((parseFloat(num1) - parseFloat(num2)).toString())
 }

 const multiply =():void =>{
  setResult((parseFloat(num1) * parseFloat(num2)).toString())
 }

 const divide = ():void =>{
  if (parseFloat(num2) !==0  ){
setResult((parseFloat(num1)/ parseFloat(num2)).toString())
  } else{
    setResult("Error : Division by zero")
  }
 }
 
 const clear =():void =>{
  setNum1("");
  setNum2("");
  setResult("");
 }
 
    return (
    <div className='flex flex-col items-center border-2 border-gray-500 justify-center h-screen bg-stone-100 dark:bg-slate-900'>
      <Card className='w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>
            Simple Calculator

          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col space-y-2'>
              <Label htmlFor='num1'>Number 1</Label>
              <Input
              id='num1'
              type='number'
              value={num1}
              onChange={handleNum1Change}
              placeholder='Enter a number'
              className=' hover:shadow-lg hover:border-2 hover:border-sky-700 hover:shadow-sky-400/50'
              />
            </div>


            <div className='flex flex-col space-y-2'>
              <Label htmlFor='num2'>Number 2</Label>
              <Input
              id='num2'
              type='number'
              value={num2}
              onChange={handleNum2Change}
              placeholder='Enter a number'
              className='   hover:shadow-lg hover:border-2 hover:border-sky-700 hover:shadow-sky-400/50'
              />

            </div>
          </div>
         <div className='flex justify-around'> <Button
         variant={'outline'}
         className='text-2xl hover:border-2 font-bold hover:shadow-lg hover:border-green-700 hover:shadow-lime-400/50 text-gray-700 dark:text-gray-300'
         onClick={add}
          >
            +
          </Button>
          
          <Button
         variant={'outline'}
         className='text-2xl  hover:border-2  hover:shadow-lg hover:border-green-700 hover:shadow-lime-400/50 font-bold text-gray-700 dark:text-gray-300'
         onClick={subtract}
          >
            -
          </Button>
          
          <Button
         variant={'outline'}
         className='text-2xl font-bold hover:border-2 text-gray-700 dark:text-gray-300    hover:shadow-lg hover:border-green-700 hover:shadow-lime-400/50'
         onClick={multiply}
          >
            x
          </Button>
          
          <Button
         variant={'outline'}
         className='text-2xl font-bold  hover:border-2  hover:shadow-lg hover:border-green-700 hover:shadow-lime-400/50 text-gray-700 dark:text-gray-300'
         onClick={divide}
          >
            /
          </Button></div>
          <div className='flex flex-col space-y-2'>
            <Label htmlFor='result'>Result</Label>
            <Input
            id="result"
            type='text'
            value={result}
            placeholder='Result'
            className=''
            readOnly
            />
            <Button variant='outline' className='w-full hover:bg-orange-200 hover:font-semibold hover:border-2 hover:border-red-500' onClick={clear}>Clear</Button>
          </div>

        </CardContent>

      </Card>
      
    </div>
  )
}
