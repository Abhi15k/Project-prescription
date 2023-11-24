import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../context/Auth'

const AdminPage = () => {
    const [auth, setAuth] = useAuth();
    return (
    
        <Layout>
            <div className="App">
                <main className="main-content">
                    <section className="hero-section">
                        <div className="hero-content">
                            <h1>Hello {auth?.user.name} ,</h1>
                            <h3>Welcome to Your Medical App</h3>
                            <p>Your one-stop solution for medical care</p>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    
    )
}

export default AdminPage