import React, { Component } from 'react'
import "./style.css"


function Loading(props) {
  return (
    <div className="spinner-container">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h2 className='text-center lead'>{props.title}</h2>
        </div>
      </div>
    </div>
  <div className="loading-spinner">
  </div>
</div>
  )
}

export default Loading
