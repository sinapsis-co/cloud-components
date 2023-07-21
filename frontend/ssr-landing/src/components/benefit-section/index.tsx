import { FormattedMessage } from 'react-intl';
import { BenefitSectionContainer } from './styled';
import { Typography } from '@mui/material';

interface BenefitSectionProps {
  title: string;
  content: string;
  color: string;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const BenefitSection: React.FC<BenefitSectionProps> = ({
  content,
  title,
  color,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <BenefitSectionContainer
      className={isActive ? 'active-key' : ''}
      accent={color}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Typography variant="h3" component="h3" fontWeight={600} color={color}>
        <FormattedMessage id={title} />
      </Typography>
      <Typography variant="body1" component="p" fontWeight={400}>
        <FormattedMessage id={content} />
      </Typography>
    </BenefitSectionContainer>
  );
};

export default BenefitSection;
