import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="pages text-center">
                    <p>Conditions of Use Privacy Notice Your Ads Privacy Choices</p>
                </div>
                <div className="copyright text-center">
                    ©2023, Prescription.com
                </div>
                <p className="text-center mt-3">
                    <Link to="/dashbord/user/about">About</Link>|
                    <Link to="/dashbord/user/contact">Contact</Link>
                </p>
            </div>
        </>
    )
}

export default Footer