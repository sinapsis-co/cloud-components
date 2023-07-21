import { useTheme } from '@mui/material';
import React, { FunctionComponent } from 'react';

interface HPFSLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const HPFSLogo: FunctionComponent<HPFSLogoProps> = ({ className, ...props }) => {
  const theme = useTheme();
  return (
    <svg
      className={className || ''}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hewlett Packard Enterprise"
      focusable="false"
      viewBox="0 0 127.3 53.5"
      {...props}
    >
      <title>Hewlett Packard Enterprise</title>
      <path
        fill={theme.palette.text.primary}
        d="M2.7,33.5H0V20.9h2.7v5h4.9v-5h2.7v12.6H7.6v-5.2H2.7V33.5z M16.5,33.7c-2.8,0-4.6-1.8-4.6-4.6s1.8-4.7,4.3-4.7 c2.7,0,4,1.8,4,4.5v1h-5.7c0.3,1.4,1.4,1.8,2.5,1.8c0.9,0,1.6-0.2,2.5-0.7h0.1v2.1C18.8,33.4,17.8,33.7,16.5,33.7z M14.5,27.9h3.2 c-0.1-0.9-0.4-1.6-1.5-1.6C15.4,26.4,14.7,26.7,14.5,27.9z M27.2,28.2l-1.4,5.3h-2.4l-2.7-8.9v-0.1h2.6l1.5,5.3l1.4-5.3h2.1 l1.4,5.3l1.5-5.3h2.5v0.1L31,33.5h-2.4C28.6,33.5,27.2,28.2,27.2,28.2z M38.2,33.7c-2.2,0-3-0.9-3-2.9v-9.9h2.6v9.7 c0,0.6,0.2,0.8,0.8,0.8c0.2,0,0.4-0.1,0.6-0.1v2.2C39,33.6,38.6,33.7,38.2,33.7z M44.6,33.7c-2.8,0-4.6-1.8-4.6-4.6 s1.8-4.7,4.3-4.7c2.7,0,4,1.8,4,4.5v1h-5.7c0.3,1.4,1.4,1.8,2.5,1.8c0.9,0,1.6-0.2,2.5-0.7v2.1C46.8,33.4,45.8,33.7,44.6,33.7z  M42.5,27.9h3.2c-0.1-0.9-0.4-1.6-1.5-1.6C43.4,26.4,42.7,26.7,42.5,27.9z M59,24.5h2v2.1h-2v3.6c0,0.8,0.3,1.1,1.1,1.1 c0.2,0,0.5,0,0.8-0.1H61v2.1c-0.3,0.1-0.9,0.3-1.6,0.3c-2.1,0-3-1-3-3.3v-3.8H53v3.6c0,0.8,0.3,1.1,1.1,1.1c0.2,0,0.5,0,0.8-0.1H55 v2.1c-0.3,0.1-0.9,0.3-1.6,0.3c-2.1,0-3-1-3-3.3v-3.8H49v-2.1h1.4v-2.5H53v2.5h3.4v-2.5H59C59,21.8,59,24.5,59,24.5z M74.7,25.1 c0,2.7-1.8,4.2-4.6,4.2h-1.9v4.1h-2.7V20.9h4.7C72.9,20.9,74.7,22.4,74.7,25.1z M69.9,27.1c1.4,0,2-0.8,2-1.9c0-1.2-0.7-2-2-2h-1.7 v3.9H69.9z M80.6,32.6c-0.6,0.7-1.4,1-2.4,1c-1.7,0-3.2-1.1-3.2-3c0-1.8,1.4-2.9,3.5-2.9c0.6,0,1.3,0.1,2,0.3v-0.2 c0-1-0.5-1.4-2-1.4c-0.9,0-1.8,0.3-2.5,0.7h-0.1V25c0.7-0.4,1.9-0.7,3.1-0.7c2.7,0,4.1,1.3,4.1,3.5v5.6h-2.5V32.6z M80.5,30.6v-0.8 c-0.4-0.2-0.9-0.3-1.5-0.3c-0.9,0-1.4,0.3-1.4,1s0.5,1.1,1.3,1.1C79.7,31.7,80.3,31.3,80.5,30.6z M84.5,29c0-2.9,2-4.7,4.7-4.7 c0.9,0,1.8,0.2,2.5,0.7v2.3h-0.1c-0.6-0.4-1.3-0.7-2-0.7c-1.3,0-2.3,0.9-2.3,2.4s1,2.4,2.3,2.4c0.8,0,1.5-0.3,2-0.7V33 c-0.7,0.5-1.5,0.7-2.5,0.7C86.5,33.7,84.5,31.9,84.5,29z M95.9,29.4v4.1h-2.6V20.9h2.6v7.2l2.7-3.5h3v0.1l-3.2,4.1l3.2,4.7v0.1h-3 L95.9,29.4z M107.6,32.6c-0.6,0.7-1.4,1-2.4,1c-1.7,0-3.2-1.1-3.2-3c0-1.8,1.4-2.9,3.5-2.9c0.6,0,1.3,0.1,2,0.3v-0.2 c0-1-0.5-1.4-2-1.4c-0.9,0-1.8,0.3-2.5,0.7h-0.1V25c0.7-0.4,1.9-0.7,3.1-0.7c2.7,0,4.1,1.3,4.1,3.5v5.6h-2.5V32.6z M107.5,30.6 v-0.8c-0.4-0.2-0.9-0.3-1.5-0.3c-0.9,0-1.4,0.3-1.4,1s0.5,1.1,1.3,1.1C106.7,31.7,107.3,31.3,107.5,30.6z M114.6,25.9 c0.5-1,1.2-1.6,2.2-1.6c0.4,0,0.7,0.1,0.9,0.2V27h-0.1c-0.3-0.1-0.7-0.2-1.2-0.2c-0.8,0-1.5,0.5-1.7,1.4v5.2h-2.6v-9h2.6v1.5 C114.7,25.9,114.6,25.9,114.6,25.9z M124.7,32.5c-0.6,0.7-1.4,1.1-2.6,1.1c-2.3,0-3.7-2.1-3.7-4.7s1.5-4.7,3.7-4.7 c1.2,0,2,0.4,2.6,1v-4.5h2.6v12.6h-2.6C124.7,33.3,124.7,32.5,124.7,32.5z M124.6,30.4v-2.9c-0.4-0.6-1-0.9-1.7-0.9 c-1.2,0-1.9,0.8-1.9,2.4c0,1.5,0.8,2.4,1.9,2.4C123.6,31.4,124.2,31.1,124.6,30.4z M0,37.6h7.7v1.5h-6V43h5.4v1.5H1.8v4.2h6v1.5H0 V37.6z M14.1,41.1c2,0,3.1,1.3,3.1,3.5v5.6h-1.6v-5.5c0-1.1-0.6-2-1.8-2c-1,0-1.9,0.7-2.2,1.6v5.9H9.9v-8.9h1.7v1.3 C12,41.8,12.9,41.1,14.1,41.1z M21.7,41.3H24v1.4h-2.3v4.8c0,1,0.5,1.4,1.5,1.4c0.3,0,0.5,0,0.7-0.1H24v1.4c-0.2,0.1-0.6,0.2-1,0.2 c-2.1,0-2.9-0.9-2.9-2.7v-4.9h-1.5v-1.4h1.5V39h1.7v2.3C21.8,41.3,21.7,41.3,21.7,41.3z M29.3,50.4c-2.6,0-4.3-1.7-4.3-4.5 s1.6-4.7,4-4.7s3.7,1.8,3.7,4.4v0.8h-6c0.2,1.8,1.3,2.7,2.9,2.7c1,0,1.7-0.2,2.5-0.8h0.1v1.5C31.4,50.1,30.4,50.4,29.3,50.4z  M26.7,44.9h4.4c-0.1-1.3-0.7-2.3-2.1-2.3C27.8,42.6,27,43.5,26.7,44.9z M36.3,42.7c0.4-0.9,1.2-1.5,2.2-1.5c0.4,0,0.7,0.1,0.9,0.1 V43h-0.1c-0.2-0.1-0.6-0.2-1-0.2c-0.9,0-1.7,0.6-1.9,1.6v5.8h-1.7v-8.9h1.7v1.4C36.4,42.7,36.3,42.7,36.3,42.7z M45,41.1 c2.6,0,4,2.2,4,4.6c0,2.5-1.4,4.6-4,4.6c-1.1,0-2-0.6-2.5-1.2v4.4h-1.7V41.3h1.7v1C43,41.7,43.9,41.1,45,41.1z M44.7,48.9 c1.6,0,2.6-1.3,2.6-3.1s-1-3.1-2.6-3.1c-0.9,0-1.7,0.5-2.2,1.4v3.4C43,48.3,43.8,48.9,44.7,48.9z M52.7,42.7 c0.4-0.9,1.2-1.5,2.2-1.5c0.4,0,0.7,0.1,0.9,0.1V43h-0.2c-0.2-0.2-0.6-0.2-1-0.2c-0.9,0-1.7,0.6-1.9,1.6v5.8H51v-8.9h1.7 C52.7,41.3,52.7,42.7,52.7,42.7z M58.1,37.7c0.6,0,1.1,0.5,1.1,1c0,0.6-0.5,1-1.1,1s-1.1-0.5-1.1-1S57.5,37.7,58.1,37.7z  M57.3,41.3H59v8.9h-1.7C57.3,50.2,57.3,41.3,57.3,41.3z M64.9,45c1.3,0.4,2.7,0.9,2.7,2.6c0,1.8-1.5,2.7-3.4,2.7 c-1.2,0-2.3-0.3-3-0.8v-1.6h0.1c0.7,0.7,1.8,1,2.9,1c0.9,0,1.8-0.4,1.8-1.1c0-0.8-0.7-1-2.1-1.4c-1.2-0.4-2.6-0.9-2.6-2.5 c0-1.7,1.4-2.7,3.2-2.7c1,0,2,0.2,2.7,0.7v1.6h-0.1c-0.7-0.6-1.6-0.9-2.6-0.9s-1.6,0.5-1.6,1.1C62.8,44.3,63.4,44.5,64.9,45z  M73.3,50.4c-2.6,0-4.3-1.7-4.3-4.5s1.6-4.7,4-4.7s3.7,1.8,3.7,4.4v0.8h-6c0.2,1.8,1.3,2.7,2.9,2.7c1,0,1.7-0.2,2.5-0.8h0.1v1.5 C75.3,50.1,74.4,50.4,73.3,50.4z M70.7,44.9h4.4c-0.1-1.3-0.7-2.3-2.1-2.3C71.7,42.6,70.9,43.5,70.7,44.9z"
      />
      <path fill="#01A982" d="M0,12.6h43.6V0H0V12.6z M2.7,2.8h38.1v7.1H2.7V2.8z" />
    </svg>
  );
};

export default HPFSLogo;