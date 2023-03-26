import React from 'react'
import './newsTitles.css'

export const NewsTitles = ({news}) => {
  return (
    <div className='news-title'>
        <h3>{news.head}</h3>
        
    </div>
  )
}