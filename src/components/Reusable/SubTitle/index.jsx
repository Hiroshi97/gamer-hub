import React from 'react'
import PropTypes from "prop-types";
import './styles.scss';

export default function SubTitle({title}) {
    let fixedTitle = '';
    if (title.split(" ").length === 2) {
        fixedTitle = title.split(" ");
    } else fixedTitle = [title];

    return (
        <div className="sub-title">
            {fixedTitle.length > 1 ? <h4><span className="text-danger">{fixedTitle[0] + " "}</span>{fixedTitle[1]}</h4> : <h4>{fixedTitle[0]}</h4>} 
        </div>
    )
}

SubTitle.propTypes = {
    title: PropTypes.string,
  };