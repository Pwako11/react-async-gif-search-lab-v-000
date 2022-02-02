import React from 'react';

const GifList = (props) => {
    console.log(props);

    return (
        
        <img src={props.gif.images.original.url}/>
    )
}

export default GifList;