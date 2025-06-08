import { Fragment } from 'react';
import LogoIcon from '@/shared/ui/icons/LogoIcon';
import { Link } from 'react-router-dom';
import HeaderSm from './HeaderSm';
import { useCart } from '@/app/contexts/cart/CartContext';

export interface IHeaderProps {
    className?: string
}

export default function Header(props: IHeaderProps) {
    const { items } = useCart()
    const defineClassName = () => {
        if (props?.className) return ' ' + props.className
        return ''
    }

 
    return (
        <Fragment>
            <header className={"header" + defineClassName() }>
                <nav className='header__nav'>
                    <Link to="/menu" className='header-nav__link'>Меню</Link>
                    <Link to="/news" className='header-nav__link'>Акции</Link>
                    <Link to="/" className="header-nav__link header-nav__link_logo">
                        <LogoIcon />
                    </Link>
                    <Link to="/order" className='header-nav__link header-nav__link_order'>
                      <span className='link-order__label'>Заказ
                        <span className='link-order__index'>{ items.length ? items.length : '' }</span>
                      </span>
                    </Link>
                    <Link to="/contacts" className='header-nav__link'>Контакты</Link>
                </nav>
            </header>
            <HeaderSm />
        </Fragment>
    )
}

//export default Header
