import React from 'react'
import { useRouter } from 'next/router'

export default function Jumbotron() {
    const router = useRouter()
  return (
    <div className="jumbotron jumbotron-fluid mt-5">
        <div className="container">
            <h1 className="display-4">Cats World</h1>
            <p className="lead">Find your best cat today!.</p>
            <button onClick={() => router.push('/cats')} type="button" className="btn btn-primary">Start looking</button>
        </div>
    </div>
  )
}
