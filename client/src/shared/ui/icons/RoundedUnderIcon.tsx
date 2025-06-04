import React, {Fragment} from 'react';

const RoundedUnderIcon = props => (
    <Fragment>
      <svg className={props.className} version="1.1" id="rounded_under" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
			 viewBox="0 0 1920 80" xmlSpace="preserve" patternUnits="userSpaceOnUse">
         <clipPath id="rounded-under-clip">
			    <path d="M-.5.5h1920c0,80-959,79.5-959,79.5S-.5,80.5-.5.5Z"/>
         </clipPath>
         <image clipPath="url(#rounded-under-clip)"
              xlinkHref={props.imgSrc}
              src={props.imgSrc} alt="Image"
              style={{ backgroundImage: `url(${props.imgSrc})`}}
              className="rounded-under__img" 
         ></image>
		  </svg>
    </Fragment>
  );
  
  export default RoundedUnderIcon;