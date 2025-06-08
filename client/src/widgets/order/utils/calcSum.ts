interface ICalcSum {
    total: number,
    discount: number
}

function calcSum(props: ICalcSum){
    return Math.round(props.total * props.discount);
}

export default calcSum