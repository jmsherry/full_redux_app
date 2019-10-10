import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Shower from '../../components/Shower';

export default function Test(props) {
  return (
    <>
      <Header />
      <CssBaseline />
      <main style={{ minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <h1>Test</h1>
          <Shower />
        </Container>
      </main>
      <Footer />
    </>
  )
};