import { Card } from '@material-ui/core'
import React from 'react';


const ImageCard = ({desc, url}) => {
    return (
        
           <Card>
                <img alt= {desc} src={url}/>
           </Card>
    
    )
}

export default ImageCard
