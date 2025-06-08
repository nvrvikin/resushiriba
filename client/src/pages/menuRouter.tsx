import { Route, Routes } from 'react-router-dom';

import MenuMain from './menu/menu';
import MenuCategory from './menu/category';
import MenuItem from './menu/item';
import NoMatch from './noMatch';
import localItems from '@/app/data/localItems';
import localCategories from '@/app/data/localCategories';

function menuRouter() {
    return (
        <Routes>
            <Route path="/" element={ <MenuMain /> } />
            <Route path="/categories/:category" element={ <MenuCategory categories={ localCategories } items={ localItems } /> } />
            <Route path="/items/:itemId" element={ <MenuItem /> } />
            <Route element={<NoMatch />} />
        </Routes>
    )
}

export default menuRouter
