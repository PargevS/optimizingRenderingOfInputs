import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
//* import of components and developer packages
import './Total.scss';

const Total = ({data}) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if(data.length){
            let sum = 0;
            data.forEach(item => sum += item)
            setTotal(sum);
            console.log('Total = ', sum)
        }
    }, [data])


    return (
        <div className="total">Sum of the addition of fields: <span>{total}</span></div>
    );
};

Total.propTypes = {data: PropTypes.array};
Total.defaultProps = {data: []};

export default Total;