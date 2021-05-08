import React from 'react';
import {Data} from  './nft-images.json';
function ImageComponents() {
  return (
    <div className='sectionNFT'>
{
    Data.map((item,index)=>{
        return (
            <div className='gridNFT'>
                <a href={item.Onclick_URL}>
                    <img src={item.Image_URL} alt={item.Post_Name} width='auto' height='300px'/>
                    <h2>{item.Post_Name}</h2>
                </a>
                <p style={{ padding: '6px 0 6px 0'}}>{item.Desc}</p>
                <a><h2>{item.Price}</h2></a>
            </div>
        )
    })
}
    </div>
  );
}

export default ImageComponents;