import React, { FunctionComponent } from 'react';

interface HelmetIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const HelmetIcon: FunctionComponent<HelmetIconProps> = ({ className, ...props }) => {
  return (
    <svg className={className || ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 434 432" {...props}>
      <path d="m434,319.61h0c.13-4.25-3.18-7.79-7.41-7.92-45.65-1.49-84.38-14.66-103.61-35.23-9.57-10.22-14.18-22.17-13.71-35.48,1.55-43.94,45.51-54.4,47.51-54.86l63.35-15.42c4.11-1.01,6.65-5.16,5.64-9.27-.96-3.95-4.83-6.4-8.77-5.71-1.13-11.15-5.09-32.66-18.85-56.64-17.97-31.26-56.76-72.72-139.69-92.63-17.76-4.27-35.8-6.43-53.58-6.43C136.1,0,72.39,32.44,34.44,86.74-2.62,139.83-10.19,207.65,13.76,272.99l23.58,59.48c-2.32,1.49-3.84,3.94-3.84,6.72,0,2.52,1.29,4.75,3.26,6.26,7.58,7.64,60.81,47.35,371.03,86.48.31.04.65.07.96.07,3.81,0,7.11-2.84,7.61-6.72.4-3.12-1.13-6.02-3.65-7.54,5.51-16.46,18.13-58.35,15.77-91.04,3.09-.92,5.41-3.7,5.52-7.09Zm-32.2,96.08c-266.71-34.14-335.24-68.12-350.4-78.16-.26-1.17-.8-2.25-1.54-3.17l-25.87-65.26C1.02,206.38,7.93,143.87,43.44,93.03,79.33,41.65,139.68,10.99,204.88,10.99c16.93,0,34.09,2.07,51.03,6.13,62.35,14.97,108.14,45,132.42,86.87,13.65,23.54,17.04,44.83,17.88,54.3l-52.9,12.88c-9.98,2.2-24.53,8.38-36.75,19.68-4.6,3.64-8.41,7.7-10.77,12.13-.26.49-.49.96-.74,1.47-6.28,9.62-10.61,21.51-11.12,36-.46,13.02,2.74,25,9.53,35.77l3.41,4.91c1.51,1.99,3.14,3.94,4.91,5.84,20.37,21.79,58.67,36.23,103.77,39.48l1.98.48c2.41,31.41-10.76,74.06-15.73,88.77Z" />
      <path d="m258.77,185.46c-3.14-4.59-7.86-7.68-13.31-8.73-1.3-.24-2.6-.37-3.9-.37-9.96,0-18.54,7.11-20.4,16.91-2.14,11.26,5.29,22.17,16.54,24.3,1.29.25,2.6.36,3.9.36h0c9.96,0,18.55-7.1,20.4-16.9,1.03-5.46-.12-10.98-3.24-15.57Zm-11.84,12.71c-.54,2.9-3.38,4.89-6.34,4.32-2.95-.54-4.89-3.39-4.34-6.34.49-2.57,2.75-4.43,5.33-4.43h0c.35,0,.69.02,1.02.1,1.42.27,2.67,1.09,3.48,2.27.8,1.2,1.11,2.64.84,4.07Z" />
      <path d="m282.35,289.65c-1.29-.24-2.6-.37-3.9-.37-9.95,0-18.54,7.11-20.4,16.91-2.13,11.27,5.29,22.17,16.54,24.31,1.3.23,2.6.35,3.9.35h0c9.97,0,18.54-7.11,20.4-16.89,2.14-11.27-5.29-22.17-16.54-24.31Zm1.47,21.44c-.55,2.89-3.39,4.88-6.35,4.31-2.95-.54-4.88-3.38-4.32-6.34.48-2.57,2.73-4.43,5.32-4.43h0c.35,0,.7.02,1.02.09,2.95.56,4.89,3.41,4.34,6.36Z" />
      <path d="m181.11,28.81c-1.64.11-40.56,3.29-81.48,31.5-2.5,1.73-3.11,5.13-1.4,7.63,1.05,1.55,2.77,2.38,4.51,2.38h0c1.07,0,2.15-.32,3.1-.99,38.24-26.35,75.47-29.55,76.07-29.6,3.01-.21,5.29-2.84,5.06-5.86-.22-3.01-2.84-5.25-5.87-5.05Z" />
      <path d="m232.04,33.08c.44-3-1.63-5.79-4.63-6.23-9.69-1.43-27.69.23-28.44.3-3.01.28-5.22,2.95-4.95,5.97.27,2.84,2.65,4.96,5.45,4.96h0c.16,0,.34,0,.5,0,4.82-.46,18.86-1.4,25.83-.37,3,.44,5.79-1.63,6.23-4.63Z" />
    </svg>
  );
};

export default HelmetIcon;
