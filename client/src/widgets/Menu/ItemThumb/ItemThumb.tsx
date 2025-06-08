import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMenuItem } from '../../../app/types/types';
import STYLES from './utils/thumb_styles';
import useCount from './utils/useCount';
import NoPhoto from '/static/img/no-photo.png'
//import cookie from 'react-cookies';
//import { COOKIE_NAME } from '../../config/constants';

function MenuItemThumb(props: IMenuItem) {
  const {
    id,
    //image_src,
    title,
    description,
    image_link,
    price,
    weight,
    //category,
    //is_enabled,
    is_new,
    is_hit,
    is_preview
  } = props

  const [count, addCount, removeCount] = useCount(id)

  //const [isLoading, setIsLoading] = useState(true)

  

  // MOUNT
  useEffect(() => {
    

    /*
    if(cookie.load(COOKIE_NAME)){
      let theItem = cookie.load(COOKIE_NAME).filter(item => item.id == props.id)[0];
      if(theItem)
        setCount(theItem.amount);
    }
    */
  }, []);

  // COUNT CHANGED, WRITE TO COOKIES
  useEffect(() => {
    /*

    if(cookie.load(COOKIE_NAME)){
      let values = cookie.load(COOKIE_NAME);
      let check = false;
      values.map(val => {
        if(val.id == props.id){
          check = true;
          val.amount = count;
        }
      });
      if(!check){
        values.push({
          id: props.id,
          amount: count
        });
      }
      cookie.save(COOKIE_NAME, values, { path: '/'})
    } else {
      cookie.save(COOKIE_NAME, [{
        id: props.id,
        amount: count
      }], { path: '/'})
    }
    */

  }, [count]);

  return (
      <div className={STYLES.THUMB + (is_new ? " " + STYLES.THUMB_NEW : "") + (is_hit ? " " + STYLES.THUMB_HIT : "") } >
        <div className={ STYLES.IMAGE_CONTAINER }>
          <div onClick={ addCount } className="noselect menu-item-thumb__add-btn">+</div>
          <div className={"menu-item-thumb__added-count" + (count > 0 ? " menu-item-thumb__added-count_visible" : "" )}>{ count }</div>
          <div onClick={ removeCount } className={ "noselect menu-item-thumb__remove-btn" + (count > 0 ? " menu-item-thumb__remove-btn_visible" : "" )}>-</div>
          <img className="menu-item-thumb__img" src={ image_link ? image_link : NoPhoto }></img>
        </div>
        {
          is_preview ?
          (<span className="menu-item-thumb__title">{title}</span>)
          :
          (<Link to={'/menu/items/' + id} className="menu-item-thumb__title">{title}</Link>)
        }

        <p className="menu-item-thumb__desc">{ description }</p>
        <div className='menu-item-thumb__bottom'>
          <span className="menu-item-thumb__weight">{ weight } г.</span>
          <span className="menu-item-thumb__price">{ price } р</span>
        </div>
      </div>
  )

}

export default MenuItemThumb;