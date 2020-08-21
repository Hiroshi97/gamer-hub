import React from 'react'
import PropTypes from "prop-types";
import './styles.scss';

export default function SubTitle({title}) {
    return (
        <div className="sub-title">
            <h4>{title}</h4>
        </div>
    )
}

SubTitle.propTypes = {
    title: PropTypes.string,
  };