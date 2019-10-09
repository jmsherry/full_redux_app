import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import ErrorBoundary from '../../components/system/ErrorBoundary';


export default function Home(props) {
  return (
    <>
    <ErrorBoundary>
      <Menu/>
    </ErrorBoundary>
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
      <h1>Home</h1>
      <Footer />
    </>
  )
};