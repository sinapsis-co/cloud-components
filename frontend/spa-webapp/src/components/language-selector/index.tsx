import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SxProps, Theme, styled } from '@mui/material/styles';
import { AllowedLanguages, translationsContext } from '@webapp/translations';
import React, { useContext } from 'react';
import { useIntl } from 'react-intl';

/**
 * Styles for the LanguageSelector component.
 */
const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

/**
 * Styles for language selector buttons.
 */
const Selector = styled('button')(({ theme }) => ({
  appearance: 'none',
  background: 'transparent',
  padding: 0,
  border: 0,
  color: theme.palette.text.primary,
  fontWeight: 600,
  cursor: 'pointer',
  transition: theme.transitions.create('color', {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover, &[data-highlight="true"]': {
    color: theme.palette.primary.main,
  },
}));

/**
 * LanguageSelectorProps is an interface that defines the props for the LanguageSelector component.
 */
interface LanguageSelectorProps {
  /**
   * Additional CSS classes.
   */
  className?: string;
  /**
   * Custom styling using MUI's SxProps.
   */
  sx?: SxProps<Theme>;
}

/**
 * LanguageSelector is a component that allows users to change the application's language.
 *
 * @param {LanguageSelectorProps} props - The props for the component.
 * @returns {React.ReactElement} A LanguageSelector component.
 */
const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className, sx }) => {
  const { formatMessage } = useIntl();
  const context = useContext(translationsContext)!;

  const handleLanguageChange = (lang: AllowedLanguages) => {
    context.changeLanguage(lang);
  };

  const languageLinks: { lang: AllowedLanguages; label: string }[] = [
    { lang: 'en', label: formatMessage({ id: 'LANGUAGE_SWITCHER.ENGLISH.SHORT' }) },
    { lang: 'es', label: formatMessage({ id: 'LANGUAGE_SWITCHER.SPANISH.SHORT' }) },
    { lang: 'it', label: formatMessage({ id: 'LANGUAGE_SWITCHER.ITALIAN.SHORT' }) },
  ];

  const getTooltipTitleLanguage = (lang: AllowedLanguages) => {
    switch (lang) {
      case 'en':
        return formatMessage({ id: 'LANGUAGE_SWITCHER.ENGLISH' });
      case 'es':
        return formatMessage({ id: 'LANGUAGE_SWITCHER.SPANISH' });
      case 'it':
        return formatMessage({ id: 'LANGUAGE_SWITCHER.ITALIAN' });
      default:
        return formatMessage({ id: 'LANGUAGE_SWITCHER.ENGLISH' });
    }
  };

  return (
    <Box className={className || ''} sx={sx}>
      <Typography sx={{ display: 'none' }} className="sr-only">
        {formatMessage({ id: 'LANGUAGE_SWITCHER.SELECT.LABEL' })}
      </Typography>
      <Wrapper>
        {languageLinks.map((item) =>
          context.currentLanguage === item.lang ? (
            <Selector
              key={item.lang}
              type="button"
              onClick={() => handleLanguageChange(item.lang)}
              lang={item.lang}
              aria-label={formatMessage({ id: 'LANGUAGE_SWITCHER.LINK.ARIA' }, { lang: item.lang })}
              data-highlight={item.lang === context.currentLanguage}
            >
              {item.label}
            </Selector>
          ) : (
            <Tooltip
              arrow
              title={formatMessage({ id: 'LANGUAGE_SWITCHER.LINK.ARIA' }, { lang: getTooltipTitleLanguage(item.lang) })}
              key={item.lang}
            >
              <Selector
                type="button"
                onClick={() => handleLanguageChange(item.lang)}
                lang={item.lang}
                aria-label={formatMessage({ id: 'LANGUAGE_SWITCHER.LINK.ARIA' }, { lang: item.lang })}
                data-highlight={item.lang === context.currentLanguage}
              >
                {item.label}
              </Selector>
            </Tooltip>
          )
        )}
      </Wrapper>
    </Box>
  );
};

export default LanguageSelector;
