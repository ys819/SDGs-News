import React from 'react'
import Select from './Select'
import imgSdgs from './itemData/imgSdgs.jpg'
import "../../src/App.css";

function Main () {
    return (
        <div>
          <h1 className='title'>SDGs News</h1>
          <img className='Main' src={imgSdgs} />  
          <Select />
       </div>
    )


}

export default Main;
