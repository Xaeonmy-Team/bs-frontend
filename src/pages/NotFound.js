import React from "react"
import NotFoundIMG from "../assets/NotFoundIMG.png"

const NotFound = () => {
    return (
      <div className="not-found">
        <img src={NotFoundIMG} alt="404 Not Found" className="not-found-image" />
      </div>
    )
  }
export default NotFound;