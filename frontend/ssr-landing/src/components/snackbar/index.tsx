// import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
// import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
// import { OptionsObject, useSnackbar } from 'notistack';
import React from 'react';
// import SHARED_CONFIG from './config';

// import AppState from '@landing/store/state';
// import CloseIcon from '@mui/icons-material/Close';
// import { useTheme } from '@mui/material';
// import Alert from '@mui/material/Alert';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { FormattedMessage } from 'react-intl';
// import { shallowEqual, useSelector } from 'react-redux';

const GenericSnackbar: React.FC = () => {
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  // const theme = useTheme();

  // const notifications = useSelector((state: AppState) => state.ui.successSnackbar, shallowEqual);
  // const errors = useSelector((state: AppState) => state.ui.errorSnackbar, shallowEqual);

  // const snackbar = (severity: 'error' | 'success') => {
  // const OPTIONS = {
  //   ...SHARED_CONFIG,
  //   autoHideDuration: 10000,
  //   content: (key, message) => (
  //     <Alert
  //       key={key}
  //       severity={severity}
  //       variant="filled"
  //       icon={
  //         severity === 'success' ? (
  //           <CheckCircleOutlineRoundedIcon htmlColor={theme.palette.common.white} />
  //         ) : (
  //           <ErrorOutlineRoundedIcon htmlColor={theme.palette.common.white} />
  //         )
  //       }
  //       action={
  //         <IconButton
  //           aria-label="close"
  //           color="inherit"
  //           size="small"
  //           onClick={() => {
  //             closeSnackbar(key);
  //           }}
  //         >
  //           <CloseIcon fontSize="inherit" htmlColor={theme.palette.common.white} />
  //         </IconButton>
  //       }
  //     >
  //       <Typography variant="subtitle2" color={theme.palette.common.white}>
  //         {message ? <FormattedMessage id={`${message}` || ''} /> : null}
  //       </Typography>
  //     </Alert>
  //   ),
  // } as OptionsObject;

  // if (notifications) {
  //   Object.keys(notifications).forEach((key) =>
  //     notifications[key] ? enqueueSnackbar(notifications[key], OPTIONS) : null
  //   );
  // }
  // if (errors) {
  //   Object.keys(errors).forEach((key) => (errors[key] ? enqueueSnackbar(errors[key], OPTIONS) : null));
  // }
  // };

  // React.useEffect(() => {
  //   snackbar('error');
  // }, [errors]);

  // React.useEffect(() => {
  //   snackbar('success');
  // }, [notifications]);

  return <></>;
};

export default GenericSnackbar;
