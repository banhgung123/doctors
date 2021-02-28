import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, FormControl, FormControlLabel, Grid, Menu, Radio, RadioGroup, Typography } from '@material-ui/core';
import './style.scss';

Filter.propTypes = {
    label: PropTypes.string.isRequired,
    choose: PropTypes.array.isRequired,
    onChoose: PropTypes.func.isRequired
};

Filter.defaultProps = {
    label: '',
    choose: [],
    onChoose: null
}

function Filter(props) {
    const { label, choose, onChoose } = props;
    const [chooseValue, setChooseValue ] = useState(choose[0].label)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleChange = (e) => {
        const c = choose.find(ch => ch.value === e.target.value);
        setChooseValue(c.label);
        if (onChoose) onChoose(c);
    }
    
    return (
        <Box mt={3}>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                <Grid item>
                    <Box mr={3}>
                        <Typography variant="body2">{label}</Typography>
                    </Box>
                </Grid>
                <Grid item className="activeButton">
                    <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        {chooseValue}
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        getContentAnchorEl={null}
                    >
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="" name="">
                                {choose.map((c, index) => (
                                    <FormControlLabel
                                        key={index}
                                        onClick={handleClose}
                                        value={c.value}
                                        control={<Radio />}
                                        label={c.label}
                                        onChange={handleChange}
                                    />
                                ))}
                                
                                
                            </RadioGroup>
                        </FormControl>
                    </Menu>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Filter;