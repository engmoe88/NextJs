import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Nav from '../../components/Nav/Nav'

export default function Cat() {
    const router = useRouter()
    const { id } = router.query
    const [cat, setCat] = useState(null)

    const fetchCat = async() => {
        const data = await fetch(`/api/cats/${id}`).then(res => res.json()).catch(e => {throw new Error(e)})
        setCat(data)
    }

    useEffect(() => {
        fetchCat()
    }, [])
  return (
    <div>
        <Nav />
        {cat && (
        <div className='container mt-5'>
            <img src={cat.image.url} alt={cat.image.alt} style={{width: '300px'}} />
            <div className='mx-5'>
                <h1>{cat.name}</h1>
                <p>{cat.description}</p>
            </div>
        </div>
    )}</div>
  )
}
