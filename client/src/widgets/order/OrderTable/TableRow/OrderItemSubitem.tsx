import { IOrderSubitem } from "@/app/types/types";

interface IOrderItemSubitem {
  item_data: IOrderSubitem
}

function OrderItemSubitem(props: IOrderItemSubitem){
  const { item_data } = props 

    return(
        <div className='order-table__row order-table__row_subrow'>
            <div className='order-table__thumb-wrapper'>
                <div className='order-table__thumb'></div>
            </div>
            <div className='order-table__bordered-wrapper'>
                <div className='order-table__cell order-table__cell_title'>
                    <h1 className='order-table__title'>{ item_data.title }</h1>
                </div>
                <div className='order-table__cell order-table__cell_amount'>{ item_data.amount + ' шт.'}</div>
                <div className='order-table__cell order-table__cell_price'>{ item_data.price_per_one *  item_data.amount }</div>
            </div>
        </div>
    );
}

export default OrderItemSubitem