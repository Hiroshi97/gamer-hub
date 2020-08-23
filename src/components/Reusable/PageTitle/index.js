import React from "react";
import "./styles.scss";
import PropTypes from 'prop-types';

const PageTitle = ({name}) => {
  return (
    <h3 className="page-title font-weight-bold">
      <span id="selected-category" className="text-uppercase"></span> {name}
    </h3>
  );
}


PageTitle.propTypes = {
  name: PropTypes.string
};

export default React.memo(PageTitle)