import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/logo.png'
import moment from 'moment';


const Header = props => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;