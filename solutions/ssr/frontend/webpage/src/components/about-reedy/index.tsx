import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FormattedMessage } from 'react-intl';
import ValueCard from '../value-card';
import { cardsInfo } from './data';
import { AboutReedyContainer, MainCard } from './styled';

import Image from 'next/image';

const AboutReedy: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <AboutReedyContainer container spacing={theme.spacing(4)}>
        <Grid item xs={12} md={12}>
          <MainCard>
            <div className="icon-box">
              <Image src="/image/icons/rocket-icon.svg" alt="Rocket icon" width={150} height={100} />
            </div>
            <Typography variant="h3" component="h3" fontWeight={600} fontSize={'32px'}>
              <FormattedMessage id={'VALUES_SECTION.FIRST_CARD_TITLE'} />
            </Typography>
            <Typography variant="body1" component="p" fontWeight={600} fontSize={'16px'}>
              <FormattedMessage id={'VALUES_SECTION.FIRST_CARD_DESCRIPTION'} />
            </Typography>
          </MainCard>
        </Grid>
      </AboutReedyContainer>
      <AboutReedyContainer container spacing={theme.spacing(4)}>
        {cardsInfo.map((card) => {
          return (
            <Grid className="value-card-grid" key={card.label} item xs={12} md={6}>
              <ValueCard {...card} />
            </Grid>
          );
        })}
      </AboutReedyContainer>
    </>
  );
};

export default AboutReedy;
