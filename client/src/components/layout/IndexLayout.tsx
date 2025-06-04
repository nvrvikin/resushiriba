import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer/Footer';

import ArrowIcon from '@/shared/ui/icons/ArrowIcon';

interface IIndexLayout {
  backTitle: string,
  backTo: string,
  navTitle: string,
  children: React.ReactNode,
}

export function IndexLayout(props: IIndexLayout){


  return (
    <Fragment>
      <Header />
      <div className='nav__title-container'>
        {props.backTitle != '' ?
          <Link to={props.backTo} className='nav__back-btn'><ArrowIcon className="nav__back-btn-arrow" />{props.backTitle}</Link>
        : '' }
        <h1 className="nav__title">{props.navTitle}</h1>
      </div>
      <div className="layout-wrapper" onScroll={() => console.log("1")/*event => console.log(event.nativeEvent.contentOffset.y)*/}>
        {props.children}
      </div>
      <Footer />
    </Fragment>
  );
}

export default IndexLayout;