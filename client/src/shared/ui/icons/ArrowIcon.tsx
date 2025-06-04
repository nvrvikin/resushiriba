import { IIcon } from "@/app/types/types";

function ArrowIcon({ className }: IIcon) {
  return (
    <div className={ className }>
      <svg version="1.1" id="arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 97.66 278" xmlSpace="preserve">
        <path d="M447.8,253.82c.07-.14.13-.29.19-.43s.11-.27.16-.41.06-.22.1-.32.11-.35.15-.53,0-.16.05-.24.09-.41.12-.61,0-.18,0-.27.05-.39.06-.58v-.86c0-.19,0-.38-.06-.58s0-.18,0-.27-.08-.4-.12-.61,0-.16-.05-.24-.1-.35-.15-.53-.06-.21-.1-.32-.11-.27-.16-.41-.12-.29-.19-.43-.1-.2-.15-.3-.18-.34-.28-.51a.25.25,0,0,0,0-.07l-79.66-130a9,9,0,0,0-15.34,9.4L429.1,250,352.33,375.3a9,9,0,1,0,15.34,9.4l79.66-130a.25.25,0,0,0,0-.07c.1-.17.19-.34.28-.51S447.76,253.92,447.8,253.82Z" transform="translate(-351 -111)"/>
      </svg>
    </div>
  )
}
  
export default ArrowIcon;