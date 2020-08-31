import * as Yup from 'yup';
import { NAME_REGEX, ADDRESS_REGEX, PHONE_REGEX, POSTCODE_REGEX } from '../../constants';

const REQUIRED_FIELD = '*This field is required';

export const validationSchema = Yup.object({
    fname: Yup.string()
    .matches(NAME_REGEX, '*Please input a valid first name!')
    .required(REQUIRED_FIELD),
    lname: Yup.string()
    .matches(NAME_REGEX, '*Please input a valid last name!')
    .required(REQUIRED_FIELD),
    address: Yup.string()
    .matches(ADDRESS_REGEX, '*Please input a valid address!')
    .required(REQUIRED_FIELD),
    company: Yup.string(),
    address2: Yup.string()
    .matches(ADDRESS_REGEX, '*Please input a valid address!'),
    email: Yup.string()
    .email('*Please input a valid email!')
    .required(REQUIRED_FIELD),
    phone: Yup.string()
    .matches(PHONE_REGEX, '*Please input a valid phone number!')
    .required(REQUIRED_FIELD),
    city: Yup.string()
    .required(REQUIRED_FIELD),
    country: Yup.string()
    .required(REQUIRED_FIELD),
    state: Yup.string()
    .required(REQUIRED_FIELD),
    postcode: Yup.string()
    .matches(POSTCODE_REGEX, '*Please input a valid postcode!')
    .required(REQUIRED_FIELD),
    notes: Yup.string(),
    payment: Yup.string()
    .required('*Please select a payment')
})