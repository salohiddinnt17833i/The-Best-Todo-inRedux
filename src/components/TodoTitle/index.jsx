import React from 'react'

function TodoTitle(props) {
  const {title, count} = props
  return (
    <div className='mb-4'>
        <h3 className='text-white text-lg'>{title} - {count}</h3>
    </div>
  )
}

export default TodoTitle