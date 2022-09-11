import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {

  return (
    <div >
      <RotatingLines
        margin="0 auto"
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </div>
  )
}

export default Loader;
