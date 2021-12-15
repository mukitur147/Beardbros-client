import React from 'react';
import SecondBanner from '../Contacts/SecondBanner/SecondBanner';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner';
import Navigation from '../Header/Navigation';
import Products from '../Products/Products';
import SearchField from '../SearchFiled/SearchField';
import ThirdBanner from '../ThirdBanner/ThirdBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <SearchField></SearchField>
            <Banner></Banner>
            <SecondBanner></SecondBanner>
            <Products></Products>
            <ThirdBanner></ThirdBanner>
            <Features></Features>
            <Footer></Footer>
        </div>
    );
};

export default Home;