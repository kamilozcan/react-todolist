import React from 'react'

export const Form = () => {
  return (
    <form action="">
        <input type="text" placeholder='Enter a ToDo ...' className='task-input' />
        <button className='button-add' type='submit'>Add</button>
    </form>
  )
}
