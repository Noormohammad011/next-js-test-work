import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined'

export default function CardComponent({ data }) {
  const [showMore, setShowMore] = React.useState(false)
  const [text, setText] = React.useState('')

  // 113
  // base; 80
  // <80 = 80 characters show
  // >=80 = Show More button;
  // ShowMore click = 113 characters
  // ShowLess = 80 characters

  const renderText = (p) => {
    if (p.length >= 80 && !showMore) return p.substring(0, 80)
    if (p.length < 80 && !showMore) return p
    return p
  }

  return (
    <>
      <Card>
        <CardMedia
          component='img'
          height='146'
          image={data.imageUrl}
          alt='Paella dish'
        />
        <CardHeader
          avatar={
            <img
              className='w-8 h-8 rounded-full'
              src={data.avatarImageUrl}
              alt='Default avatar'
            />
          }
          title={
            <div className='text-sm text-[#212121] font-semibold font-rubik -ml-2'>
              {data.name}
            </div>
          }
          subheader={
            <div className='flex gap-x-1 text-xs font-rubik -ml-2'>
              <div className='text-pink'>{data.category}</div>
              <div>
                <PinDropOutlinedIcon style={{ fontSize: '14px' }} />
                <span className='text-grey'>{data.location}</span>
              </div>
            </div>
          }
        />
        <div className='flex gap-x-3 px-4 pb-2 text-xs'>
          <div>
            <span className='text-pink'>{data.reviews}+</span>{' '}
            <span className='text-grey'>Review</span>
          </div>
          <div>
            <span className='text-pink'>${data.chargePerHour}</span>
            <span className='text-grey'> Per Hour</span>
          </div>
        </div>
        <CardContent className='m-0 py-0'>
          <Typography variant='body2' className='font-rubik text-cBlack'>
            {renderText(data.about)}
            {data.about.length >= 80 && (
              <button
                className='text-pink pl-1'
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? 'See Less' : 'See More'}
              </button>
            )}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
