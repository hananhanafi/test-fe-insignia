import React from 'react';
import Header from '../shared/headers/Header';
import Footer from '../shared/footers/Footer';
import useDocumentTitle from '../../helpers/useDocumentTitle';

const Container = ({ children, title, header = <Header />, footer = <Footer /> }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.REACT_APP_TITLE + ' | ' + title;
    } else {
        titleView = process.env.REACT_APP_TITLE + ' | ' + process.env.REACT_APP_TITLE_DESCRIPTION;
    }
    useDocumentTitle(titleView)
    return (
        <>
            <div className='relative bg-main'>
                {header}
                {children}
                {footer}
            </div>
        </>
    );
};

export default Container;
