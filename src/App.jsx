import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [isFull, setIsFull] = useState(false)

  const [isHidded, setIsHidded] = useState(false)
  const text = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  return (
    <>
    <button onClick={()=>setIsHidded(!isHidded)} className='absolute bg-transparent border border-white py-[1px] px-[8px] active:border-none'>{ isHidded?'show':'Hide' }</button>

      <div className='flex h-screen w-screen'>
        <div className= {`py-12 ${isFull? "w-[80px]": "w-2/12"} ${isHidded?'hidden':'block'}`}>
          <button onClick={()=>setIsFull(!isFull)} className=' bg-transparent border border-white py-[1px] px-[8px] active:border-none'> {isFull?'max':'min'} </button>

    {/* <button onClick={()=>setIsHidded(!isHidded)} className='ml- bg-transparent border border-white py-[1px] px-[8px] active:border-none'>{ isHidded?'show':'Hide' }</button> */}
    
          <button onClick={()=>setIsFull(!isFull)} className=' my-2 text-black border w-full text-left bg-red-200 py-[1px] px-[8px] active:border-none'>+ {isFull?'': 'hello'}</button>
          <button onClick={()=>setIsFull(!isFull)} className=' my-2 text-black border w-full text-left bg-red-200 py-[1px] px-[8px] active:border-none'>+ {isFull?'': 'hello'}</button>
          <button onClick={()=>setIsFull(!isFull)} className=' my-2 text-black border w-full text-left bg-red-200 py-[1px] px-[8px] active:border-none'>+ {isFull?'': 'hello'}</button>
          <button onClick={()=>setIsFull(!isFull)} className=' my-2 text-black border w-full text-left bg-red-200 py-[1px] px-[8px] active:border-none'>+ {isFull?'': 'hello'}</button>
          
          <div className='bg-black h-12 fixed bottom-0'>
            
          </div>
        </div>
        
        <div className={` bg-black w-full pl-4 text-white overflow-y-scroll ${isFull?'grid grid-cols-7 gap-2':'grid grid-cols-5 gap-2'} ${isHidded?'grid grid-cols-8 gap-2':'grid grid-cols-5 gap-2'}`}>
          {
            text.map(t=><div className='h-[200px] w-[150px] bg-orange-600 text-center py-auto'>
            hello
          </div>)
          }
        </div>
      </div>
    </>
  )
}

export default App
