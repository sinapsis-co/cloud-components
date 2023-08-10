import React from 'react';

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// import { Elements } from '@stripe/react-stripe-js';

import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom/client';

import App from './App';
import { StyledMaterialDesignContent } from './configuration/material-ui/theme';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { TranslationsProvider } from './translations';
import { BrowserRouter } from 'react-router-dom';
// import { BugsnagInitializer, ELEMENTS_OPTIONS, GTMInitializer, stripePromise } from './3rd-party-initializer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20000,
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    },
  }),
});

const containerRoot = document.getElementById('root');
const root = ReactDOM.createRoot(containerRoot!);

//TODO uncomment these lines to enable 3rd party services
// BugsnagInitializer();
// GTMInitializer();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TranslationsProvider>
          {/* <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}> */}
          <SnackbarProvider
            maxSnack={1}
            Components={{
              success: StyledMaterialDesignContent,
              error: StyledMaterialDesignContent,
              warning: StyledMaterialDesignContent,
            }}
          >
            <App />
          </SnackbarProvider>
          {/* </Elements> */}
        </TranslationsProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
