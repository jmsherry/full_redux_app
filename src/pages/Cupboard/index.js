import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function Cupboard(props) {
  return (
    <>
      <Header />
      <CssBaseline />
      <main style={{ minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <h1>Cupboard</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}