import InfoList from 'features/Info/components/InfoList';
import React from 'react';
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