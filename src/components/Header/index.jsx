import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import './style.scss';

Header.propTypes = {
    
};

function Header(props) {
    return (
        <Typography variant="h6" className="title">
            Danh sách các bác sĩ
        </Typography>
    );
}

export default Header;