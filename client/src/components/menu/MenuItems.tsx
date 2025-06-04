import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems } from '../../actions/items';
import MenuCategory from './MenuCategory';

export class MenuItems extends Component {
    static propTypes = {
        items : PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu-category-container">
                    { 
                        this.props.items.map(item => (
                            <MenuCategory key={ item.id }
                              imgSrc={ item.image_source }
                              title={ item.title }
                              to={ item.to }
                            />
                        )
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.items.items
});

export default connect(mapStateToProps, { getItems })(MenuItems); 