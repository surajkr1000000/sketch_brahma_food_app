import React from 'react'
import Styles from './categoryApi.module.css'

function CategoryApi({ post }) {
    return (
        <div className={Styles.categoryapi}>
            <img id={Styles.catgimg} src={post["strCategoryThumb"]} />
            <p id={Styles.categpara}>{post["strCategory"]}</p>
        </div>
    )
}

export default CategoryApi