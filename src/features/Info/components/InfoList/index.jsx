import React from 'react';
import PropTypes from 'prop-types';
import InfoItem from '../InfoItem';

InfoList.propTypes = {
    infos: PropTypes.array
};

InfoList.defaultProps = {
    infos: []
};

function InfoList(props) {
    const { infos } = props;
    return (
        <>
            {infos.map((info, index) => <InfoItem key={index} info={info} />)}
        </>
    );
}

export default InfoList;