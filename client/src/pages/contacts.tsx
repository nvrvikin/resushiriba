import IndexLayout from '../components/layout/IndexLayout';
import LogoIcon from '@/shared/ui/icons/LogoIcon';
import PhoneIcon from '@/shared/ui/icons/PhoneIcon';
import PhoneHomeIcon from '@/shared/ui/icons/PhoneHomeIcon';
import VkIcon from '@/shared/ui/icons/VkIcon';
import InstagramIcon from '@/shared/ui/icons/InstagramIcon';
import DeliveryImg from '/src/pic/delivery-contacts-icon.png';
import GeoImg from '/src/pic/geo-contacts-icon.png';
import SocialImg from '/src/pic/social-contacts-icon.png';
import LoaderScreen, { loaderDocListener } from '../widgets/LoaderScreen';
import { useEffect, useState } from 'react';

function Contacts() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
      window.scrollTo(0, 0)
      loaderDocListener(() => setIsLoaded(true))
    }, [])

    return (
      <IndexLayout navTitle="Контакты" backTitle='' backTo='#'>
        <LoaderScreen isLoaded={ isLoaded } />
        <div className="contacts-wrapper">
            <section className="contacts-item">
              <div className='contacts-item__img contacts-item__img_delivery' style={{ backgroundImage:  `url(${DeliveryImg})` }}></div>
              <h1 className='contacts-item__title'>Стоимость доставки</h1>
              <div className='contacts-item__text-wrapper'>
                <div className='contacts-item__text-container'>
                  <span className='contacts-delivery__title'>По городу:</span>
                  <p className='contacts-delivery__text'>при заказе 
                    <span className='text-action'> свыше 300р. </span>
                    составляет 
                    <span className='text-action'> 30р.</span>
                  </p>
                  <p className='contacts-delivery__subtext'>
                    <span className='text-action'>менее 300р. </span>
                    составляет
                    <span className='text-action'> 60р.</span>
                  </p>
                </div>
                <div className='contacts-item__text-container'>
                  <span className='contacts-delivery__title'>Балиндер, Сорокино, СМУ, поселок Новый:</span>
                  <p className='contacts-delivery__text'>при заказе 
                    <span className='text-action'> свыше 500р. </span>
                    составляет 
                    <span className='text-action'> 60р.</span>
                  </p>
                  <p className='contacts-delivery__subtext'>
                    <span className='text-action'>менее 500р. </span>
                    составляет
                    <span className='text-action'> 110р.</span>
                  </p>
                </div>
              </div>
            </section>
            <section className="contacts-item">
              <div className='contacts-item__img contacts-item__img_geo' style={{ backgroundImage: "url(" + GeoImg + ")" }}></div>
              <h1 className='contacts-item__title'>Где нас найти</h1>
              <h2 className='contacts-item__subtitle'>г.Заринск, 659100</h2>
              <div className='contacts-item__text-wrapper'>
                <div className='contacts-item__text-container'>
                    <span className='contacts-geo__title'>Ул. 25 Партсъезда 42/2</span>
                    <a href='tel:+79132716997' className='contacts-geo__phone'>
                      <PhoneIcon className='contacts-geo__phone-icon' />
                      <span>+ 7 913 271 69 97</span>
                    </a>
                    <a href='tel:+73859542971' className='contacts-geo__phone'>
                      <PhoneHomeIcon className='contacts-geo__phone-icon' />
                      <span>+ 7 (385) 95 4 29 71</span>
                    </a>
                </div>
                <div className='contacts-item__text-container'>
                    <span className='contacts-geo__title'>
                      Пр. Строитель 21,
                      <br/>
                      маг. "Лакомка", 2 этаж
                    </span>
                    <a href='tel:+79130970141' className='contacts-geo__phone'>
                      <PhoneIcon className='contacts-geo__phone-icon' />
                      <span>+ 7 913 097 01 41</span>
                    </a>
                </div>
              </div>
            </section>
            <section className="contacts-item">
              <div className='contacts-item__img contacts-item__img_social' style={{ backgroundImage: `url(${SocialImg})` }}></div>
              <h1 className='contacts-item__title'>Также, ищите нас в соц. сетях</h1>
              <h2 className='contacts-item__subtitle'>Следите за новостями</h2>
              <div className='contacts-item__link-container'>
                <a className='contacts-item__link contacts-item__link_vk' href='https://vk.com/sushizarinsk'>
                  <VkIcon className='contacts-item__icon' />
                  <span>/SushiZarinsk</span>
                </a>
                <a className='contacts-item__link contacts-item__link_vk' href='https://vk.com/sushizarinsk22'>
                  <VkIcon className='contacts-item__icon' />                  
                  <span>/SushiZarinsk22</span>
                </a>
                <a className='contacts-item__link contacts-item__link_inst' href='#'>
                  <InstagramIcon className='contacts-item__icon contacts-item__icon_instagram' />                  
                  <span>@SushiZarinsk</span>
                </a>
              </div>
            </section>
            <LogoIcon className='contacts-logo'/>
          </div>
      </IndexLayout>
    );
  }

  export default Contacts