import { useState } from "react";
import { Link } from "react-router-dom"
import LogoIcon from "@/shared/ui/icons/LogoIcon";
import { useCart } from "@/app/contexts/cart/CartContext";

export interface IHeaderSmProps {
    className?: string
}

const HeaderSm = (props: IHeaderSmProps) => {
    const { items } = useCart()
    const [smOpened, setSmOpened] = useState(false);

    const defineClassName = () => {
        if (props?.className) return ' ' + props.className
        return ''
    }
    
    return (

        <header className={"header-sm" + defineClassName() }>
                <div className='header-sm__head'>
                    <div className='header-sm__head-wrapper'>
                        <Link to="/" className="navMenuLink navMenuLink_logo">
                            <LogoIcon />
                        </Link>
                        <div
                            className={!smOpened ? 'header-sm__menu-btn' : 'header-sm__menu-btn header-sm__menu-btn_opened'}
                            onClick={() => setSmOpened(!smOpened)}
                        >
                            <div className={!smOpened ? 'header-sm__menu-btn-bar' :'header-sm__menu-btn-bar header-sm__menu-btn-bar_first-opened'}></div>
                            <div className={!smOpened ? 'header-sm__menu-btn-bar' :'header-sm__menu-btn-bar header-sm__menu-btn-bar_second-opened'}></div>
                            <div className={!smOpened ? 'header-sm__menu-btn-bar' :'header-sm__menu-btn-bar header-sm__menu-btn-bar_third-opened'}></div>
                        </div>
                    </div>
                </div>
                <div className={smOpened == false ? 'header-sm__items hidden' : 'header-sm__items'}>
                    <Link to='/' className='header-sm-items__item'>Главная</Link>
                    <Link to="/menu" className='header-sm-items__item'>Меню</Link>
                    <Link to="/news" className='header-sm-items__item'>Акции</Link>
                    <Link to="/order" className='header-sm-items__item header-sm-items__item_order'>
                    <span>
                        Заказ
                        <span className='order-index'>{ items.length ? items.length : '' }</span>
                    </span>
                      
                    </Link>
                    <Link to="/contacts" className='header-sm-items__item'>Контакты</Link>
                </div>
            </header>
    )
}

export default HeaderSm