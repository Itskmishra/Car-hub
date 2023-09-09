'use client'

import Image from "next/image"
import { MouseEventHandler } from "react"

interface CustomButtonInterface {
  title:string,
  btnStyle?:string,
  handleClick?:MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean,
  type?:"button"|"submit",
  textStyle?:string,
  rightIcon?:string,
}

const CustomButton = ({disabled, type, btnStyle, textStyle, title, rightIcon, handleClick}:CustomButtonInterface) => {
  return (
    <button disabled={disabled}
            type={type}
            className={`custom-btn ${btnStyle}`}
            onClick={handleClick}>
      <span className={`flex-1 ${textStyle}`}>
        {title}
      </span>
        {rightIcon && (
          <div className="relative w-6 h-6">
              <Image  src={rightIcon}
                      alt="right-icon"
                      fill
                      className="object-contain"/>
          </div>
        )}
    </button>
  )
}
export default CustomButton