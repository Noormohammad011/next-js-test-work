import CardComponent from '../components/Card'
import { API_URL } from '../config'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
export default function Home({ data }) {
  const [selectedCategory, setSelectedCategory] = useState('Lawyers')
  const filtered = data.filter(x => x.category === selectedCategory)
  return (
    <>
      <div className='container flex'>
        <div className='mx-4 sm:mx-4'>
          <Sidebar data={data} setSelectedCategory={setSelectedCategory} />
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6 ml-16 sm:ml-4'>
          <CardComponent data={filtered} />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api`)
  const data = await res.json()
  return { props: { data } }
}
