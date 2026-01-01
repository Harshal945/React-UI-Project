import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 flex shrink-0 rounded-4xl overflow-hidden relative'>
      <img className='h-full w-full object-cover brightness-75' src={props.img} ></img>
     <RightCardContent id={props.id} color={props.color} intro={props.intro} tag={props.tag}/>
    </div>
  )
}

export default RightCard
