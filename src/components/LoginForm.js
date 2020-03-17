import React, { useState } from 'react';
import TextInput from './TextInput';
import Button from './Button';

const Form = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        console.log(event);
        console.log(username, password)
    }

    return (
        <form onSubmit={onSubmit} className="col-lg-4 col-md-8 col-sm-10">
            <div className="card text-center d-flex">
                <div className="card-body">
                    <h5>Member Login</h5>
                    <TextInput
                        icon="person"
                        onChange={(value) => setUsername(value)}
                        placeholder="Username"
                        value={username}
                    />
                    <TextInput
                        icon="lock"
                        onChange={(value) => setPassword(value)}
                        placeholder="Password"
                        value={password}
                        type="password"
                    />
                    <Button
                        text="Login"
                        type="success"
                    />
                </div>
                <div className="card-footer">
                    <a href="/#" className="text-secondary">Forgot Password?</a>
                </div>
            </div>
        </form>

    )
}

export default Form;