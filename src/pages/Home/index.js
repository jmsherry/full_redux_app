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
          <p>You do the following:</p>
          <ol>
            <li>Go to the shop page and buy items</li>
            <li>Look in your cupboard to see what recipes are available and plan a meal</li>
            <li><strong>Later</strong> we may enhance it to put meals on a calendar</li>
          </ol>
        </Container>
      </main>
      <Footer />
    </>
  )
};