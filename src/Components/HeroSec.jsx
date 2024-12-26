import React from 'react'
import CustomImage from './CustomImage'

const HeroSec = () => {
  const images =[
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg",


  ]
  return (
    <div className='section hero'>
      <div className='col typography'>
        <h1 className='title'>What Are We About</h1>
        <p className='info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus illo dignissimos quidem nihil amet qui, quod distinctio maxime quo vero nulla hic non odit consectetur repudiandae laudantium quas inventore dolor.</p>
        <button className='btn'>Explore Now</button>
      </div>

      <div className='col gallery'>
        { images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt="95%"/>
        ))}
        
      </div>
    </div>
  )
}

export default HeroSec