import { Fragment } from 'react';
import HandImg from '../../public/img/hand.png';

const HomeHand = () => {
    return(
        <Fragment>
            <img id="home-hand" src={ HandImg } className="hand-img" />
        </Fragment>
    )
}

export default HomeHand