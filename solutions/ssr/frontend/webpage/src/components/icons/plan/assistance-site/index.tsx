import React, { FunctionComponent } from 'react';

interface AssistanceSiteIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const AssistanceSiteIcon: FunctionComponent<AssistanceSiteIconProps> = ({ className, ...props }) => {
  return (
    <svg className={className || ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432 530" {...props}>
      <path d="m336.43,336.41c-6.71,12.83-13.97,26.22-21.8,40.73,44.71,12.27,70.98,32.36,70.98,47.42,0,24.55-65.94,59.7-169.89,59.7s-169.89-35.71-169.89-59.7c0-15.06,26.27-34.59,70.98-47.42-7.82-14.5-15.09-28.45-21.8-41.29C40.24,353.15,0,382.71,0,424c0,68.62,111.21,106,216.28,106s215.72-36.82,215.72-106c-1.12-40.73-40.8-70.85-95.57-87.59h0Z" />
      <path d="m243.66,398.34c41.36-71.41,112.33-202.52,112.33-257.75,0-77.55-63.15-140.59-140.83-140.59S74.33,63.04,74.33,140.59c0,55.23,71.53,186.9,112.33,257.75,12.86,22.31,44.15,22.31,57,0h0Zm-93.89-257.75c0-36.27,29.06-65.27,65.39-65.27s65.39,29.57,65.39,65.27-29.62,65.27-65.39,65.27-65.39-29.01-65.39-65.27Z" />
    </svg>
  );
};

export default AssistanceSiteIcon;
