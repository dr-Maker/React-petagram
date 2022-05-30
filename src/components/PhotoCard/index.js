import React, { Fragment, useEffect, useRef, useState } from "react";
import { Article , ImgWrapper,  Img} from "./styles";
// import { useLocalStorage } from "../hooks/uselocalStorage";
import { useNearScreen } from "../hooks/useNearScreen";
import { FavButton } from "../FavButton/";
import { useToggleLikeMutation } from "../container/useToggleLikeMutation";
import { Link } from "@reach/router";

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";


export const PhotoCard = ({ id, likes= 0, liked, src = DEFAULT_IMAGE})=> 
{
    
    const [ show, ref ] = useNearScreen();
    const { mutation, mutationLoading, mutationError } = useToggleLikeMutation({id});
    // const key = `like-${id}`;
    // const [liked, setLiked] = useLocalStorage(key, false)

    const handleFavClick = ()=>{
        // !liked && 
        mutation({
            variables: {
              input: { id }
            }
          })
        //   setLiked(!liked)   
    }

    return(
        <Article ref={ref}>  
        {
            show  && <Fragment>
            <Link to={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src} />
                </ImgWrapper>
            </Link>

                <FavButton  liked={liked}  likes={likes} onClick={handleFavClick} />


            </Fragment>
        }
        </Article>
    )
}