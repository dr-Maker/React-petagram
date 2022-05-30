import React, {Fragment} from "react";
import { useGetFavorites }  from "../container/useGetFavorites";
import { ListOfFavs } from "../ListOfFavs";
import { Helmet } from "react-helmet";

export const Favs = () =>{ 

    const { data, loading, error } = useGetFavorites();

console.log(data);
    if(loading) return <p>loading...</p>
    if(error) return <p>Error!</p>
    const { favs } = data;

return(
    <Fragment>
        <Helmet>
            <title>
                Petgram - Tus Favoritos
            </title>
            <meta name="description" content="Animales favoritos de Petagram" />
        </Helmet>


        <h1>Favoritos</h1>
        <ListOfFavs  favs={favs} />
    </Fragment>
)
}