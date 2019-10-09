import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
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
      <CssBaseline />
      <main style={{ minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <h1>Kitchen App</h1>
          <p>This app is the process of controlling your groceries.</p>
          <p>It has the following views:</p>
          <ol>
            <li>
              <p>Shop: which shows what's available to buy.</p>
              <p>From this we can gain information about your spending habits and place items you have bought into your cupboard.</p>
              <p>We may add functionality which shows what recipes you want to make and ticks off items as it goes</p>
            </li>
            <li>Recipes: Allows you to enter recipes that have a number of ingredients</li>
            <li>Cupboard: which shows what you have bought and when it goes out of date, etc.</li>
            <li>Meals: Allows you to use cupboard items.</li>
            <li><strong>Later</strong> we may enhance it to put meals on a calendar</li>
          </ol>
        </Container>
      </main>
      <Footer />
    </>
  )
};