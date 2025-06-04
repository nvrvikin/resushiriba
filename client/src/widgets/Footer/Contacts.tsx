import PhoneIcon from '@/shared/ui/icons/PhoneIcon';
import PhoneHomeIcon from '@/shared/ui/icons/PhoneHomeIcon';

function Contacts() {
  return (
    <div className="footer-contacts">
          <div className="footer-contacts__adress footer-contacts__adress_first">
            <h3 className="footer-contacts__title">Ул. 25 Партсъезда 42/2</h3>
            <a href="tel:+79132716997" className="footer-contacts__phone  footer-contacts__phone_mobile">
              <PhoneIcon className='footer-contacts__phone-icon'/>
              <span>+7 913 271 69 97</span>
            </a>
            <a href="tel:+73859542971" className="footer-contacts__phone footer-contacts__phone_home">
              <PhoneHomeIcon className='footer-contacts__phone-icon'/>            
              <span>+7 (385) 95 4 29 71</span>
            </a>
          </div>
          <div className="footer-contacts__adress footer-contacts__adress_second">
            <h3 className="footer-contacts__title">Пр. Строителей 21, маг. "Лакомка", 2 этаж</h3>
            <a href="/tel:+79132716997" className="footer-contacts__phone footer-contacts__phone_mobile">
              <PhoneIcon className='footer-contacts__phone-icon'/>            
              <span>+7 913 092 01 41</span>
            </a>
          </div>
        </div>
  )
}

export default Contacts
