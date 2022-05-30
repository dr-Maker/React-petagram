import React , {Fragment } from "react";
import { ListOfCategories } from "../ListOfCategories";
import { ListOfPhotoCards } from "../ListOfPhotoCards";
import { Helmet } from "react-helmet";



export const Home = ({id})=>{
    return(
    <Fragment>

        <Helmet>
            <title>
                Petgram - Tu App de fotos de mascotas
            </title>
            <meta name="description" content="Petagram red social de animales domesticos" />
        </Helmet>
        
        <ListOfCategories />
        <ListOfPhotoCards categoryId={id} />
    </Fragment>
)
}