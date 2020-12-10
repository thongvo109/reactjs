import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Register = (props) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        error: null,
    });

    const { name, email, password, error } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setData({ ...data, error: null });
            await axios.post(
                '/auth/register',
                { name, email, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
            props.history.push('/login');
        } catch (err) {
            setData({ ...data, error: err.response.data.error });
        }
    };

    return (
        <div className="container sm">
            <div className="form mt-5 ">
                <h4 className="text muted text-center mb-5">
                    Create an account
                </h4>
                <div className="card p-5 shadow">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </div>
                        {error ? <p className="text-danger">{error}</p> : null}
                        <div className="text-center">
                            <button
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                Register
                            </button>
                        </div>
                        <p className="mt-3 text-center">
                            Already a user? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Register;
