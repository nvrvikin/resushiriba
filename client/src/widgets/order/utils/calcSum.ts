import { IOrderItem } from "@/app/types/types";

interface ICalcSum {
    data: IOrderItem[]
    discount: number
}

function calcSum(props: ICalcSum){
    let sum = 0;
    props.data.map(item => {
      sum += item.price_per_one * item.amount;
    })
    return Math.round(sum * props.discount);
}

export default calcSum