import { IOrderItemRow } from "@/app/types/types"
import OrderItemRegular from "./OrderItemRegular";
import OrderItemComplex from "./OrderItemComplex";


export default function OrderTableRow(props: IOrderItemRow) {
  const { item_data, addFunc, removeFunc } = props
  
  if (item_data.type == 'regular')
    return <OrderItemRegular key={item_data.id} id={ item_data.id } item_data={item_data} addFunc={ addFunc } removeFunc={ removeFunc }/>;
  else if(item_data.type == 'complex')
    return <OrderItemComplex key={item_data.id} id={ item_data.id } item_data={item_data} addFunc={ addFunc } removeFunc={ removeFunc }/>
}
