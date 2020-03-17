import React from 'react';

const Button = ({text, type}) => {
    return (
        <button type={type} className="btn btn-success w-100">
            {text}
        </button>
    )
}

export default Button;