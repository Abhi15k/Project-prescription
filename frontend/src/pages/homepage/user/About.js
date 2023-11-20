import React from 'react'
import Layout from '../../../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';


const About = () => {
    return (
        <Layout title={"About us -Ecommerce App"}>
            <div className="row contactus">
                <div className="col-md-6 pic">
                    <img src="/images/AboutUs.jpg" alt="contact us" />
                </div>
                <div className="col-md-4 para">
                    <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
                    <p className="text-justify mt-3">Any quarry about product feel free to call anytime. we are 24X7 available</p>
                    <p className="mt-3">
                        <BiMailSend />:www.help@emcomerceapp.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall />:0123456789
                    </p>
                    <p className="mt-3">
                        <BiSupport />:1800-0000-0000 (Toll free)
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default About