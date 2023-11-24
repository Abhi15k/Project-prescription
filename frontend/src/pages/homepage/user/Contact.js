import React from 'react'
import Layout from '../../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import { IoLocation } from "react-icons/io5";

const Contact = () => {
    return (
        <Layout>
            <div className="d-flex ">
                <div class="d-flex flex-column mb-3">
                    <div class="p-4"><IoLocation />:5rd Floor, Shalimar Complex, next to Mak Mall, Kankanady, Mangaluru, Karnataka 575002</div>
                    <div class="p-4"><IoLocation />:5rd Floor, Shalimar Complex, next to Mak Mall, Kankanady, Mangaluru, Karnataka 575002</div>
                    <div class="p-4"><IoLocation />:5rd Floor, Shalimar Complex, next to Mak Mall, Kankanady, Mangaluru, Karnataka 575002</div>
                </div>

                <div className="p-9 "><Link to="https://maps.app.goo.gl/VAHxJacsdYeFXWnm8"><img src="/images/map.png" className="img-fluid image" alt="Map" width={"600px"} /></Link></div>
            </div>
        </Layout>
    )
}

export default Contact