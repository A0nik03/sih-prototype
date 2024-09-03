import React, { useContext, useState } from 'react';
import './LoginPage.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const { setToken, url, loadCartData } = useContext(StoreContext);
    const [currState, setCurrState] = useState("Sign Up");
    const [role, setRole] = useState("customer");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        address: "",
        crops: "",
        location: "",
        profilePicture: null
    });

    const onChangeHandler = (event) => {
        const { name, value, type, files } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const onRoleChange = (event) => {
        const selectedRole = event.target.value;
        setRole(selectedRole);
        if (selectedRole === "customer") {
            setData(prevData => ({
                ...prevData,
                address: "",
                crops: "",
                location: "",
                profilePicture: null
            }));
        }
    };

    const getLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                setData(prevData => ({ ...prevData, location: `${latitude}, ${longitude}` }));

                try {
                    const response = await axios.post(`${url}/api/geocode`, {
                        latitude,
                        longitude
                    });
                    if (response.data.success) {
                        setData(prevData => ({ ...prevData, address: response.data.address }));
                    } else {
                        toast.error("Could not get address. Please try again.");
                    }
                } catch (error) {
                    toast.error("An error occurred while fetching the address.");
                }
            }, (error) => {
                toast.error("Unable to retrieve location. Please check your permissions.");
            });
        } else {
            toast.error('Geolocation is not supported by this browser.');
        }
    };

    const onLogin = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        formData.append('role', role); // Add role to FormData
        
        const endpoint = currState === "Login" ? `${url}/api/user/login` : `${url}/api/user/register`;
    
        try {
            const response = await axios.post(endpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                loadCartData({ token: response.data.token });
                window.location.href = '/';
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
            toast.error("An error occurred. Please try again.");
        }
    };
    
    
    
    

    return (
        <div className='login-page'>
            <div className='login-page-header'>
                <img onClick={() => window.location.href = '/'} src={assets.cross_icon} alt="Back" />
                <h1>{currState}</h1>
                <div style={{ width: '24px' }}></div>
            </div>
            <form onSubmit={onLogin} className="login-page-form">
                <div className="login-page-inputs">
                    {currState === "Sign Up" && (
                        <>
                            <input
                                name='name'
                                onChange={onChangeHandler}
                                value={data.name}
                                type="text"
                                placeholder='Your name'
                                required
                            />
                            <input
                                name='email'
                                onChange={onChangeHandler}
                                value={data.email}
                                type="email"
                                placeholder='Your email'
                                required
                            />
                            <input
                                name='password'
                                onChange={onChangeHandler}
                                value={data.password}
                                type="password"
                                placeholder='Password'
                                required
                            />
                            <input
                                name='mobile'
                                onChange={onChangeHandler}
                                value={data.mobile}
                                type="text"
                                placeholder='Your mobile number'
                                required
                            />
                            <div className="login-page-role">
                                <label htmlFor="role-select">Select Role:</label>
                                <select id="role-select" value={role} onChange={onRoleChange}>
                                    <option value="customer">Customer</option>
                                    <option value="admin">Farmer</option>
                                </select>
                            </div>
                            {role === "admin" && (
                                <>
                                    <input
                                        name='address'
                                        onChange={onChangeHandler}
                                        value={data.address}
                                        type="text"
                                        placeholder='Your address'
                                    />
                                    <input
                                        name='crops'
                                        onChange={onChangeHandler}
                                        value={data.crops}
                                        type="text"
                                        placeholder='Crops you produce'
                                    />
                                    <input
                                        name='location'
                                        value={data.location}
                                        type="text"
                                        placeholder='Location (auto-filled)'
                                        readOnly
                                    />
                                    <button type="button" onClick={getLocation}>Get Location</button>
                                    <input
                                        name='profilePicture'
                                        onChange={onChangeHandler}
                                        type="file"
                                        accept="image/*"
                                    />
                                </>
                            )}
                        </>
                    )}

                    {currState === "Login" && (
                        <>
                            <input
                                name='email'
                                onChange={onChangeHandler}
                                value={data.email}
                                type="email"
                                placeholder='Your email'
                                required
                            />
                            <input
                                name='password'
                                onChange={onChangeHandler}
                                value={data.password}
                                type="password"
                                placeholder='Password'
                                required
                            />
                        </>
                    )}
                </div>
                <button type="submit">{currState === "Login" ? "Login" : "Create account"}</button>
                <div className="login-page-condition">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms"><p>By continuing, I agree to the terms of use & privacy policy.</p></label>
                </div>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
                }
            </form>
        </div>
    );
};

export default LoginPage;
