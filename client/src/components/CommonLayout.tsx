import { Fragment, ReactNode } from 'react';
import Helmet from 'react-helmet';
import SushiRibaIcon192x192 from '../../static/pic/sushi.riba-icon_192x192.png';
import SushiRibaIcon144x144 from '../../static/pic/sushi.riba-icon_144x144.png';
import SushiRibaIcon96x96 from '../../static/pic/sushi.riba-icon_96x96.png';
import SushiRibaIcon48x48 from '../../static/pic/sushi.riba-icon_48x48.png';
//import Style from '../../static/base.css';
//<link rel="stylesheet" type="text/css" href={ Style } />

interface ICommonLayout {
    children: ReactNode
}

function CommonLayout(props: ICommonLayout) {
    return (
        <Fragment>
            <head>
                <Helmet>
                    <meta charSet="UTF-8" />
                    <link rel="icon" sizes="192x192" href={SushiRibaIcon192x192} />
                    <link rel="icon" sizes="144x144" href={SushiRibaIcon144x144} />
                    <link rel="icon" sizes="96x96" href={SushiRibaIcon96x96} />
                    <link rel="icon" sizes="48x48" href={SushiRibaIcon48x48} /> 
                    <link rel="apple-touch-icon" href={SushiRibaIcon192x192} />
                    <meta name="theme-color" content="#dc5a3c" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    
                    <title>СушиРыба</title>
                    <meta name="description" content="RE: SushiRiba Website." />
                    <meta name="apple-mobile-web-app-title" content="СушиРыба" />
                </Helmet>
            </head>
            {props.children}
            
        </Fragment>
    )
}

export default CommonLayout
