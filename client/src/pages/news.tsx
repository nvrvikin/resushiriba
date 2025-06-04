import { useEffect, useState } from 'react';

import Layout from '../components/layout/IndexLayout';
import LoaderScreen, { loaderDocListener } from '../widgets/LoaderScreen';

export default function News() {
  const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
      loaderDocListener(() => setIsLoaded(true))
    }, [])

  return (
    <div>
      <Layout navTitle="Акции" backTitle='' backTo='#'>
        <LoaderScreen isLoaded={ isLoaded } />
          <div className="news-wrapper">
            <div className='news-container'>
              <section className="news-discount">
                <h1 className='news-discount__title'>Скидки</h1>
                <div className="news-discount__list">
                  <p className='news-discount__item'>
                    "Счастливые часы" по будням с
                    <span className='text-action'> 12.00 </span>
                    до
                    <span className='text-action'> 16.00</span>
                    :
                    <br></br>
                    предоставляется
                    <span className='text-action'> скидка 15% </span>на суши и роллы
                  </p>
                  <p className='news-discount__item'>
                    Имениннику
                    <span className='text-action'> скидка 15% </span>
                    <span className='news-discount__item-subtext'> (в день рождения, день до дня рождения, и день после)</span>
                  </p>
                  <p className='news-discount__item'>
                    При заказе блюд на сумму
                    <span className='text-action'> 1000 рублей</span>
                    , порция роллов
                    <span className='text-action'> в подарок</span>
                  </p>
                  <p className='news-discount__item'>
                    На заказы без доставки
                    <span className='text-action'> скидка 10%</span>
                  </p>
                  <span className='news-discount__hint'>
                    Скидки не суммируются
                  </span>
                  <span className='news-discount__hint'>                
                    и не распространяются на разделы "Сеты" и "Напитки"                  
                  </span>
                </div>
              </section>
              <div className='news-breakline'></div>
              <section className='news-certificate'>
                <div className="news-certificate__title-wrapper">
                  <h1 className='news-certificate__title'>Уважаемые гости!</h1>
                  <h1 className='news-certificate__title'>
                    У нас вы можете приобрести
                    <br></br>
                    <span className='text-action'>подарочные сертификаты</span>
                    !
                  </h1>
                </div>
                <div className="news-certificate__text-wrapper">
                  <p className='news-certificate__text'>Подарочные сертификаты - это идеальный подарок: на любой вкус, возраст и бюджет, который обязательно порадует Ваших любимых, друзей и родных!</p>
                  <p className='news-certificate__text'>В продаже имеются сертификаты различных номиналов:</p>
                </div>
                <ul className='news-certificate__values-list'>
                  <li className='news-certificate__value'>500</li>
                  <li className='news-certificate__value'>1000</li>
                  <li className='news-certificate__value'>1500</li>
                  <li className='news-certificate__value'>2000</li>
                  <li className='news-certificate__value'>5000</li>
                </ul>
                <div className='news-certificate-conditions'>
                  <h2 className='news-certificate-conditions__title'>Условия использования сертифика:</h2>
                  <ul className='news-certificate-conditions__list'>
                    <li className='news-certificate-conditions__item'>Подарочный сертификат дает право его обладателю получить услугу на сумму, которая в нем указана</li>
                    <li className='news-certificate-conditions__item'>Если стоимость услуги больше номинала сертификата, то его обладатель имеет право доплатить разницу в стоимости услуги</li>
                    <li className='news-certificate-conditions__item'>Сертификат не подлежит обмену на денежный эквивалент</li>
                    <li className='news-certificate-conditions__item'>Подарочный Сертификат является собственностью компании и после использования не взовращается</li>
                    <li className='news-certificate-conditions__item'>Подарочный Сертификат обмену и возврату не подлежит, в случае утери не восстанавилвается</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
      </Layout>
    </div>
  );
}
  