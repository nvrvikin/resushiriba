import { Fragment, useEffect, useState } from 'react';

//import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
//import { getCategories } from '../../actions/categories';
//import { getItems } from '../../actions/items';
//import cookie from 'react-cookie';

//import { COOKIE_NAME } from '../../config/constants';

import { Link } from 'react-router-dom';
import OrderTable from './OrderTable/OrderTable';
import { DEAFULT_LOCAL_IDS, DEFAULT_ORDER_DATA } from './data/order_data';

export function OrderContent({ /*match, history, items,  getItems */}) {
    const [orderData, setOrderData] = useState(DEFAULT_ORDER_DATA);

    const items = DEFAULT_ORDER_DATA.map(item => ({ ...item, price: item.price_per_one * item.amount }))

    const [localIds] = useState(DEAFULT_LOCAL_IDS);

    const [pickup, setPickup] = useState(false);
    const [birth, setBirth] = useState(false);
    const [happyHours, setHappyHours] = useState(false);
    const [discount, setDiscount] = useState(1);
    const [deleteItem, setDeleteItem] = useState(false);

    // MOUNT
    useEffect(() => {
      //getItems();
      //if(cookie.load(COOKIE_NAME)) setLocalIds(cookie.load(COOKIE_NAME));
    }, []);

    // ITEMS LOADED
    useEffect(() => {
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
    }, [items]);

    // DISCOUNTS CHANGING
    useEffect(() => {
      if(birth || happyHours) setDiscount(0.85);
      else if(pickup) setDiscount(0.9);
      else setDiscount(1);
    }, [pickup, birth, happyHours]);

    // DELETING ON ZERO
    useEffect(() => {
      if(deleteItem) {
        const newData = orderData.filter(item => item.amount > 0);
        setDeleteItem(false);
        setOrderData(newData);
      }
    }, [deleteItem]);

    /*// UPDATE ORDER DATA CHANGED
    function updateOrderData(){
      setLocalIds(orderData.map(data => {
        return { id: data.id, amount: data.amount }
      }));
    }*/

    function onClickAdd(id: string) {
      setOrderData(() =>
        {
          const newData = orderData.map(item => {
            if(item.id == id){
              item.amount++;
              if(item.amount > 99) item.amount = 99
            }
            return item;
          })
          return newData;
        }
      );
      console.log("добавлен " + id)
    }

    function onClickRemove(id: string) {
        setOrderData(() => 
            {
                const newData = orderData.map(item => {
                    //let check = true;
                    if(item.id == id){
                      item.amount--;
                      if(item.amount < 1) setDeleteItem(true);
                    }
                    return item;
                })
                return newData;
            })
      console.log("удален " + id)
    }

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
                <OrderTable data={orderData}
                  discount={discount}
                  addFunc={onClickAdd}
                  removeFunc={onClickRemove}
                  />
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

  //const mapStateToProps = state => ({ items: state.items.items });

  //export default connect(mapStateToProps, { getCategories, getItems })(OrderContent)
  export default OrderContent