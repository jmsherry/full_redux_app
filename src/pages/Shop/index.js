import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ShoppingList from '../../components/ShoppingList';

export default function Shop(props) {
  return (
    <>
      <Header />
      <CssBaseline />
      <main style={{ minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <h1>Shop</h1>
          <ShoppingList />
        </Container>
      </main>
      <Footer />
    </>
  )
};