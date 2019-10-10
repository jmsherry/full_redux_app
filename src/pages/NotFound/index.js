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
          <h1>404: Page not found</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
};