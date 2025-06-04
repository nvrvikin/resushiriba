import { Route, Routes } from 'react-router-dom';

import MenuMain from './menu/menu';
import MenuCategory from './menu/category';
import MenuItem from './menu/item';
import NoMatch from './noMatch';

const categories = [
    {
        id: '200',
        title: 'Суши',
        cat_link: 'sushi'
    }
]

const items = [
    {
        id: '500',
        title: 'Шимияки',
        description: 'Поклонение Солнцу — давно забытая вера, но когда-то она была широко популярна среди великих воинов. Члены этого ковенанта могут оставлять свои золотые знаки, чтобы их братьям было проще их призвать.',
        image_link: '',
        price: 200,
        weight: 150,
        category: '200',
        is_enabled: true,
        is_hit: true,
        is_new: true
    }
]

function menuRouter() {
    return (
        <Routes>
            <Route path="/" element={ <MenuMain /> } />
            <Route path="/categories/:category" element={ <MenuCategory categories={ categories } items={ items } /> } />
            <Route path="/items/:itemId" element={ <MenuItem /> } />
            <Route element={<NoMatch />} />
        </Routes>
    )
}

export default menuRouter
