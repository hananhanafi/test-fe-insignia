import React from 'react';
import Header from '../shared/headers/Header';
import Footer from '../shared/footers/Footer';

const Container = ({ children, title, header = <Header />, footer = <Footer /> }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <>
            <header>
                <title>{titleView}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Blood Glucose Level Prediction" />
                <link rel="icon" href="/bg-prediction-logo.svg" />
            </header>
            <div className='relative bg-main'>
                {header}
                {children}
                {footer}
            </div>
        </>
    );
};

export default Container;
