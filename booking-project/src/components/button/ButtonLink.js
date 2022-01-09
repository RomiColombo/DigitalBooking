import React from 'react'
import { Link } from 'react-router-dom'
export const ButtonLink = ({nameClass = 'btn',text,url}) => {
    return (
      <Link className = {nameClass} to = {url}>
        {text}
       </Link>         

    )
}
