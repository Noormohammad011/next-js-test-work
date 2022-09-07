import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'


export default function CardComponent({ data }) {
  
  const [showMore, setShowMore] = React.useState(false)
  return (
    <>
      {data &&
        data?.map((x) => (
          <Card key={x.id}>
            <CardMedia
              component='img'
              height='146'
              image={x.imageUrl}
              alt='Paella dish'
            />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                  <img
                    className='w-10 h-10 rounded'
                    src={x.avatarImageUrl}
                    alt='Default avatar'
                  />
                </Avatar>
              }
              title={<h1>{x.name}</h1>}
              subheader={
                <div className='flex gap-x-4'>
                  <h1 className='text-center'>{x.category}</h1>
                  <h1 className='text-center'>{x.location}</h1>
                </div>
              }
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                {showMore ? `${x.about}` : `${x.about.substring(0, 50)}`}
                {x.about.substring(0, 50) && (
                  <button
                    className='text-blue-400'
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? 'Show less...' : 'Show more ...'}
                  </button>
                )}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </>
  )
}
