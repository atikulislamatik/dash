import React from 'react';
import Charts from './components/Chart/Charts';
import Layout from './components/Layout';
import Products from './components/Products/Products';
const App = () => {



  return (
    <>
      <Layout>
        <Charts />
        <Products/>
      </Layout>
    </>
  );
};

export default App;