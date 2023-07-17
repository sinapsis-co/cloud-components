import React from 'react';

import { ContentWrapper, KeyBenefitsContainer } from './styled';

import BenefitSection from '../benefit-section/index';
import { benefitsInfo } from './data';

import { useMediaQuery, useTheme } from '@mui/material';

import Image from 'next/image';

const KeyBenefits: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [active, setActive] = React.useState(0);
  const [cardHovered, setCardHovered] = React.useState<number>();
  const [activeImage, setActiveImage] = React.useState('/image/content/key-benefits-1.webp');

  const getActiveImage = (idx: number) => {
    switch (idx) {
      case 0:
        return setActiveImage('/image/content/key-benefits-1.webp');
      case 1:
        return setActiveImage('/image/content/key-benefits-2.webp');
      case 2:
        return setActiveImage('/image/content/key-benefits-3.webp');

      default:
        return setActiveImage('/image/content/key-benefits-1.webp');
    }
  };

  React.useEffect(() => {
    if (!isMobile && cardHovered !== undefined) {
      setActive(cardHovered);
      getActiveImage(cardHovered);
    } else {
      const interval = setInterval(() => {
        getActiveImage(active === benefitsInfo.length - 1 ? 0 : active + 1);
        setActive((active) => (active === benefitsInfo.length - 1 ? 0 : active + 1));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [active, cardHovered]);

  return (
    <KeyBenefitsContainer>
      <div className="image-wrapper">
        <Image src={activeImage} alt={benefitsInfo[active].title} fill />
      </div>

      <ContentWrapper>
        {benefitsInfo.map((benefit, idx) => (
          <BenefitSection
            key={benefit.title}
            isActive={active === idx}
            onMouseEnter={() => setCardHovered(idx)}
            onMouseLeave={() => setCardHovered(undefined)}
            {...benefit}
          />
        ))}
      </ContentWrapper>
    </KeyBenefitsContainer>
  );
};

export default KeyBenefits;
