import React from 'react'
import Button from '@mui/material/Button'
const Sidebar = ({ data, setSelectedCategory }) => {
  const cData = [...new Set(data.map((c) => c.category))]

  return (
    <>
      {cData &&
        cData.map((x) => (
          <div key={x} className='my-2'>
            <Button
              size='medium'
              variant='outlined'
              className='text-grey font-rubik rounded-none border border-grey hover:border-grey w-full'
              onClick={() => setSelectedCategory(x)}
            >
              {x}
            </Button>
          </div>
        ))}
    </>
  )
}

export default Sidebar
