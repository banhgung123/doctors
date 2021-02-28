import { Typography } from '@material-ui/core';
import React from 'react';
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