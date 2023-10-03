type ButtonTypes = 'text' | 'outlined' | 'contained';
const buttonVariant: ButtonTypes = 'contained';

const buttonFontSizeLarge = '14px';
const buttonLineHeightLarge = '20px';
const buttonPaddingLarge = '16px 24px';

const buttonFontSizeSmall = '14px';
const buttonLineHeightSmall = '16px';
const buttonPaddingSmall = '8px 12px';
const buttonMaxHeightSmall = '40px';

export const button = {
  large: {
    fontSize: buttonFontSizeLarge,
    lineHeight: buttonLineHeightLarge,
    padding: buttonPaddingLarge,
  },
  small: {
    fontSize: buttonFontSizeSmall,
    lineHeight: buttonLineHeightSmall,
    padding: buttonPaddingSmall,
    maxHeight: buttonMaxHeightSmall,
  },
  variant: buttonVariant,
};
