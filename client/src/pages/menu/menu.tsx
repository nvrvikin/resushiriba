import { useState, useEffect } from 'react';


import Layout from '../../components/layout/IndexLayout';
import MenuCategory from '../../components/menu/MenuCategory';
import Loader from '../../widgets/LoaderScreen'
import { ICategoryItem } from '@/app/types/types';
import localCategories from '@/app/data/localCategories';

//import BgImg from '../../public/img/35.jpg';



export function Menu() {

  const [data, setData] = useState<ICategoryItem[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  // Mount
  useEffect(() => {
    //getCategories();
    window.scrollTo(0, 0)
    setData(localCategories)
  }, []);

  useEffect(() => {
    if(localCategories.length) setIsLoaded(true)
  }, [localCategories])

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