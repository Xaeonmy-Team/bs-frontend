import React from "react"
import notFoundImage from "../assets/notFoundImage.png"

const NotFound = () => {
    return (
      <div className="not-found">
        <img src={notFoundImage} alt="404 Not Found" className="not-found-image" />
      </div>
    )
  }
export default NotFound;