import React, {Fragment, useEffect, useState} from "react";
import { Category } from "../Category";
import {List, Item } from "./styles";

function useCategpriesData(){

    const [categories, setCategories] = useState([]);

    const [loading , setLoading ] = useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
        .then(response => response.json())
        .then(res =>{ setCategories(res)})
        setLoading(false)
    },[])

    return {categories,
        loading
        }
}


export const ListOfCategories = ()=>{

   const { categories , loadig} = useCategpriesData();
    
    const [ showFixed, setShowFixed ] = useState(false);

  

    useEffect(()=>{
        const onScroll = e =>{
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener("scroll", onScroll);

        return () => document.removeEventListener("scroll", onScroll)

    }, [showFixed])

    const renderList = (fixed)=> (
    <List fixed={fixed} >
        {
            loadig 
            ? <Item key="loading"><Category /></Item> 
            :categories.map( category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
        }
    </List>
    )

    return(
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )
}

