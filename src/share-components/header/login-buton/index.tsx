import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
LoginButton.propTypes = {

};

function LoginButton() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        // Redirect to a new route, e.g., '/dashboard'
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    };
    return (
        <div className="login" onClick={handleRedirect}>
            <FontAwesomeIcon icon={faUser} className='img' />
        </div>
    );
}

export default LoginButton;