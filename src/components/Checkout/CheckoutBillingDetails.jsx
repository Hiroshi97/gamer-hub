import React from "react";
import SubTitle from "../Reusable/SubTitle";
import { PropTypes } from "prop-types";

const CheckoutBillingDetails = ({ values, errors, handleChange, handleSubmit }) => {
  return (
    <>
      <SubTitle title="BILLING DETAILS" />
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-3">
            <label htmlFor="checkoutFirstName">First Name:</label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="checkoutFirstName"
              name="fname"
              value={values.fname}
            />
            {errors.fname && (
              <small id="fnameHelp" className="form-text text-danger">
                {errors.fname}
              </small>
            )}
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="checkoutLastName">Last Name:</label>
            <input
              onChange={handleChange}
              type="text"
              name="lname"
              className="form-control"
              id="checkoutLastName"
              value={values.lname}
            />

            {errors.lname && (
              <small id="lnameHelp" className="form-text text-danger">
                {errors.lname}
              </small>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="checkoutAddress">Address:</label>
            <input
              onChange={handleChange}
              type="address"
              className="form-control"
              id="checkoutAddress"
              name="address"
              value={values.address}
            />
            {errors.address && (
              <small id="addressHelp" className="form-text text-danger">
                {errors.address}
              </small>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="checkoutCompany">Company Name:</label>
            <input
              onChange={handleChange}
              type="text"
              name="company"
              className="form-control"
              id="checkoutCompany"
              value={values.company}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress2">Address 2:</label>
            <input
              onChange={handleChange}
              type="text"
              name="address2"
              className="form-control"
              id="inputAddress2"
              values={values.address2}
            />
            {errors.address2 && (
              <small id="address2Help" className="form-text text-danger">
                {errors.address2}
              </small>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputEmail">E-mail:</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              className="form-control"
              id="inputEmail"
              value={values.email}
            />
            {errors.email && (
              <small id="emailHelp" className="form-text text-danger">
                {errors.email}
              </small>
            )}
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputPhone">Phone Number:</label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              name="phone"
              id="inputPhone"
              value={values.phone}
            />
            {errors.phone && (
              <small id="phoneHelp" className="form-text text-danger">
                {errors.phone}
              </small>
            )}
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputCity">City:</label>
            <input
              onChange={handleChange}
              type="text"
              name="city"
              className="form-control"
              id="inputCity"
              value={values.city}
            />
            {errors.city && (
              <small id="cityHelp" className="form-text text-danger">
                {errors.city}
              </small>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="checkoutCountry">Country:</label>
            <input
              onChange={handleChange}
              type="text"
              name="country"
              className="form-control"
              id="checkoutCountry"
              value={values.country}
            />
            {errors.country && (
              <small id="countryHelp" className="form-text text-danger">
                {errors.country}
              </small>
            )}
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="checkoutState">State:</label>
            <input
              onChange={handleChange}
              type="text"
              name="state"
              className="form-control"
              id="checkoutState"
              value={values.state}
            />
            {errors.state && (
              <small id="stateHelp" className="form-text text-danger">
                {errors.state}
              </small>
            )}
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="checkoutPostalCode">Postal Code:</label>
            <input
              onChange={handleChange}
              type="text"
              name="postcode"
              className="form-control"
              id="checkoutPostalCode"
              value={values.postcode}
            />
            {errors.postcode && (
              <small id="postalcodeHelp" className="form-text text-danger">
                {errors.postcode}
              </small>
            )}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="checkoutNotes">Order Notes:</label>
          <textarea
            onChange={handleChange}
            className="form-control"
            name="notes"
            id="checkoutNotes"
            rows="4"
            placeholder="NOTES ABOUT YOUR ORDER! E.G. SPECIAL NOTES FOR DELIVERY"
            value={values.notes}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-sm btn-danger text-uppercase">Place Order</button>
      </form>
    </>
  );
};

CheckoutBillingDetails.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default React.memo(CheckoutBillingDetails);
