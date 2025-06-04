import { Fragment, useState, useEffect, useRef, useId } from 'react';

//import { connect } from 'react-redux';
//import { getItems } from '../actions/items';
import itemsData from '../app/data/localItems'

import SmokeLeftImg from '/src/img/s2.png';
import BlackStoneWallImg from '/src/img/black-stone-wall.jpg';
import HomeLabelImg from '/src/svg/splashed_home_label.svg';
import CheckHitsImg from '/src/svg/check-hits.svg';

import Header from '../widgets/Header';
import Footer from '../widgets/Footer/Footer';
import MenuItem from '../widgets/Menu/ItemThumb/ItemThumb';
import Loader from '../widgets/LoaderScreen'

//import BgImg from '/src/img/32.png';


//import RoundedUnderIcon from '../components/icons/RoundedUnderIcon';

export function ItemPreviw() {
    return (
        <div className="menu-item-previw-thumb">
            <div className="menu-item-thumb__img-container"></div>
            <span>Загрузка</span>
        </div>
    )
}

export function Index({ /*items, getItems*/ }) {

    //const ON_LOADING_ITEMS_LABEL = 'Загрузка...';

    //let handRef = useRef<HTMLImageElement | null>(null);
    //let handLightRef = useRef<HTMLImageElement | null>(null);
    let SmokeLeftRef = useRef<HTMLImageElement | null>(null);
    
    //const [homeTitle, setHomeTitle] = useState('SushiРыба');
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, /*setItems*/] = useState(itemsData)

    const placeholderItem = {
        imgSrc: '',
        title: '',
        desc: '', 
        price: -1,
        weight: -1,
        is_hit: false,
        isPlaceHolder: true,
        to: "-1"
    }

    const [hitsData, setHitsData] = useState([
        {
            id: useId(),
            ...placeholderItem
        },
        {
            id: useId(),
            ...placeholderItem
        },
        {
            id: useId(),
            ...placeholderItem
        },
    ]);

    /*
    function handleHandsOnScroll() {
        let offset = window.scrollY;
        let clientHeight = window.innerHeight;
        let height = window.document.body.offsetHeight - clientHeight;
        
        if(handLightRef.current && handRef.current) {

            handLightRef.current!.style.opacity = '0';
            handRef.current!.style.top = "calc(70% - " + offset * 0.9 + "px)";
            
            handLightRef.current.style.top = "calc(70% - " + offset * 0.9 + "px)" ; 
            handLightRef.current.style.opacity = (offset / height) + '';
        }
    }
    */

    function handleFirstSmokeOnScroll() {
        let offset = window.scrollY;
        //let clientHeight = window.innerHeight;
        //let height = window.document.body.offsetHeight - clientHeight;

        if(SmokeLeftRef.current) {
            SmokeLeftRef.current!.style.bottom = `calc(-150px - ${offset * 0.05}px)`
        }
    }

    // On Mount
    useEffect(() => {
        //getItems();
        window.addEventListener("scroll", handleFirstSmokeOnScroll);
        let offset = window.scrollY;
        if(SmokeLeftRef.current) {
            SmokeLeftRef.current.style.bottom = `calc(-150px - ${offset * 0.05}px)`
        }

        // On Unmount
        return () => {
            window.removeEventListener('scroll', handleFirstSmokeOnScroll);
        }
    }, []);
    
    useEffect(() => {
        if(items[0] && items[1] && items[2]){
            let filteredItems = items.filter(item => item.is_hit);
            const length = filteredItems.length;
            
            if(length > 2)
                filteredItems = [
                    filteredItems[0],
                    filteredItems[1],
                    filteredItems[2]
                ]
            else
                
                filteredItems = [
                    {...items[Math.round(Math.random() * items.length)], id: '601'},
                    {...items[Math.round(Math.random() * items.length)], id: '602'},
                    {...items[Math.round(Math.random() * items.length)], id: '603'}
                ]

            setIsLoaded(true);
            setHitsData(filteredItems);
        }
    }, [items]);
    
    
    
    return (
        <Fragment>
            <Header className="header_home" />
            <Loader isLoaded={isLoaded} />
            <div className="home-wrapper">
                <div className='home-dark-overlay'></div>
                <section className="greet-wrapper" style={{ backgroundImage: `url(${BlackStoneWallImg})`}}>
                    <div className="home-label">
                        <img className="home-label__vector" src={ HomeLabelImg } alt="Вкус Японии"></img>
                    </div>
                    <div className='home-top-light home-top-light_warm' />
                    <div className='home-top-light home-top-light_hot' />
                    <div className='home-top-light home-top-light_cold' />
                    <div ref={SmokeLeftRef} className="home-smoke home-smoke_left" style={{ backgroundImage: `url(${SmokeLeftImg})`}} />
                </section>                

                <section className="hits-wrapper">
                    <img className='hits__title' src={ CheckHitsImg } alt="Попробуйте наши хиты"></img>
                    <div className='hits-items'>
                        {
                            hitsData.map(item =>
                                item?.isPlaceHolder ? (
                                        <ItemPreviw key={item?.id} />
                                    ) : (
                                        <MenuItem
                                            key={item?.id}
                                            id={item?.id}
                                            image_src="/static/img/cezar.jpg"
                                            image_link=''
                                            title={item?.title}
                                            description={item?.desc} 
                                            price={item?.price}
                                            weight={item?.weight}
                                            category={'0'}
                                            is_new={false}
                                            is_hit={true}
                                            is_preview={false}
                                            is_enabled={true}
                                            
                                        />
                                    )
                            )                        
                        }
                    </div>
                </section>
            </div>
            <Footer />
        </Fragment>
    )
}

/*
function mapStateToProps (state) {
    return { items: state.items.items }
};
*/

//export default connect(mapStateToProps, { getItems })(Index);
export default Index;