import React from 'react'
import Button from '@mui/material/Button'
const Sidebar = ({ data, setSelectedCategory }) => {
  const cData = [...new Set(data.map((c) => c.category))]

  return (
    <>
      {cData &&
        cData.map((x) => (
          <Button
            key={x}
            size='medium'
            variant='outlined'
            className='text-grey font-rubik rounded-none border border-[#D6D5D5] hover:border-[#D6D5D5] w-full my-2'
            onClick={() => setSelectedCategory(x)}
          >
            {x}
          </Button>
        ))}
    </>
  )
}

export default Sidebar
