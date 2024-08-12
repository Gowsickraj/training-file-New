
import { useState } from 'react';

export const SignUp = () => {
    const [user, setUser] = useState({
        username: "",
        dateofbirth: "",
        email: "",
        number: "",
        password: ""
    });

    const Myfunction = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(user));
        setUser({
            username: "",
            dateofbirth: "",
            email: "",
            number: "",
            password: ""
        });
        
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>User Name:
                    <input
                        type="text"
                        name='username'
                        value={user.username}
                        onChange={Myfunction}
                        placeholder="Type your name"
                    />
                </label>
                <br />
                <br />
                <label>Date Of Birth:
                    <input
                        type='date'
                        name='dateofbirth'
                        value={user.dateofbirth}
                        onChange={Myfunction}
                    />
                </label>
                <br />
                <br />
                <label>Contact number:
                    <input
                        type='text'
                        name='number'
                        value={user.number}
                        onChange={Myfunction}
                        placeholder="Enter Phone Number"
                    />
                </label>
                <br />
                <br />
                <label>Email:
                    <input
                        type="email"
                        name='email'
                        value={user.email}
                        onChange={Myfunction}
                        placeholder="Enter your Email"
                    />
                </label>
                <br />
                <br />
                <label>
                    Enter your Password:
                    <input
                        type='password'
                        name='password'
                        value={user.password}
                        onChange={Myfunction}
                        placeholder='Enter your password'
                    />
                </label>
                <br />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </>
    );
};
