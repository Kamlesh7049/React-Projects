
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Ensure App.jsx exists
import store from './store';  // Assuming your store is exported from store.js or store.jsx
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

// Use createRoot to render the app into the DOM
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
