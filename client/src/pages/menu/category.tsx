
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
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		setItemsToShow(items)
	}, [items])

  		return(
    		<>
    		  	{
					itemsToShow.length > 0
					?
    		    	itemsToShow.map((item: IItem) =>(
    		    	  		<Fragment key={item.id} >
    		    	    		<MenuItem
    		    	    			id={item.id}
    		    	    			image_src="/static/img/cezar.jpg"
									image_link={ item.image_link }
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
    		</>
		)
}

const ShowPlaceholders = () => {
	const previewData = [0, 1, 2];
  	return(
    	<Fragment> { previewData.map(item => <ItemThumbPlaceholder key={ item } />) } </Fragment>
  	)
}

interface ICategoryProps {
	categories: ICategory[],
  	items: IItem[]
}

function Category(props: ICategoryProps) {
	const [categoryId, setCategoryId] = useState('0')
	const [pageTitle, setPageTitle] = useState('...')
	const [dataToShow, setDataToShow] = useState<IItem[]>([])
	const [loaded, setLoaded] = useState(false)
	const [catLink, setCatLink] = useState('')
	const params = useParams()

	useEffect(() => {
		if(params && params.category) {
			setCatLink(params.category);
		}
	},[])

	useEffect(() => {
		if(catLink !== '') {
			const category = props.categories.filter(cat => cat.link === catLink)[0];
			if(category){
				setCategoryId(category.id)
				setPageTitle(category.title)
			}
		}
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

export default Category;