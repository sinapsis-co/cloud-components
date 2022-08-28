self.__BUILD_MANIFEST = {
  __rewrites: [],
  '/_error': ['static\u002Fchunks\u002Fpages\u002F_error.js'],
  '/merch/detail/[productId]': ['static\u002Fchunks\u002Fpages\u002Fmerch\u002Fdetail\u002F[productId].js'],
  '/merch/payment/secure-payment': ['static\u002Fchunks\u002Fpages\u002Fmerch\u002Fpayment\u002Fsecure-payment.js'],
  sortedPages: [
    '\u002F_app',
    '\u002F_error',
    '\u002Fmerch\u002Fdetail\u002F[productId]',
    '\u002Fmerch\u002Fpayment\u002Fsecure-payment',
  ],
};
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
