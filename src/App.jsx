import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import "tailwindcss";

const App = () => {
  const users =[
    {  
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D'
      ,intro:"Curious engineer, steady learner, values discipline, builds solutions patiently, respecting tradition while embracing tomorrow’s evolving technologies"
      ,tag:'Satiesfied',
      color:'BlueViolet'
      },
    {  
      img:'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D'
      ,intro:'Creative thinker with calm focus, strong ethics, sharp humor, always learning, adapting, and delivering reliable results.'
      ,tag:'Underserved',
      color:'royalblue'
      },
    {  
      img:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D'
      ,intro:'Dedicated professional, punctual and organized, blends classic work values with modern skills to grow consistently.'
      ,tag:'Underbanked',
      color:'orange'
      },
      {  
      img:'https://images.unsplash.com/photo-1635766854898-ad3766e5f5e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D'
      ,intro:'Focused professional with curious mind, steady habits, respectful manners, and a forward-looking approach to lifelong learning.'
      ,tag:'Inspired',
      color:'DarkCyan'
      }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
