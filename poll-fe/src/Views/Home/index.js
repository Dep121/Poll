import React from 'react';
import Layout from '../../Components/Layout/Layout';
import WebPanel from '../../Components/WebPanel/WebPanel';
import HomeC from '../../Containers/Home/HomeC';

function Home() {
  return(
    <Layout>
      <WebPanel>
        <HomeC />
      </WebPanel>
    </Layout>
  );
}

export default Home;
