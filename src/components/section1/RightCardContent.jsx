import React from 'react'

const RightCardContent = (props) => {
    console.log(props.id)
  return (
    
     <div className='absolute top-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-xl leading-relaxed text-white pb-14'>{props.intro}</p>
            <div className='flex justify-between' >
                <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2
                rounded-full text-lg'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' ext-white font-semibold px-4 py-2
                rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
