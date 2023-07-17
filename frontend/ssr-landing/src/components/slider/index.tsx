import React, { FunctionComponent } from 'react';

import { Navigation } from 'swiper';
import { Swiper, useSwiper } from 'swiper/react';

import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const Wrapper = styled(Box)(({ theme }) => ({
  '.swiper': {
    '* > img': {
      width: '100%',
    },
    '.swiper-button-next, .swiper-button-prev': {
      '.swiper-arrow': {
        border: `1px solid ${theme.palette.text.primary}`,
        borderRadius: '50%',
        aspectRatio: '1/1',
      },
      '&::after': {
        content: '""',
      },
    },
    '.swiper-button-disabled': {
      '.swiper-arrow': {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  },
}));

interface SliderProps {
  className?: string;
  children?: React.ReactNode;
}

const Slider: FunctionComponent<SliderProps> = ({ className, children }) => {
  const swiper = useSwiper();
  return (
    <Wrapper className={className || ''}>
      <Swiper
        className="swiper"
        spaceBetween={8}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {children}
        <div className="swiper-button-next">
          <IconButton className="swiper-arrow next" onClick={() => swiper.slideNext()} size="small">
            <KeyboardArrowRightRoundedIcon />
          </IconButton>
        </div>
        <div className="swiper-button-prev">
          <IconButton className="swiper-arrow prev" onClick={() => swiper.slidePrev()} size="small">
            <KeyboardArrowLeftRoundedIcon />
          </IconButton>
        </div>
      </Swiper>
    </Wrapper>
  );
};

export default Slider;
