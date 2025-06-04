interface IItremRow {
    day: String,
    from: String,
    to: String
}


 function ItemRow({day, from, to}:IItremRow) {
  return (
    <>
        <span className="footer-schedule__item footer-schedule__item_day">{ day }</span>
        <span className="footer-schedule__item">{ from }</span>
        <span className="footer-schedule__item footer-schedule__item_dash">-</span>
        <span className="footer-schedule__item">{ to }</span>
    </>
  )
}

export default ItemRow