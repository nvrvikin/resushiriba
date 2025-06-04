
import { Fragment, useEffect, useState } from 'react';
import LoaderScreen from '../../widgets/LoaderScreen';
import Layout from '../../components/layout/IndexLayout';
import MenuItem, { ItemThumbPlaceholder } from '../../widgets/Menu/ItemThumb';
import { ICategory, IItem } from '../../app/types/types';
import { useParams } from 'react-router-dom';
import CATEGORY_LABELS from '@/app/data/labels/menu/category';

interface IShowLoadedItems {
	items: IItem[]
}

function ShowLoadedItems({items}: IShowLoadedItems) {
	const [itemsToShow, setItemsToShow] = useState<IItem[]>([])

	useEffect(() => {
		setItemsToShow(items)
		console.log('[ShowLoadedItems]: ITEMS CHANGED. items:' + JSON.stringify(items))
	}, [items])

  		return(
    		<Fragment>
    		  	{
					itemsToShow.length > 0
					?
    		    	itemsToShow.map((item: IItem) =>(
    		    	  		<Fragment key={item.id} >
    		    	    		<MenuItem
    		    	    			id={item.id}
    		    	    			image_src="/static/img/cezar.jpg"
									image_link=''
    		    	    			title={item.title}
    		    	    			description={item.description} 
    		    	    			price={item.price}
    		    	    			weight={item.weight}
    		    	    			category={item.category}
    		    	    			is_new={item.is_new}
    		    	    			is_hit={item.is_hit}
    		    	    			is_preview={false}
									is_enabled={true}
    		    	    		/>
    		    	  		</Fragment>
						)
    		    	)
					:
					<span>{ CATEGORY_LABELS.NO_ITEMS.RU }</span>
    		  	}
    		</Fragment>
		)
}

const ShowPlaceholders = () => {
	const previewData = [0, 1, 2];
  	return(
    	<Fragment> { previewData.map(item => <ItemThumbPlaceholder key={ item } />) } </Fragment>
  	)
}

/*
const DrawItems = (props: IItem[]) => {
	if(loaded) {
    	return(<ShowLoadedItems data={ props } length={ props.length } />)
	} else {
		return (<ShowPlaceholders />)
	}
}
*/

interface ICategoryProps {
	categories: Array<ICategory>,
  	items: Array<IItem>
}

function Category(props: ICategoryProps) {
	const [categoryId, setCategoryId] = useState(0)
	const [pageTitle, setPageTitle] = useState('...')
	const [dataToShow, setDataToShow] = useState<IItem[]>([])
	const [loaded, setLoaded] = useState(false)
	const [catLink, setCatLink] = useState('')
	const params = useParams()

	useEffect(() => {
		//props.getCategories();
  	  	//props.getItems();
  	  	//const { match: { params } } = props;
		console.log('PARAMS: ' + JSON.stringify(params))
		if(params && params.category) {
			setCatLink(params.category);
			console.log('CAT_LINK: ' + params.category)
		}
  	  	//console.log("params category: " + params.category)
	},[])

	useEffect(() => {
		//if(props.items != prevProps.items || props.categories != prevProps.categories 
			//|| (props.items.length && !loaded)) {
			//if(!prevState.loaded) {
				//if(!prevState.pageTitle || prevState.pageTitle == '...' || !prevState.categoryId){
				if(catLink !== '') {
					console.log('[catLink !== ""] props.categories: ' + JSON.stringify(props.categories))
					console.log('[catLink !== ""] props.categories[0].cat_link: ' + JSON.stringify(props.categories[0].cat_link))
					console.log('[catLink !== ""] CAT_LINK: ' + catLink)

					const category = props.categories.filter(cat => cat.cat_link === catLink)[0];
					console.log('[catLink !== ""] category: ' + JSON.stringify(category))
					if(category){
						setCategoryId(category.id)
						setPageTitle(category.title)
						//} else if(!dataToShow.length && props.items.length) {
					}
					
					
				}
				//}
			//}
		//}
	}, [catLink])

	useEffect(()=> {
		if(categoryId) {
			const data = props.items.filter(item => item.category == categoryId);
			setDataToShow(data)
			setLoaded(true)
		}
	}, [categoryId])

	return (
		<Fragment>
			<LoaderScreen isLoaded={loaded} />
			<Layout navTitle={pageTitle} backTo='/menu' backTitle='Меню'>
				<div className="menu-items-wrapper">
					<div className="menu-items-container">
						{
							loaded
							?
							(<ShowLoadedItems items={ dataToShow } />)
							:
							(<ShowPlaceholders /> )
						}
					  </div>
				</div>
			</Layout>
		</Fragment>
	)
}
/*
export class CCategory extends Component {

  	static propTypes = {
  	  	categories: PropTypes.array.isRequired,
  	  	items: PropTypes.array.isRequired
  	};

  	componentDidMount(){
  	  	this.props.getCategories();
  	  	this.props.getItems();
  	  	const { match: { params } } = this.props;
		this.cat_link = params.category;
  	  	console.log("params category: " + params.category)
  	}

}
*/
/*
const mapStateToProps = state => ({
  	categories: state.categories.categories,
  	items: state.items.items
});
*/

//export default connect(mapStateToProps, { getCategories, getItems })(Category);
export default Category;