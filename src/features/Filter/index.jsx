import { filter } from 'features/Info/infoSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import FilterForm from './components/FilterForm';

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