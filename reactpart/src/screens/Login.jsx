import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Navbarreal from "../components/Navbar"
import Footer from "../components/Footer"
function Login() {
    let navigate = useNavigate();
    const [cred, setcred] = useState({ email: '', password: '' });
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const da = JSON.stringify({ email: cred.email, password: cred.password })
        const response = await fetch(`${window.location.origin}/api/loginuser`, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: da
        });

        const json = await response.json();
        console.log(json)
        if (!json.success)
            alert('Enter valid credentials.');
        else {
            localStorage.setItem("authToken", json.authToken);
            localStorage.setItem("userEmail", cred.email);
            console.log(localStorage.getItem("authToken"))
            navigate('/');
        }
    }

    function onchange(ev) {
        setcred({ ...cred, [ev.target.name]: ev.target.value })
    }

    return (
        <div>
            <div>
                <Navbarreal />
            </div>            
            <div className="container mt-5" style={{marginBottom: "100px"}}>
                            <form onSubmit={HandleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={onchange} type="email" name="email" value={cred.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={onchange} type="password" className="form-control" id="exampleInputPassword1" name="password" value={cred.password} />
                    </div>

                    <button type="submit" className="btn m-3 btn-primary">Submit</button>
                    <Link className="m-3 btn btn-danger" to="/createuser">New to GoFood?</Link>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login