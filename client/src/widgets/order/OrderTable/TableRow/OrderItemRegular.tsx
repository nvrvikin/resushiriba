import { IOrderItemRow } from "@/app/types/types";
import NoPhoto from '/static/img/no-photo.png'
import { useCart } from "@/app/contexts/cart";

export default function OrderItemRegular(props: IOrderItemRow ) {
  const { addToCart, removeFromCart } = useCart()
  const { item_data } = props

    return (
        <div className='order-table__row'>
          <div className='order-table__thumb-wrapper'>
            <div className='order-table__thumb' style={{ backgroundImage: `url(${item_data.image_link ? item_data.image_link : NoPhoto})`}} ></div>
          </div>
          <div className='order-table__bordered-wrapper'>
            <div className='order-table__cell order-table__cell_title'>
              <h1 className='order-table__title'>{item_data.title}</h1>
            </div>
            <div className='order-table__cell order-table__cell_amount'>
              <div className="noselect order-item-amount-btn order-item-btn_remove" onClick={() => removeFromCart(item_data.id)}>-</div>
              {item_data.amount + ' шт.'}
              <div className="noselect order-item-amount-btn order-item-btn_add" onClick={() => addToCart({ id: item_data.id })}> +</div>
            </div>
            
            <div className='order-table__cell order-table__cell_price'>{item_data.price * item_data.amount + 'р'}</div>
          </div>
        </div>
    )
}
