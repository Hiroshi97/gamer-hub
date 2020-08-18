import React from 'react';
import { Link } from 'react-router-dom';
import "./cart.scss";
import PageTitle from '../../components/PageTitle';
import CartTable from '../../components/Cart/CartTable';

export default function Cart() {
  return (
    <div className="container-fluid cart-page">
        <div className="container cart-content">
        <div className="row cart-custom-breadcrumb">
          <ul>
            <li>
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li>
              <Link to="#" className="text-white active">
                Store
              </Link>
            </li>
          </ul>
        </div>
        <PageTitle name="CART"/>
        <CartTable/>
        </div>
    </div>
  );
}
