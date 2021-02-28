import React from 'react';
import PropTypes from 'prop-types';
import Filter from 'components/Filter';

FilterForm.propTypes = {
    label: PropTypes.string.isRequired,
    choose: PropTypes.array.isRequired,
    onChoose: PropTypes.func.isRequired
};

FilterForm.defaultProps = {
    label: 'Sắp xếp theo',
    choose: [],
    onChoose: null
}

function FilterForm(props) {
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

export default FilterForm;