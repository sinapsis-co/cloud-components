// Bugsnag
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
// Stripe
import { StripeConstructorOptions, loadStripe } from '@stripe/stripe-js';

// GTM
import TagManager from 'react-gtm-module';

//---------------------------------------------STRIPE-------------------------------------------------------------//
const locale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

export const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc:
        'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap',
    },
  ],
};

export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY || '', {
  locale: (locale as StripeConstructorOptions['locale']) || 'it',
});

//---------------------------------------------BUGSNAG-------------------------------------------------------------//

export const BugsnagInitializer = () => {
  return (
    process.env.REACT_APP_BUGSNAG &&
    Bugsnag.start({
      apiKey: process.env.REACT_APP_BUGSNAG || '',
      plugins: [new BugsnagPluginReact()],
      metadata: {
        app: {
          name: 'Webapp',
        },
      },
    })
  );
};

//---------------------------------------------GTM-------------------------------------------------------------//

export const GTMInitializer = () => {
  const tagManagerArgs = {
    gtmId: import.meta.env.VITE_APP_GTM_ID || '',
  };

  return import.meta.env.VITE_APP_STAGE === 'prod' && TagManager.initialize(tagManagerArgs);
};
