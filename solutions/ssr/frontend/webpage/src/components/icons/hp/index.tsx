import React, { FunctionComponent } from 'react';

interface HPLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const HPLogo: FunctionComponent<HPLogoProps> = ({ className, ...props }) => {
  return (
    <svg className={className || ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" {...props}>
      <path
        fill="#0096d6"
        d="m144,63h-15l-21,54h15l21-54Zm-54,117c-.9,0-1.79-.02-2.67-.04l18.39-50.54h25.31c4.44,0,9.32-3.42,10.84-7.59l19.95-54.81c3.27-8.97-1.88-16.32-11.43-16.32h-35.11l-29.47,80.97h0l-16.7,45.9C29.48,168.13,0,132.51,0,90S27.8,13.93,65.7,3.32l-17.24,47.37h0l-28.65,78.72h19.07l24.37-66.89h14.34l-24.37,66.89h19.07l22.71-62.4c3.27-8.97-1.87-16.32-11.41-16.32h-16.03L85.95.09c1.35-.06,2.7-.09,4.05-.09,49.71,0,90,40.29,90,90s-40.29,90-90,90Z"
      />
    </svg>
  );
};

export default HPLogo;
