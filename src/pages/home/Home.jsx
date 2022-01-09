import React from 'react'
import Banner from '../../components/Banner'
import ExploreProducts from '../../components/ExploreProducts'
import NewItems from '../../components/NewItems'
import ServiceSection from '../../components/ServiceSection'
import TopCollection from '../../components/TopCollection'
import TopSeller from '../../components/TopSeller'
import ExploreCarousel from "../../components/ExploreCarousel";

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
