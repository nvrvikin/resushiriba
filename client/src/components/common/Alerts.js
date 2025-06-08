import { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
    
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired 
    }

    componentDidUpdate(prevProps) {
        const { error, alert } = this.props;
        if(error !== prevProps.error){
            if(error.msg.title){
                alert(`Название: ${error.msg.name.join()}`);
            } else {
                alert('Ошибка');
            }
        }

        if(message !== prevProps.message){
            if(message.itemAdded) alert(message.itemAdded)            
        }
    }
    
    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    messages: state.messages
});

export default connect(mapStateToProps)(Alerts);