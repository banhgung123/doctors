import React from 'react';
import PropTypes from 'prop-types';
import InfoList from 'features/Info/components/InfoList';
import { useSelector } from 'react-redux';

ListPage.propTypes = {
    
};

function ListPage(props) {
    const data = useSelector(state => state.info);
    
    return (
        <>
            <InfoList infos={data} />
        </>
    );
}

export default ListPage;