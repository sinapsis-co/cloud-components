import Box from '@mui/material/Box';
import { SxProps, Theme, styled } from '@mui/material/styles';
import LogoHeader, { HeaderWrapperHeight } from '@webapp/components/logo-header';
import React, { FunctionComponent } from 'react';

interface ContentWrapperProps {
  className?: string;
  children: React.ReactNode;
  noLogo?: boolean;
  sx?: SxProps<Theme>;
  noAvatar?: boolean;
  fullWidth?: boolean;
  centeredContent?: boolean;
}

/**
 * ContentWrapper component wraps the main content area with optional LogoHeader.
 * @component
 * @param {Object} props - The component's properties.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {React.ReactNode} props.children - The content to be wrapped.
 * @param {boolean} [props.noLogo] - Set to true to exclude the LogoHeader.
 * @param {SxProps<Theme>} [props.sx] - Custom styles to be applied to the wrapper.
 * @param {boolean} [props.noAvatar] - Deprecated: No longer used.
 * @param {boolean} [props.fullWidth] - Set to true to make the content full-width.
 * @param {boolean} [props.centeredContent] - Set to true to center the content both vertically and horizontally.
 */
const ContentWrapper: FunctionComponent<ContentWrapperProps> = ({
  className,
  children,
  noLogo,
  sx,
  fullWidth,
  centeredContent,
}) => {
  return (
    <Wrapper
      className={className || ''}
      sx={{ ...sx }}
      role="main" // Define the role as "main" for the main content area
      aria-label="Main Content" // Provide an ARIA label for the main content area
    >
      {noLogo ? null : <LogoHeader />}
      <div
        className={`content ${fullWidth ? 'full-width' : ''} ${centeredContent ? 'center' : ''}`}
        role="region" // Define the role as "region" for the content region
        aria-label="Page Content" // Provide an ARIA label for the content region
      >
        {children}
      </div>
    </Wrapper>
  );
};

ContentWrapper.defaultProps = {
  noLogo: false,
  noAvatar: false, // Deprecated prop
  fullWidth: false,
  centeredContent: false,
};

export default ContentWrapper;

const Wrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  paddingBlockStart: HeaderWrapperHeight,
  paddingInline: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    paddingInline: theme.spacing(6),
  },

  '.content': {
    width: '80%',
    marginInline: 'auto',
    height: '100%',
    '&.full-width': {
      width: '100%',
    },
    '&.center': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%',
    },
  },
}));
