import React, { FunctionComponent } from 'react';

interface ContentImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  alt: string; // Add the 'alt' attribute for accessibility
}

const ContentImage: FunctionComponent<ContentImageProps> = ({ className, alt, ...props }) => {
  return (
    <img
      className={className || ''}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
      alt={alt}
      role="img" // Add a role attribute with value "img" for semantics
      {...props}
    />
  );
};

export default ContentImage;
