import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Spinner = ({ path = "/" }) => {
    const [count, setCount] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        const inetrval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000)
        count === 0 && navigate(`/${path}`)
        return () => clearInterval(inetrval); //to clean up
    }, [count, navigate, path])
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
                <h1 className="Text-center">Redirecting you in {count} seconds</h1>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        </>
    )
}

export default Spinner