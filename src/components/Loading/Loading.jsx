import React from 'react'
import { PacmanLoader } from 'react-spinners'

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <PacmanLoader size={50} color="black" />
  </div>
);

export default Loading