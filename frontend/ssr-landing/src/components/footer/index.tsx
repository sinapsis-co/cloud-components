import { Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import { ContentContainer, FooterContainer, SocialMediaButton } from './styled';

import Image from 'next/image';

const Footer: React.FC = () => {
  const theme = useTheme();
  const upLg = useMediaQuery(theme.breakpoints.up('lg'));
  const currentYear = new Date().getFullYear().toString();

  return (
    <FooterContainer>
      <div className="logo-box">
        <Image src="/image/logo/footer-logo.svg" alt="Reedy logo" width={287} height={158} />
      </div>

      <ContentContainer>
        {upLg && (
          <Typography variant="body1" component="p" fontWeight={300} fontSize={'14px'}>
            <FormattedMessage id="FOOTER.COPY" values={{ year: currentYear }} />
          </Typography>
        )}

        <Stack direction={'row'} spacing={1}>
          <SocialMediaButton>
            <a href="https://www.instagram.com/reedy_student/" target="_blank" rel="noreferrer">
              <Image src={'/image/social/ig.svg'} alt="Instagram logo" width={32} height={32} />
            </a>
          </SocialMediaButton>
          <SocialMediaButton>
            <a href="https://www.tiktok.com/@reedy_student" target="_blank" rel="noreferrer">
              <Image src={'/image/social/tiktok.svg'} alt="Tiktok logo" width={32} height={32} />
            </a>
          </SocialMediaButton>
          <SocialMediaButton>
            <a href="https://www.linkedin.com/company/reedy-student-tech/" target="_blank" rel="noreferrer">
              <Image src={'/image/social/linkedin.svg'} alt="Linkedin logo" width={32} height={32} />
            </a>
          </SocialMediaButton>
          <SocialMediaButton>
            <a href="https://www.youtube.com/@reedystudent" target="_blank" rel="noreferrer">
              <Image src={'/image/social/youtube.svg'} alt="Youtube logo" width={32} height={32} />
            </a>
          </SocialMediaButton>
        </Stack>

        <Stack direction={'row'} spacing={2}>
          <Link
            className="footer-link"
            variant="body1"
            component="a"
            fontWeight={300}
            fontSize={'14px'}
            underline="none"
            href="/privacy-policy"
          >
            <FormattedMessage id="FOOTER.PRIVACY_POLICY" defaultMessage="Privacy Policy" />
          </Link>
          <Link
            className="footer-link"
            variant="body1"
            component="a"
            fontWeight={300}
            fontSize={'14px'}
            underline="none"
            href="/terms-and-conditions"
          >
            <FormattedMessage id="FOOTER.TERMS_AND_CONDITIONS" defaultMessage="Terms & Conditions" />
          </Link>
        </Stack>

        {!upLg && (
          <Typography variant="body1" component="p" fontWeight={300} fontSize={'14px'}>
            <FormattedMessage id="FOOTER.COPY" values={{ year: currentYear }} />
          </Typography>
        )}
      </ContentContainer>

      <div className="logo-box">
        <Image src={'/image/logo/footer-logo.svg'} alt="Reedy logo" width={287} height={158} />
      </div>
    </FooterContainer>
  );
};

export default Footer;
