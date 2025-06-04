import { IOrderItemRow } from "@/app/types/types";

export default function OrderItemRegular(props: IOrderItemRow ) {
  const { item_data, addFunc, removeFunc } = props

    return (
        <div className='order-table__row'>
          <div className='order-table__thumb-wrapper'>
            <div className='order-table__thumb'></div>
          </div>
          <div className='order-table__bordered-wrapper'>
            <div className='order-table__cell order-table__cell_title'>
              <h1 className='order-table__title'>{item_data.title}</h1>
            </div>
            <div className='order-table__cell order-table__cell_amount'>
              <div className="noselect order-item-amount-btn order-item-btn_remove" onClick={() => removeFunc(item_data.id)}>-</div>
              {item_data.amount + ' шт.'}
              <div className="noselect order-item-amount-btn order-item-btn_add" onClick={() => addFunc(item_data.id)}> +</div>
            </div>
            
            <div className='order-table__cell order-table__cell_price'>{item_data.price_per_one * item_data.amount + 'р'}</div>
          </div>
        </div>
    )
}
