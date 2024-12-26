import React from 'react'

const ImproveSkills = () => {
    const list = [
        "Learn new recipies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking steps",
        "Get ranked",
    ]
  return (
    <div className='section imporve-skill'>
      
      <div className='col img'>
        <img src="/img/gallery/img_10.jpg" alt="" />  
      </div>

      <div className='col typography'>
        <h1 className='title'>Improve Your Culinary Skills</h1>
        {list.map((item, index) => (
            <p className='skill-items' key={index}>{item}</p>
        ))}
        <button className='btn'>Signup Now</button>
      </div>

      
    </div>
  )
}

export default ImproveSkills