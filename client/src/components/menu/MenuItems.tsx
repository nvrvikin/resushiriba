
//import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
//import { getItems } from '../../actions/items';
import { IMenuItem } from '@/app/types/types';

interface IMenuItems {
    items: IMenuItem[]
}

function MenuItems(props: IMenuItems) {
    const { items } = props

    return (
            <div className="menu-wrapper">
                <div className="menu-category-container">
                    { 
                        items.map(item => (
                            <div key={ item.id }>
                                <img src={ item.image_src } />
                                <h3>{ item.title }</h3>
                                <a href={ item.title }></a>
                            </div>
                        )
                    )}
                </div>
            </div>
        )
}

/*
export class MenuItemss extends Component {
    static propTypes = {
        items : PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        
    }
}
*/
/*
const mapStateToProps = state => ({
    items: state.items.items
});

export default connect(mapStateToProps, { getItems })(MenuItems); 
*/

export default MenuItems