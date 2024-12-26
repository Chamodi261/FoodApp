import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const QuoateSection = () => {
  return (
    <div className='section quote'>
        <p className='quote-text'><FontAwesomeIcon icon={faQuoteLeft}/>
            Food is everything we are. It is an extension of nationalist feeling, ethnic feeling. Your personal
            history, your provience, your region, yor tribe, your grandma. It's inseparable from those from the get go.
        </p>
        <p className='quote-author'>-Anthony Bourdan</p>
    
    </div>
  )
}

export default QuoateSection