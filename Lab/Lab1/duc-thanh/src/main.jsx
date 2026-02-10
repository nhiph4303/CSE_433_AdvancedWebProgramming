import { createRoot } from 'react-dom/client';
import Home from './HomePage';
import Laptop from './ProductCategory';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <Home /> */}
        <Laptop />
    </StrictMode>
);
