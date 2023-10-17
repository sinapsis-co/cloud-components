import React, { FunctionComponent } from 'react';

// Import necessary dependencies
import GoBackLink from '@webapp/components/go-back-link';

import { SxProps, Theme, styled, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

/**
 * `FormWrapper` is a component for wrapping form content.
 *
 * @component
 * @param {Object} props - The component's properties.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {React.ReactNode} [props.title] - The title of the form.
 * @param {React.ReactNode} [props.subtitle] - The subtitle of the form.
 * @param {React.ReactNode} [props.customTitle] - Custom title content.
 * @param {React.ReactNode} [props.customSubtitle] - Custom subtitle content.
 * @param {boolean} [props.hasBack] - Whether to include a go-back link.
 * @param {React.ReactNode} props.children - The form content.
 * @param {SxProps<Theme>} [props.sx] - Custom styles.
 */
interface FormWrapperProps {
  className?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  customTitle?: React.ReactNode;
  customSubtitle?: React.ReactNode;
  hasBack?: boolean;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

/**
 * The container for the `FormWrapper`.
 */
const ContainerWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

/**
 * The `FormWrapper` component.
 */
const FormWrapper: FunctionComponent<FormWrapperProps> = ({
  className,
  children,
  title,
  customTitle,
  subtitle,
  customSubtitle,
  hasBack,
  sx,
}) => {
  const theme = useTheme();
  return (
    <Box className={className || ''} sx={{ width: '100%', ...sx }}>
      <ContainerWrapper role="region" aria-label="Form Content">
        {' '}
        {/* Add role and aria-label */}
        {hasBack ? <GoBackLink /> : null}
        {title || customTitle ? (
          <Stack direction="column" gap={0.5} sx={{ mb: 4 }}>
            {customTitle ? (
              customTitle
            ) : (
              <Typography component="h1" variant="h1" fontWeight={700} color={theme.palette.text.primary}>
                {title}
              </Typography>
            )}
            {subtitle || customSubtitle ? (
              customSubtitle ? (
                customSubtitle
              ) : (
                <Typography component="h6" variant="h3" color={theme.palette.text.primary}>
                  {subtitle}
                </Typography>
              )
            ) : null}
          </Stack>
        ) : null}
      </ContainerWrapper>
      {children}
    </Box>
  );
};

export default FormWrapper;
