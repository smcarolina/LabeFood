import React from "react"
import { Cardstyle, Image, Name } from "./style"

const Card = ({name, image, description, price}) => {
    return <Cardstyle>
        <Image src={image}/>
        <Name>{name}</Name>
    </Cardstyle>
} 

export default Card;