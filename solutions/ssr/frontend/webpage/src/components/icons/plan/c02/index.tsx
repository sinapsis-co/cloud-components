import React, { FunctionComponent } from 'react';

interface C02Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const C02: FunctionComponent<C02Props> = ({ className, ...props }) => {
  return (
    <svg className={className || ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 300" {...props}>
      <path d="m261.51,62.1L157.15,4.5c-10.73-6-23.56-6-34.29,0L18.49,62.1C7.16,68.4,0,80.4,0,93.6v112.8c0,13.2,7.16,25.2,18.49,31.5l104.37,57.6c5.37,3,11.33,4.5,17.3,4.5s11.93-1.5,17-4.5l104.37-57.6c11.33-6.3,18.49-18.3,18.49-31.5v-112.8c0-13.2-7.16-25.2-18.49-31.5h0Zm6.56,144.3c0,8.7-4.47,16.8-12.23,21l-104.37,57.6c-7.16,3.9-15.8,3.9-22.96,0l-104.37-57.6c-7.45-4.2-12.23-12.3-12.23-21v-112.8c0-8.7,4.47-16.8,12.22-21L128.52,15c3.88-2.1,7.75-3,11.63-3s7.75.9,11.33,3l104.07,57.6c7.75,4.2,12.52,12.3,12.52,21v112.8Z" />
      <path d="m84.09,119.4c-15.8,0-28.92,13.2-28.92,29.1s12.82,29.1,28.92,29.1c7.75,0,15.21-3,20.28-8.7,2.39-2.4,2.39-6,0-8.4-2.39-2.4-5.96-2.4-8.35,0-2.98,3.3-7.45,5.1-11.93,5.1-9.24,0-17-7.5-17-17.1s7.45-17.1,17-17.1c5.37,0,10.14,2.1,13.42,6.3,2.09,2.7,5.67,3,8.35.9,2.68-2.1,2.98-5.7.89-8.4-5.67-6.9-13.72-10.8-22.66-10.8h0Z" />
      <path d="m140.45,121.2c-15.51,0-28.03,12.6-28.03,28.2s12.52,28.2,28.03,28.2,28.03-12.6,28.03-28.2-12.52-28.2-28.03-28.2Zm0,44.4c-8.95,0-16.1-7.2-16.1-16.2s7.16-16.2,16.1-16.2,16.1,7.2,16.1,16.2-7.16,16.2-16.1,16.2Z" />
      <path d="m219.47,139.2c0-10.2-9.54-18-22.36-18s-22.36,7.5-22.66,18c0,3.3,2.68,6,5.96,6s5.96-2.7,5.96-6c0-5.1,6.86-6.3,10.44-6.3,3.88,0,10.44,1.5,10.44,6,0,2.7-7.75,7.2-12.82,10.2-9.24,5.4-19.98,11.7-19.98,22.5,0,3.3,2.68,6,5.96,6h32.2c3.28,0,5.96-2.7,6.26-5.7,0-3.3-2.68-6-5.96-6h-21.77c2.68-2.1,6.26-4.2,9.54-6,9.24-5.4,18.79-10.8,18.79-20.7h0Z" />
    </svg>
  );
};

export default C02;