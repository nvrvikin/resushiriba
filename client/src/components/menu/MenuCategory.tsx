import { ICategoryItem } from '@/app/types/types';
import { Link } from 'react-router-dom';

interface IMenuCategory {
  data: ICategoryItem[]
}

function MenuCategory(props: IMenuCategory) {
  const { data } = props

  return (
    <>
    {
      data.map(item =>
      <Link className="menu-category" key={item.id} to={'/menu/categories/' + item.to}>
        <div className="menu-category__img-container">
          <img className="menu-category__img" src={item.image_src}></img>
        </div>
        <div className="menu-category__title-box">
          <h1 className="menu-category__title">{item.title}</h1>
        </div>
      </Link>
      )
    }
  </>
  )
}

export default MenuCategory;