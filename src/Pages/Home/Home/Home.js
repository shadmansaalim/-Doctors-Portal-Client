import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;