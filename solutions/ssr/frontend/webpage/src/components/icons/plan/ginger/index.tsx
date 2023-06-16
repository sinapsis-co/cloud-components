import React, { FunctionComponent } from 'react';

interface GingerIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const GingerIcon: FunctionComponent<GingerIconProps> = ({ className, ...props }) => {
  return (
    <svg className={className || ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 542" {...props}>
      <path d="m157.5,0C70.66,0,0,70.59,0,157.35v227.29c0,86.76,70.66,157.35,157.5,157.35s157.5-70.59,157.5-157.35v-227.29C315,70.59,244.34,0,157.5,0Zm113.3,75.51l-31.35,31.32-5.57-13.92-16.25,6.49,9.22,23.02c-18.91.14-36.69,6.38-51.29,17.2l26.44-79.25,9.55,23.82,16.25-6.49-20.37-50.88c25.59,9.81,47.53,26.86,63.38,48.69h0Zm-157.05,217.56c6.13-1.92,11.98-4.51,17.5-7.7v11.85c0,14.46,11.78,26.23,26.25,26.23s26.25-11.77,26.25-26.23v-11.85c5.52,3.2,11.37,5.78,17.5,7.7v4.15c0,24.1-19.62,43.71-43.75,43.71s-43.75-19.61-43.75-43.71v-4.15Zm35-21.02c3.11-3.08,6.1-6.3,8.75-9.85,2.65,3.55,5.64,6.77,8.75,9.85v25.18c0,4.82-3.92,8.74-8.75,8.74s-8.75-3.92-8.75-8.74v-25.18Zm16.53-30.31l-7.78-15.08-7.78,15.09c-12.09,23.43-35.93,37.99-62.22,37.99-38.6,0-70-31.37-70-69.94s31.4-69.94,70-69.94c26.29,0,50.13,14.56,62.22,38l7.78,15.08,7.78-15.09c12.09-23.43,35.93-37.99,62.22-37.99,38.6,0,70,31.37,70,69.94s-31.4,69.94-70,69.94c-26.29,0-50.14-14.56-62.22-38Zm-77.12-119.32l24.85-62.05,26.44,79.25c-14.59-10.81-32.38-17.05-51.29-17.2ZM196.03,22.99l-38.53,115.47L118.97,22.99c12.26-3.51,25.16-5.51,38.53-5.51s26.27,1.99,38.53,5.51Zm-88.45,3.85l-32.02,80-31.35-31.32c15.84-21.83,37.79-38.87,63.38-48.67h0ZM17.5,157.36c0-24.17,6.18-46.93,17.03-66.79l33.98,33.95c-20.75,4.61-38.68,16.6-51.01,33.06v-.23Zm0,195.94l35-34.97,13.88,13.87-48.88,48.83v-27.73Zm13.68,91.24l21.32-21.3,13.88,13.87-25.23,25.21c-3.77-5.63-7.03-11.61-9.97-17.77h0Zm126.32,27.53c-24.12,0-43.75,19.61-43.75,43.71,0,.58.16,1.14.18,1.71-6-1.97-11.79-4.4-17.4-7.13,2.76-31.2,29.04-55.77,60.98-55.77s58.21,24.58,60.98,55.77c-5.62,2.73-11.4,5.16-17.4,7.13.02-.58.17-1.14.17-1.71,0-24.1-19.62-43.71-43.75-43.71h0Zm-25.38,50.03c-.52-2.07-.88-4.17-.88-6.32,0-14.46,11.78-26.23,26.25-26.23s26.25,11.77,26.25,26.23c0,2.15-.35,4.25-.88,6.32-8.24,1.52-16.7,2.42-25.38,2.42s-17.13-.9-25.38-2.42Zm141.73-59.79l-25.24-25.21,13.88-13.87,21.32,21.3c-2.94,6.16-6.2,12.14-9.96,17.77h0Zm23.64-81.28l-48.88-48.83,13.88-13.87,35,34.97v27.73Zm0-52.45l-35-34.97-38.62,38.59,72.09,72.02c-1.09,7.77-2.71,15.38-5.04,22.69l-28.43-28.4-38.62,38.59,39.18,39.15c-8.26,9.5-17.71,17.91-28.23,24.9-6.9-36.41-38.92-64.05-77.34-64.05s-70.44,27.63-77.33,64.04c-10.52-6.99-19.97-15.4-28.23-24.9l39.18-39.14-38.62-38.59-28.43,28.4c-2.33-7.32-3.94-14.92-5.04-22.69l72.09-72.03-38.62-38.59-35,34.97v-66.54c15.97,21.31,41.36,35.19,70,35.19,2.95,0,5.86-.23,8.75-.52v.52c0,33.73,27.48,61.19,61.25,61.19s61.25-27.46,61.25-61.19v-.52c2.89.29,5.8.52,8.75.52,28.64,0,54.03-13.88,70-35.19v66.54Zm-51.01-204.05l33.98-33.95c10.85,19.86,17.03,42.61,17.03,66.79v.23c-12.34-16.46-30.27-28.45-51.01-33.06h0Z" />
      <path d="m87.5,183.58c-13.42,0-26.57,5.44-36.06,14.92l-11.31,11.3,11.31,11.3c9.49,9.49,22.64,14.92,36.06,14.92s26.57-5.44,36.06-14.92l11.31-11.3-11.31-11.3c-9.49-9.49-22.64-14.92-36.06-14.92Zm-22.57,26.23c12.25-11.15,32.9-11.15,45.15,0-12.25,11.15-32.9,11.15-45.15,0Z" />
      <path d="m263.56,221.11l11.31-11.3-11.31-11.3c-9.49-9.49-22.64-14.92-36.06-14.92s-26.57,5.44-36.06,14.92l-11.31,11.3,11.31,11.3c9.49,9.49,22.64,14.92,36.06,14.92s26.57-5.44,36.06-14.92Zm-13.48-11.3c-12.25,11.15-32.9,11.15-45.15,0,12.25-11.15,32.9-11.15,45.15,0Z" />
      <path d="m201.25,375.9h-87.5c-14.47,0-26.25,11.77-26.25,26.23s11.78,26.23,26.25,26.23h87.5c14.47,0,26.25-11.77,26.25-26.23s-11.78-26.23-26.25-26.23Zm0,34.97h-87.5c-4.83,0-8.75-3.92-8.75-8.74s3.92-8.74,8.75-8.74h87.5c4.83,0,8.75,3.92,8.75,8.74s-3.92,8.74-8.75,8.74Z" />
      <path d="m148.75,43.71h17.5v17.48h-17.5v-17.48Z" />
      <path d="m236.25,61.19h17.5v17.48h-17.5v-17.48Z" />
      <path d="m61.25,61.19h17.5v17.48h-17.5v-17.48Z" />
    </svg>
  );
};

export default GingerIcon;
