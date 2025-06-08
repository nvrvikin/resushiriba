import { IOrderItem } from '@/app/types/types';
import calcSum from '../utils/calcSum';
import { useEffect, useState } from 'react';
import FreeItemAlert from './FreeItemAlert';
import OrderTableRow from './TableRow/OrderTableRow';
import { useCart } from '@/app/contexts/cart';

interface IOrderData {
  data: IOrderItem[]
  discount: number
}

export default function OrderTable(props: IOrderData) {
  const { total, clearCart } = useCart()
  const [sum, setSum] = useState(0)
  const { data, discount } = props

  useEffect(()=> {
    let newSum = calcSum({ total, discount })
    setSum(newSum)
  }, [data, discount])

    if(data.length) {
        return(
          <div className='order-table'>
            <div className='order-table-head'>
              <div className='order-table__head-title order-table__head-title_title'>Название</div>
              <div className='order-table__head-title order-table__head-title_amount'>Количество</div>
              <div className='order-table__head-title order-table__head-title_price'>Цена</div>
            </div>
            {
              data.map(item =>
                {
                  return <OrderTableRow key={ item.id } id={ item.id } item_data={ item } />
                }
              )
            }
            <FreeItemAlert sum={ sum } />
            <div className='order-table-footer'>
              <div className='order-table-footer__clear-btn' onClick={ clearCart }>Очистить заказ</div>
              <div className='order-table-footer__sum'>
                <div className='order-table-footer-sum__label'>Итого</div>
                <div className='order-table-footer-sum__value'>{ sum }р</div>
              </div>
            </div>
          </div>
        )
      }
      else 
      {
        return '';
      }
}
