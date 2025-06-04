//import React, { Fragment, useEffect, useState } from 'react';

//import { connect } from 'react-redux';
import Layout from '../components/layout/IndexLayout';
import OrderContent from '@/widgets/order/OrderContent';
import { useLocation } from 'react-router-dom';

export default function Order(/*{ match, history}*/) {

  const location = useLocation()

  return (
    <Layout navTitle="Ваш заказ" backTitle='' backTo=''>
      <div className='order-wrapper'>
        <OrderContent />
      </div>
    </Layout>
  )
}
