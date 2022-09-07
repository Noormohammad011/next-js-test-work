import CardComponent from '../components/Card'
import { API_URL } from '../config'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
export default function Home({ data }) {
  const [selectedCategory, setSelectedCategory] = useState('Lawyers')
  const filtered = data.filter((x) => x.category === selectedCategory)
  return (
    <>
      <div className='font-rubik md:grid md:grid-cols-12 md:gap-[64px] mt-4 sm:mt-6 md:mt-6 mx-3 sm:mx-5 md:mx-6 md:mt-6 md:mx-10'>
        <div className='col-span-3 lg:col-span-2'>
          <Sidebar data={data} setSelectedCategory={setSelectedCategory} />
        </div>
        <div className='col-span-9 lg:col-span-10'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-4 gap-y-4'>
            {filtered.map((data) => (
              <div key={data.id}>
                <CardComponent data={data} />
              </div>
            ))}
          </div>
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
