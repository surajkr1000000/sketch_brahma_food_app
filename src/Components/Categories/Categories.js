import React, { useEffect, useState } from "react";
import Styles from './Categories.module.css'
import axios from 'axios';
import CategoryApi from "../categoryApi/categoryApi";


const Categories = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        const url1 = `https://www.themealdb.com/api/json/v1/1/categories.php`;

        fetch(url1).then(resp => resp.json())
            .then(resp => setPosts(resp.categories)/*console.log(resp.categories)*/)
    }, [])

    return (

        <div className={Styles.categorycont}>
            <div className={Styles.categtileapi}>
                {posts.map(post => {
                    return <CategoryApi post={post} />
                })}
                {/* { posts.map(post=>(post.strCategory))} */}
            </div>
        </div>
    )
}

export default Categories;

