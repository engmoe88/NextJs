import React, { useState, useEffect } from 'react'
import Card from '../../components/Card/Card'
import Nav from '../../components/Nav/Nav'

export default function Index() {
  const [cats, setCats] = useState([])

  const fetchCats = async() => {
    const response = await fetch('/api/cats')
    const data = await response.json()
    console.log(data)
    setCats(data)
  }

  useEffect(() => {
    fetchCats()
  }, [])

  return (
    <>
      <Nav />
      <div className='container mt-5'>
        <div style={{display: 'flex', flexWrap:'wrap' }}>
          {
            cats && cats.map(cat => (
              <Card 
                name={cat.name}
                image = {cat.image}
                phone={cat.phone}
                email={cat.email}
                id={cat.id} 
                key={cat.id} 
              />
            ))
          }
        </div>
      </div>
    </>
  )
}