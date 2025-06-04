import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ICategoryItem } from '../../pages/menu/menu';

interface IMenuCategory {
  data: ICategoryItem[]
}

function MenuCategory({data}: IMenuCategory) {
  return (
    <Fragment>
    {
      data.map(item =>
      <Link className="menu-category" key={item.id} to={'/menu/categories/' + item.to}>
        <div className="menu-category__img-container">
          <img className="menu-category__img" src={item.imgSrc}></img>
        </div>
        <div className="menu-category__title-box">
          <h1 className="menu-category__title">{item.title}</h1>
        </div>
      </Link>
      )
    }
  </Fragment>
  )
}

export default MenuCategory;