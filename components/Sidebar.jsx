import React from 'react'
import Button from '@mui/material/Button'
const Sidebar = ({data, setSelectedCategory}) => {
  return (
    <>
      {data && data.map((x) => (
        <Button
          size='medium'
          variant='outlined'
          className='text-neutral-300 rounded-none border-gray-300 w-full my-2'
          onClick={() => setSelectedCategory(x.category)}
        >
          {x.category}
        </Button>
      ))}
    </>
  )
}

export default Sidebar