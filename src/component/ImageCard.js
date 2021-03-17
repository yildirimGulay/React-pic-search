import { Card } from '@material-ui/core'
import React from 'react';


const ImageCard = ({desc, url}) => {
    return (
        <div>
           <Card>
                <img alt= {desc} src={url}/>
           </Card>
        </div>
    )
}

export default ImageCard
