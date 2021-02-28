import React from 'react';
import PropTypes from 'prop-types';
import Filter from 'components/Filter';

SortForm.propTypes = {
    label: PropTypes.string.isRequired,
    choose: PropTypes.array.isRequired,
    onChoose: PropTypes.func.isRequired
};

SortForm.defaultProps = {
    label: 'Sắp xếp theo',
    choose: [],
    onChoose: null
}

function SortForm(props) {
    const { label, choose, onChoose } = props;
    const handleSort = (value) => {
        if (onChoose) onChoose(value);
    }
    
    return (
        <>
            <Filter label={label} choose={choose} onChoose={handleSort}/>
        </>
    );
}

export default SortForm;