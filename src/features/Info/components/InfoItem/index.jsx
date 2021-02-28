import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import './style.scss';

InfoItem.propTypes = {
    info: PropTypes.object,
};

InfoItem.defaultProps = {
    info: {
            id: 400,
            display_name: 'BS. Nguyễn Thị Kim Ngân',
            avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
            language: 'vi',
            clinic_name: 'Phòng Khám Chuyên Khoa ABC',
            clinic_address: '201 Nguyễn Thị Định, Phường Thạnh Mỹ Lợi, Quận 2, Hồ Chí Minh, Vietnam',
            rating: 5,
            distance: 6.799155205456782,
            specialty: [
                {
                    specialty_id: 10,
                    name: 'Phụ Sản',
                },
                {
                    specialty_id: 13,
                    name: 'Bác sĩ Gia đình',
                },
            ],
        },
}

function InfoItem(props) {
    const { info } = props;
    // const specialfy = info.specialty.pop().name;
    
    return (
        <Box mt={3}>
            <Paper elevation={3}>
                <Box display="flex" alignItems="center">
                    <Box pt={4} pb={4} pl={4} pr={2}>
                        <img src={info?.avatar||''} alt={info.display_name}/>
                    </Box>
                    <Box>
                        <Typography variant="h6">{info.display_name}</Typography>
                        <Rating name="read-only" value={info.rating} readOnly />
                        <Typography variant="caption" component="p">{info.clinic_name}</Typography>
                        <Typography variant="body2" component="p">{info.clinic_name}</Typography>
                        <Typography variant="caption" component="p">{info.clinic_address}</Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default InfoItem;