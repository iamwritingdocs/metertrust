import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  DynamicWidget,
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const App = () => {
  let history = useHistory();

  const handleCompletion = () => {
    // Triggered by the user after they have presumably completed necessary operations
    history.push('/readings');
  };

  return (
    <div>
      <DynamicContextProvider
        settings={{
          environmentId: "ID",
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <DynamicWidget />
      </DynamicContextProvider>
      <button onClick={handleCompletion} style={{ marginTop: '20px' }}>Proceed</button>
    </div>
  );
};

export default App;
