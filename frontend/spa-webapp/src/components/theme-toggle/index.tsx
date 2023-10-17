import { FunctionComponent, useContext } from 'react';

// Internationalization
import { useIntl } from 'react-intl';

// Color mode context
import { ColorModeContext } from '@webapp/context';

// Icons
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

// Material UI components
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

// Material UI styles
import { useTheme } from '@mui/material/styles';

interface ThemeToggleProps {
  className?: string;
  monochrome?: boolean;
}

/**
 * ThemeToggle component allows users to toggle between light and dark modes.
 * @component
 * @param {Object} props - The component's properties.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {boolean} [props.monochrome] - Use monochrome mode for the icons.
 */
const ThemeToggle: FunctionComponent<ThemeToggleProps> = ({ className, monochrome }) => {
  // Get the color mode context
  const context = useContext(ColorModeContext);

  // Get the current theme color mode
  const theme = useTheme();
  const colorMode = theme.palette.mode;

  // Get the internationalization function
  const { formatMessage } = useIntl();

  const tooltipTitle = formatMessage({ id: colorMode === 'dark' ? 'CHANGE_MODE_LIGHT' : 'CHANGE_MODE_DARK' });
  const ariaLabel = formatMessage({ id: 'CHANGE_MODE_ARIA' });

  return (
    <Tooltip
      id="theme-toggle"
      arrow
      placement="left"
      TransitionComponent={Zoom}
      title={tooltipTitle}
      aria-label={ariaLabel}
    >
      <IconButton
        className={className}
        onClick={context.toggleColorMode}
        color={colorMode === 'dark' ? 'primary' : 'secondary'}
        aria-label={ariaLabel}
      >
        {colorMode === 'dark' ? (
          <LightModeRoundedIcon htmlColor={monochrome ? undefined : theme.palette.primary.main} />
        ) : (
          <DarkModeRoundedIcon htmlColor={monochrome ? undefined : theme.palette.secondary.main} />
        )}
      </IconButton>
    </Tooltip>
  );
};

ThemeToggle.defaultProps = {
  className: '',
  monochrome: false,
};

export default ThemeToggle;
