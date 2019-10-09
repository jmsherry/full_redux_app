import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Cupboard(props) {
  return (
    <>
      <Header />
      <main styles={{ minHeight: '100vh' }}>
        <h1>Cupboard</h1>
      </main>
      <Footer />
    </>
  );
}