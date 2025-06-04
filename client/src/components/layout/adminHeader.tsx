import {Link} from 'react-router-dom';
import Logo from '../icons/LogoIcon';

interface IAdminHeader {
    active: string
}

export default function adminHeader(props: IAdminHeader) {
    return (
        <nav className="admin-header">
            <div className="admin-header-wrapper">
                <Link className={"admin-hedaer__item" + (props.active == "home" ? " admin-header__item_active" : "")} to="/admin">Панель администратора</Link>
                <Link className={"admin-hedaer__item" + (props.active == "menu" ? " admin-header__item_active" : "")} to="/admin/menu">Товары и категории</Link>
                <Link className={"admin-hedaer__item" + (props.active == "users" ? " admin-header__item_active" : "")} to="/admin/users">Пользователи</Link>
                <Link className={"admin-hedaer__item" + (props.active == "pages" ? " admin-header__item_active" : "")} to="/admin/pages">Настройка страниц</Link>
                <Link className={"admin-hedaer__item" + (props.active == "auth" ? " admin-header__item_active" : "")} to="/admin/auth/signin">Войти</Link>
                <Link className={"admin-hedaer__item" + (props.active == "auth" ? " admin-header__item_active" : "")} to="/admin/auth/signout">Выйти</Link>
                <Link className={"admin-hedaer__item" + (props.active == "site" ? " admin-header__item_active" : "")} to="/"><Logo className="admin-header__item-logo" /> На сайт</Link>
            </div>
        </nav>
    )
}
