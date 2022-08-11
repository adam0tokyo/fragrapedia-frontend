import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Users from './components/users/Users';

import reportWebVitals from './reportWebVitals';
import Fragrances from './components/fragrances/Fragrances';
import SingleFragrance from './components/fragrances/SingleFragrance';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route exact path="/users" element={<Users />} />
                    <Route exact path="/fragrances" element={<Fragrances />}>
                        <Route
                            exact
                            path=":singleFrag"
                            element={<SingleFragrance />}
                        />
                    </Route>
                </Route>
                {/* <App /> */}
                <Route
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
