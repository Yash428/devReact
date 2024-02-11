import React from 'react'

function Button({
    children,
    className="",
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    ...props
}) {
  return (
    <div>
        <button className={`px-4 py-2 rounded-full border-solid ${className} ${bgColor} ${textColor}`}{...props}>{children}</button>
    </div>
  )
}

export default Button