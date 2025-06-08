import { Fragment, useEffect, useState } from 'react';

//import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
//import { getCategories } from '../../actions/categories';
//import { getItems } from '../../actions/items';
//import cookie from 'react-cookie';

//import { COOKIE_NAME } from '../../config/constants';

import { Link } from 'react-router-dom';
import OrderTable from './OrderTable/OrderTable';
import { useCart } from '@/app/contexts/cart';
import { IOrderItem } from '@/app/types/types';

export function OrderContent({ /*match, history, items,  getItems */}) {
  const { orderItems } = useCart() 
    const [orderData, setOrderData] = useState<IOrderItem[]>([]);

    //const items = DEFAULT_ORDER_DATA.map(item => ({ ...item, price: item.price_per_one * item.amount }))

    //const [localIds] = useState(DEAFULT_LOCAL_IDS);

    const [pickup, setPickup] = useState(false);
    const [birth, setBirth] = useState(false);
    const [happyHours, setHappyHours] = useState(false);
    const [discount, setDiscount] = useState(1);
    //const [deleteItem, setDeleteItem] = useState(false);

    // MOUNT
    useEffect(() => {
      //getItems();
      //if(cookie.load(COOKIE_NAME)) setLocalIds(cookie.load(COOKIE_NAME));
    }, []);

    useEffect(() => {
      setOrderData(orderItems)
    }, [orderItems])

    // ITEMS LOADED
    /*useEffect(() => {
      console.log('ITEMS NOW:' + JSON.stringify(items))
      if(items.length && localIds.length){
        const filtered = items.filter(item => localIds.filter(local => local.id == item.id && local.amount > 0).length > 0);
        const data = filtered.map(item => {
          console.log("title:" + item.title);
          
          return {
            id: item.id,
            title: item.title,
            amount: localIds.filter(local => local.id == item.id)[0].amount,
            price_per_one: item.price,
            type: 'regular',
            subitems: []
          }
          
        });
        //setOrderData(data);
        //updateCookies(data);
      }
    }, [items]);*/

    // DISCOUNTS CHANGING
    useEffect(() => {
      const newDiscount = 1 - (birth || happyHours ? 0.15 : 0) - (pickup ? 0.1 : 0)
      setDiscount(newDiscount);
    }, [pickup, birth, happyHours]);

    // RETURN
    if(orderData.length){
        return (
          <Fragment>
                <div className="order-settings">
                  <h1 className="order-settings__title">Акции</h1>
                  <div className='order-settings-item'>
                    <span className='order-settings-item__title'>Заберу самостоятельно</span>
                    <div className={'order-settings-item__switch' + (pickup ? ' order-settings-item__switch_on' : '')}
                      onClick={() => setPickup(!pickup)}
                    ></div>
                  </div>
                  <div className='order-settings-item'>
                    <span className='order-settings-item__title'>Скидка ко дню рождения</span>
                    <div className={'order-settings-item__switch' + (birth ? ' order-settings-item__switch_on' : '')}
                      onClick={() => setBirth(!birth)}
                    ></div>
                  </div>
                  <div className='order-settings-item'>
                    <span className='order-settings-item__title'>Закажу с 12.00 до 16.00</span>
                    <div className={'order-settings-item__switch' + (happyHours ? ' order-settings-item__switch_on' : '')}
                      onClick={() => setHappyHours(!happyHours)}
                    ></div>
                  </div>
                </div>
                <OrderTable data={ orderData } discount={ discount } />
          </Fragment>
        );
    } else {
        return (
            <div className="order-no-items">
                <span className="order-no-items__alert">Пока не добавлено ни одного товара</span>
                <Link className="order-no-items__link" to='/menu/'>Перейти в меню</Link>
            </div>
        );
    }
  }

  export default OrderContent