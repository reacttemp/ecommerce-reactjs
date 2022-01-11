import React from 'react'
import Banner from './Banner'
import ExploreProducts from './ExploreProducts'
import NewItems from './NewItems'
import ServiceSection from './ServiceSection'
import TopCollection from './TopCollection'
import TopSeller from './TopSeller'
import ExploreCarousel from "./ExploreCarousel";

const Home = () => {
    return (
        <>
            <Banner />
            <ExploreCarousel />
            <ServiceSection />
            <NewItems />
            <TopSeller />
            <ExploreProducts />
            <TopCollection />
        </>
    )
}

export default Home
