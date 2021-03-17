import React from 'react'
import ImageCard from './ImageCard'

const ImageList = ({images}) => {
    const resimler= images.map((image)=>{
        return <ImageCard desc={image.alt_description} url={image.urls.regular}/>
    })
    return (
        <div>
            {resimler}
        </div>
    )
}

export default ImageList
