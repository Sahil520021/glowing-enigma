import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import './index.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

export default HomePage;