import React from "react";
import { gql, useMutation  } from '@apollo/client';

const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!){
  likePhoto(input: $input){
    id,
    liked,
    likes
  }
}
`

export const useToggleLikeMutation = ({id}) =>
{
    const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(LIKE_PHOTO, {
      variables: { input : id }
    });
    return { mutation, mutationLoading, mutationError }
}