import { useState, useEffect } from 'react';
import SushiImg from '/src/img/sushi.jpg';
import RollsImg from '/src/img/rolls.jpg';
import SaladImg from '/src/img/salad.jpg';
import PizzaImg from '/src/img/pizza.jpg';
import SoupImg from '/src/img/soup.jpg';
import SetsImg from '/src/img/set.jpg';
import DessertImg from '/src/img/dessert.jpg';
import ColdSnacksImg from '/src/img/cold-snacks.jpg';
import HotSnaksImg from '/src/img/hot-snacks.jpg';

import Layout from '../../components/layout/IndexLayout';
import MenuCategory from '../../components/menu/MenuCategory';
import Loader from '../../widgets/LoaderScreen'
import { ICategoryItem } from '@/app/types/types';

//import BgImg from '../../public/img/35.jpg';

const localData: ICategoryItem[] = [
  {
    id: '0',
    image_src: SushiImg,
    title: 'Суши',
    to: 'sushi'
  },
  {
    id: '1',
    image_src: RollsImg,
    title: 'Роллы',
    to: 'rolls'
  },
  {
    id: '2',
    image_src: SetsImg,
    title: 'Cеты',
    to: 'sets'
  },
  {
    id: '3',
    image_src: SoupImg,
    title: 'Горячие блюда',
    to: 'hot'
  },
  {
    id: '4',
    image_src: PizzaImg,
    title: 'Пицца',
    to: 'pizza'
  },
  {
    id: '5',
    image_src: HotSnaksImg,
    title: 'Горячие закуски',
    to: 'hot-snacks'
  },
  {
    id: '6',
    image_src: ColdSnacksImg,
    title: 'Холодные закуски',
    to: 'cold-snacks'
  },
  {
    id: '7',
    image_src: SaladImg,
    title: 'Салаты',
    to: 'salads'
  },
  {
    id: '8',
    image_src: RollsImg,
    title: 'Другое',
    to: 'other'
  },
  {
    id: '9',
    image_src: DessertImg,
    title: 'Десерты',
    to: 'desserts'
  }
]

export function Menu() {

  const [data, setData] = useState<ICategoryItem[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  // Mount
  useEffect(() => {
    //getCategories();
    setData(localData)
  }, []);

  useEffect(() => {
    if(localData.length) setIsLoaded(true)
  }, [localData])

  /*
  useEffect(() => {
    if(categories)
      setData(categories.map(cat => {
        //if(cat.is_enabled)
          return {
            id: cat.id,
            imgSrc: SushiImg,
            title: cat.title,
            description: cat.description,
            to: cat.link_title
          }
      }));
      setIsLoaded(true);
  }, [categories]);
  */

  return (
    <Layout navTitle='Меню' backTitle='' backTo=''>
      <Loader isLoaded={ isLoaded } />
      <div className="menu-wrapper">
        <div className="menu-category-container">
          <MenuCategory data={ data } />
        </div>
      </div>
    </Layout>
  );
}

/*
function mapStateToProps (state) {
  return { categories: state.categories.categories }
};
*/

//export default connect(mapStateToProps, {getCategories})(Menu)
export default Menu