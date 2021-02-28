import React from 'react';
import PropTypes from 'prop-types';
import SortForm from './components/SortForm';
import { useDispatch } from 'react-redux';
import { sort } from 'features/Info/infoSlice';

SortFeature.propTypes = {
    
};

const choose = [
    {
        label: 'Khoảng cách',
        value: 'distance'
    },
    {
        label: 'Đánh giá',
        value: 'rating'
    }
];

function SortFeature(props) {
    const dispatch = useDispatch();
    
    const handleSort = (value) => {
        const action = sort(value);
        dispatch(action);
    }

    return (
        <>
            <SortForm
                label="Sắp xếp theo"
                choose={choose}
                onChoose={handleSort}
            />
        </>
    );
}

export default SortFeature;