import ItemRow from "./schedule/itemRow"


function Schedule() {
  return (
    <div className="footer-schedule">
        <div className="footer-schedule__col footer-schedule__col_first">
            <h3 className="footer-schedule__title">Часы работы</h3>
            <div className='footer-schedule__wrapper'>
              <ItemRow day='Пн' from='11.00' to='23.00' />
              <ItemRow day='Вт' from='11.00' to='23.00' />
              <ItemRow day='Ср' from='11.00' to='23.00' />
            </div>
        </div>
        <div className="footer-schedule__col footer-schedule__col_second">
          <div className='footer-schedule__wrapper'>
            <ItemRow day='Чт' from='11.00' to='23.00' />
            <ItemRow day='Пт' from='11.00' to='23.00' />
            <ItemRow day='Сб' from='11.00' to='23.00' />
            <ItemRow day='Вс' from='11.00' to='23.00' />
          </div>
        </div>
    </div>
  )
}

export default Schedule