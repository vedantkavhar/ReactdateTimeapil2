import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import App from './App';
import DateTime from './DateTime';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DateTime />
  </StrictMode>
);
