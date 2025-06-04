interface IFreeItemAlert {
  sum: number
}

function FreeItemAlert(props: IFreeItemAlert){
  if(props.sum >= 1000){
    return (
      <div className='order-table__row'>
        <div className='order-table__thumb-wrapper'>
          <div className='order-table__thumb order-table__thumb_free'></div>
        </div>
        <div className='order-table__bordered-wrapper'>
          <div className='order-table__cell order-table__cell_title'>
            <h1 className='order-table__title order-table__title_free'>Бесплатная порция роллов за заказ от 1000р</h1>
          </div>
          <div className='order-table__cell '></div>
          <div className='order-table__cell '></div>
        </div>
      </div>
    )
  } else return <></>;
}

export default FreeItemAlert