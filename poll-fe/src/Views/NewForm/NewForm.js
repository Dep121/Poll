import React from 'react';
import Layout from '../../Components/Layout/Layout';
import WebPanel from '../../Components/WebPanel/WebPanel';
import NewFormC from '../../Containers/NewForm/NewFormC';

function NewForm() {
  return(
    <Layout>
      <WebPanel>
        <NewFormC />
      </WebPanel>
    </Layout>
  );
}

export default NewForm;
