import React from 'react';
import {Link, Image } from "./styles";

const DEFAUL_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpeg';

export const Category = ({ cover = DEFAUL_IMAGE, path='#', emoji = '?',  }) =>{

    return(
        <Link  to={path} >
            <Image src={cover} />
            {emoji}
        </Link>
    )
}