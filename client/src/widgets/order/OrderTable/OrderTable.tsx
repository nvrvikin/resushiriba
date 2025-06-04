import { IOrderItem } from '@/app/types/types';
import calcSum from '../utils/calcSum';
import { useEffect, useState } from 'react';
import FreeItemAlert from './FreeItemAlert';
import OrderTableRow from './TableRow/OrderTableRow';

interface IOrderData {
  data: IOrderItem[]
  discount: number
  addFunc: (id: string) => void
  removeFunc: (id: string) => void
}

export default function OrderTable(props: IOrderData) {
  const [sum, setSum] = useState(0)
  const {data, discount, addFunc, removeFunc} = props

  useEffect(()=> {
    let newSum = calcSum({ data, discount })
    setSum(newSum)
  }, [data, discount])

    if(data.length) {
        console.log('data pass')
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
                  return <OrderTableRow key={ item.id } id={ item.id } item_data={ item } addFunc={ addFunc } removeFunc={ removeFunc } />
                }
              )
            }
            <FreeItemAlert sum={ sum } />
            <div className='order-table-footer'>
              <div className='order-table-footer__clear-btn'>Очистить заказ</div>
              <div className='order-table-footer__sum-label'>Итого</div>
              <div className='order-table-footer__sum'>{ sum }р</div>
            </div>
          </div>
        )
      }
      else 
      {
        return '';
      }
}
