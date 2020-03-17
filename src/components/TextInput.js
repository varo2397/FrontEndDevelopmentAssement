import React from 'react';

const TextInput = ({ icon, onChange, value, placeholder, type = "text" }) => {
    return (
        <div className="input-group input-focus my-3">
            <div className="input-group-prepend">
                <span className="input-group-text bg-white">
                    <i className="material-icons">{icon}</i>
                </span>
            </div>
            <input
                value={value}
                onChange={event => onChange(event.target.value)}
                placeholder={placeholder}
                className="form-control border-left-0"
                type={type}
            />
        </div>
    )
}

export default TextInput