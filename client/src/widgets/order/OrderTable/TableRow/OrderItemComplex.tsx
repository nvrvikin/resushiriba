import { Fragment } from 'react';
import OrderItemRegular from './OrderItemRegular';
import { IOrderItemRow } from '@/app/types/types';
import OrderItemSubitem from './OrderItemSubitem';

export default function OrderItemComplex(props: IOrderItemRow) {
    const { id, item_data, addFunc, removeFunc } = props

    return (
      <Fragment>
        <OrderItemRegular id={ id } item_data={ item_data } addFunc={ addFunc } removeFunc={ removeFunc }/>
        {
          props.item_data.subitems.map(subItem => 
            <OrderItemSubitem item_data={subItem} key={subItem.id} />
          )
        }
      </Fragment>
    )
}