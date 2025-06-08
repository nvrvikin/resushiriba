import { IOrderItemRow } from "@/app/types/types"
import OrderItemRegular from "./OrderItemRegular";


export default function OrderTableRow(props: IOrderItemRow) {
  const { item_data } = props
  return <OrderItemRegular key={item_data.id} id={ item_data.id } item_data={item_data} />;
}
