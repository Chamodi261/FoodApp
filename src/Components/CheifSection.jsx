import React from 'react'
import CheifCall from './CheifCall'

const CheifSection = () => {
    const chiefs = [
        {
            name: "Juan Carlos",
            img: "/img/top-chefis/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "Jhon Doe",
            img: "/img/top-chefis/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "/img/top-chefis/img_3.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "/img/top-chefis/img_4.jpg",
            recipesCount: "08",
            cuisine: "American",
        },
        {
            name: "Blake Lively",
            img: "/img/top-chefis/img_5.jpg",
            recipesCount: "09",
            cuisine: "French",
        },
        {
            name: "Ben Affleck",
            img: "/img/top-chefis/img_6.jpg",
            recipesCount: "04",
            cuisine: "Indian",
        },
    ]
  return (
    <div className='section cheifs'>
        <h1 className='title'>Out Top Cheifs
        </h1>
        <div className='top-cheif-container'>
            {chiefs.map(chief => <CheifCall key={chief.name} chief={chief} />)}
        </div>

    </div>
  )
}

export default CheifSection