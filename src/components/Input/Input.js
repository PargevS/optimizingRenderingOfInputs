import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//* import of components and developer packages
import './Input.scss';

const Input = ({idName,  elClassName, labelText, ...attrs}) => {
    const classes = classNames('input-wrapper', elClassName);

    console.log(idName);


    return (
        <div className={classes}>
            <label>
                <span>{labelText}</span>
                <input name={idName}  type="text" {...attrs}/>
            </label>
        </div>
    );
};

Input.propTypes = {
    idName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    elClassName: PropTypes.string,
    labelText: PropTypes.string,
};

Input.defaultProps = {
    elClassName: '',
    labelText: '',
};

export default React.memo(Input, (prevProps, nextProps) => {
    if (prevProps.value === nextProps.value) return true
});