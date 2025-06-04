
import { Fragment, useState, useEffect } from 'react';
import Layout from '../../components/layout/IndexLayout';
import LoaderScreen from '../../widgets/LoaderScreen';
import { Link } from 'react-router-dom';

export function MenuItem({ /*match, history, itemId, items, categories, getItems, getCategories */}) {

  const [itemData, /*setItemData*/] = useState({
    id: 0,
    title: titler('1'),
    description: 'Это чья-то кара или случай или злой рок. Это что, это что, трюьма или живой морг. Они хотят крылья чтоб летать. Чтоб летать. Я беру, что в зипе, для ребят. Для ребят.'
  });

  const [categoryTitle, /*setCategoryTitle*/] = useState('...');
  const [categoryLink, /*setCategoryLink*/] = useState();
  const [isLoaded, /*setIsLoaded*/] = useState(false);

  const [recData, /*setRecData*/] = useState([
    {
      id: '1',
      title: '...',
      description: 'Загрузка...',
      img: '',
      to: '',
      price: 'хххх'
    },
    {
      id: '2',
      title: '...',
      description: 'Загрузка...',
      img: '',
      to: '',
      price: 'хххх'
    },
    {
      id: '3',
      title: '...',
      description: 'Загрузка...',
      img: '',
      to: '',
      price: 'хххх'
    }
  ]);

  function titler(id: string){
    switch(id){
      case '0':
        return 'Жалкий вид и не более'
      case '1':
        return 'Первый человек';
      case '2':
        return 'Как рыба гниёт с головы';
      default:
        return 'Остатки';
    }
  }

  //MOUNT
  useEffect(() =>{
    //getItems();
    //getCategories();
  }, []);

  //ITEMS CHANGED
  /*useEffect(() => {
    if(items.length){
      setRecData(() =>[
        items[0],
        items[1],
        items[2]
      ]);
      console.log("itemId: " + match.params.itemId)
      const currentItem = items.filter(item => item.id == match.params.itemId)[0];
      if(currentItem)
        setItemData(currentItem);
    }
  }, [items]);*/

  /*useEffect(() => {
    if(categories.length > 0 && itemData.category && !categoryLink){
      const cat = categories.filter(cat => itemData.category == cat.id)[0];
      if(cat){
        setCategoryTitle(cat.title);
        setCategoryLink(cat.link_title);
        setIsLoaded(true);
      }
    }
  }, [categories, itemData]);*/

  return (
    <Fragment>
    <LoaderScreen isLoaded={isLoaded} />
    <Layout backTitle={ categoryTitle } backTo={ '/menu/categories/' + itemData.title } navTitle='' >
      <div className="item-wrapper">
        <div className='item-container'>
          <div className="item">
            <div className="item__top-wrapper">
              <h1 className='item__title'>{ itemData.title }</h1>
              <span className="item__category">
                Категория:
                &nbsp;
                <Link className="item__category-link" to={ categoryLink ? '/menu/categories/' + categoryLink : '/menu'}>{categoryTitle}</Link>
              </span>
            </div>
            <div className="item__under-wrapper">
              <img className='item__img'></img>
              <p className='item__desc'>{ itemData.description }</p>
            </div>
          </div>
        </div>
        <div className="item-recommendations">
          {
            recData.map(item =>
              <Link to={'/menu/items/' + item.id} 
              key={item.id}
              className="item-recommened-thumb"
              style={{backgroundImage: ''}}>
                <h3 className="item-recommened-thumb__title">{item.title}</h3>
                <p className="item-recommened-thumb__desc">{item.description}</p>
                <span className="item-recommened-thumb__price">{item.price + 'р.'}</span>
              </Link>
            )                        
          }
        </div>
      </div>
    </Layout>
    </Fragment>
  );
}
/*
const mapStateToProps = state => ({
  categories: state.categories.categories,
  items: state.items.items
});
*/
//export default connect(mapStateToProps, { getCategories, getItems })(MenuItem);
export default MenuItem