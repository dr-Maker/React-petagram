import React from "react";
import { PhotoCard } from "../PhotoCard";
import { gql, useQuery } from '@apollo/client';

 const withPhotos = gql`
    query getPhotos($categoryId: ID){
        photos(categoryId: $categoryId){
        id
        categoryId
        src
        likes
        userId
        liked
        }
    }
 `
 export const ListOfPhotoCards = (props)=>{
    const categoryId = props.categoryId;
    const { loading, error , data} = useQuery(withPhotos, {
        variables: { categoryId : categoryId }
      });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!!!</p>;

    //console.log({data});
    const photos = data;
    //console.log({photos});
    return(
        <ul>
            {
                data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
            }
        </ul>
    )
}



 
