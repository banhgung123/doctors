import React from 'react';
import PropTypes from 'prop-types';
import FilterForm from './components/FilterForm';
import { useDispatch } from 'react-redux';
import { filter } from 'features/Info/infoSlice';

FilterFeature.propTypes = {
    
};

const choose = [
    {
        label: 'Tiếng Việt',
        value: 'vi'
    },
    {
        label: 'Tiếng Anh',
        value: 'en'
    },
    {
        label: 'Tiếng Pháp',
        value: 'fr'
    }
];

function FilterFeature(props) {
    const dispatch = useDispatch();
    
    const handleSort = (value) => {
        const action = filter(value);
        dispatch(action);
    }

    return (
        <>
            <FilterForm
                label="Lọc kết quả"
                choose={choose}
                onChoose={handleSort}
            />
        </>
    );
}

export default FilterFeature;