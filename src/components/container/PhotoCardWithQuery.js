import React from "react";
import { PhotoCard } from "../PhotoCard";
import { gql, useQuery } from '@apollo/client';

const GET_SINGLE_PHOTO = gql`
query getSiglePhoto($id:ID!){
    photo(id:$id){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PhotoCardWithQuery =({id})=> {
    const {loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
        variables: { id : id }
      });
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error!!!</p>;
      console.log(data);

      const { photo = {} } = data;

    return(
        <PhotoCard {...photo} />
    )
}
