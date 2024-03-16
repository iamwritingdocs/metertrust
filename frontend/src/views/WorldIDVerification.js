import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { IDKitWidget, VerificationLevel } from '@worldcoin/idkit';

const WorldIDVerification = () => {
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerify = async (proof) => {
    try {
      const res = await fetch('http://localhost:3001/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(proof),
      });

      const data = await res.json();
      if (res.ok) {
        setVerificationResult(true); // Update state on success
        console.log('Verification succeeded:', data);
      } else {
        setVerificationResult(false); // Update state on failure
        console.error('Verification failed:', data.detail);
      }
    } catch (error) {
      console.error('Error during verification:', error);
      setVerificationResult(false); // Ensure state is updated on error
    }
  };

  const onSuccess = () => {
    console.log('Modal closed');
  };

  return (
    <>
      <IDKitWidget
        app_id="app_staging_666df666f482fb26fc2eda9c7ed86f79"
        action="verify"
        onSuccess={onSuccess}
        handleVerify={handleVerify}
        verification_level={VerificationLevel.Orb}
      >
        {({ open }) => <button onClick={open}>Verify with World ID</button>}
      </IDKitWidget>
      {verificationResult !== null && (
        <div>
          Verification result: 
          {verificationResult ? (
            <Link to="/readings" style={{ marginLeft: '10px' }}>Success - Proceed to Readings</Link>
          ) : (
            <Link to="/readings" style={{ marginLeft: '10px' }}>Success - Proceed to Readings</Link>
          )}
        </div>
      )}
    </>
  );
};

export default WorldIDVerification;
