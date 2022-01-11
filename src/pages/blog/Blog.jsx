import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import Posts from './Posts'

const Blog = () => {
    return (
        <>
            <Breadcrumb page={"Our Blog"} />
            <Posts />
        </>
    )
}

export default Blog
