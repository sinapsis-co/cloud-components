import { Typography } from '@mui/material';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import { CardHeader, ValueCardContainer } from './styled';

interface ValueCardProps {
  icon: string;
  color: string;
  label: string;
  content: string;
  className: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ color, content, label, icon, className }) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'AccessIcon':
        return '/image/icons/accessibilita-icon.svg';
      case 'FlexIcon':
        return '/image/icons/flessibilita-icon.svg';
      case 'SostIcon':
        return '/image/icons/sostenibilita-icon.svg';
      case 'techIcon':
        return '/image/icons/tecnologia-icon.svg';
      default:
        return '/image/icons/accessibilita-icon.svg';
    }
  };

  return (
    <ValueCardContainer border={`4px solid ${color}`} className={className}>
      <CardHeader>
        <Image src={getIcon(icon)} alt={`${label} icon`} width={58} height={58} />
        <Typography
          className="value-card-title"
          variant="h3"
          component="h3"
          fontWeight={600}
          fontSize={'32px'}
          color={color}
        >
          <FormattedMessage id={label} />
        </Typography>
      </CardHeader>
      <Typography variant="body1" component="p" fontWeight={400} fontSize={'16px'}>
        <FormattedMessage id={content} />
      </Typography>
    </ValueCardContainer>
  );
};

export default ValueCard;
