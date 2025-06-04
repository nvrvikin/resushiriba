//import { useEffect, useState } from 'react';
import Logo from '@/shared/ui/icons/LogoIcon';

interface ILoaderScreen {
    isLoaded: boolean
}

export const loaderDocListener = (onPageLoad: () => void) => {
      if (document.readyState === 'complete') {
        onPageLoad();
      } else {
        window.addEventListener('load', onPageLoad, false);
        // Remove the event listener when component unmounts
        return () => window.removeEventListener('load', onPageLoad);
      }
}

function LoaderScreen({isLoaded}: ILoaderScreen) {
    return (
        <div className="loader-screen" style={{ opacity: (isLoaded ? '0' : '1') }}>
            <div className="loader-screen-elements" >
                <div className="loader-screen__light"></div>
                <Logo className="loader-screen__image"></Logo>
            </div>
        </div>
    )
}

export default LoaderScreen;