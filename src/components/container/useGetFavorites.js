import React from "react";
import { gql, useQuery  } from '@apollo/client';

const GET_FAVS = gql`
    query getFavs{
        favs{
        id,
        categoryId,
        src,
        likes,
        userId
        }
    }
`

export const useGetFavorites = () =>
{

    const { loading, error, data } = useQuery(GET_FAVS, {fetchPolicy: 'cache-and-network' });

    return { loading, error, data }
}
