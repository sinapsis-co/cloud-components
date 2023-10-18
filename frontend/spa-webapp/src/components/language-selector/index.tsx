import React, { useContext } from 'react';

import { motion, useReducedMotion } from 'framer-motion';
import { useIntl } from 'react-intl';

import { AllowedLanguages, translationsContext } from '@webapp/translations';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SxProps, Theme, styled } from '@mui/material/styles';

/**
 * Styles for the LanguageSelector component.
 */
const Wrapper = styled('ul')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: 0,
  margin: 0,
  listStyle: 'none',
  li: {
    position: 'relative',
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  '& .tab-bg': {
    background: theme.palette.primary.main,
    width: `calc(100% + ${theme.spacing(0.5)})`,
    height: `calc(100% + ${theme.spacing(0.5)})`,
    position: 'absolute',
    top: `calc(0% - ${theme.spacing(0.25)})`,
    left: `calc(0% - ${theme.spacing(0.25)})`,
    borderRadius: theme.spacing(1),
    zIndex: 0,
  },
}));

/**
 * Styles for language selector buttons.
 */
const Selector = styled(motion.button)(({ theme }) => ({
  appearance: 'none',
  width: theme.spacing(3),
  height: theme.spacing(3),
  background: 'transparent',
  padding: 0,
  border: 0,
  color: theme.palette.text.primary,
  fontWeight: 600,
  cursor: 'pointer',
  position: 'relative',
  aspectRatio: '1/1',
  transition: theme.transitions.create('color', {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.easeInOut,
  }),
  zIndex: 1,
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&[data-highlight="true"]': {
    color: theme.palette.primary.contrastText,
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
  const prefersReducedMotion = useReducedMotion(); // Check for reduced motion preference
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

  return (
    <Box className={className || ''} sx={sx}>
      <Typography sx={{ display: 'none' }} className="sr-only">
        {formatMessage({ id: 'LANGUAGE_SWITCHER.SELECT.LABEL' })}
      </Typography>
      <Wrapper>
        {languageLinks.map((item) => (
          <li key={item.lang}>
            <Selector
              type="button"
              onClick={() => handleLanguageChange(item.lang)}
              lang={item.lang}
              aria-label={formatMessage({ id: 'LANGUAGE_SWITCHER.LINK.ARIA' }, { lang: item.lang })}
              data-highlight={item.lang === context.currentLanguage}
              whileHover={context.currentLanguage !== item.lang ? (prefersReducedMotion ? {} : { scale: 1.1 }) : {}}
              whileTap={context.currentLanguage !== item.lang ? (prefersReducedMotion ? {} : { scale: 0.9 }) : {}}
              transition={prefersReducedMotion ? {} : { type: 'spring', stiffness: 300 }}
            >
              {item.label}
            </Selector>
            {context.currentLanguage === item.lang ? (
              <motion.div
                className="tab-bg"
                layoutId="tab-bg"
                transition={prefersReducedMotion ? {} : { type: 'spring', stiffness: 80, duration: 0.25 }}
              />
            ) : null}
          </li>
        ))}
      </Wrapper>
    </Box>
  );
};

export default LanguageSelector;
