export default {
  formId: 'bookForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name*',
      placeholder: 'First name',
      requiredErrorMsg: 'First name is required',
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      placeholder: 'Last name',
      requiredErrorMsg: 'Last name is required',
    },
    email: {
      name: 'email',
      label: 'Email*',
      placeholder: 'Email',
      requiredErrorMsg: 'Email is required',
    },
    phone: {
      name: 'phone',
      label: 'Phone*',
      placeholder: 'Phone',
      requiredErrorMsg: 'Phone is required',
    },
    movingDate: {
      name: 'movingDate',
      label: 'Move date*',
      requiredErrorMsg: 'Move date is required',
      invalidErrorMsg: 'Move date is not valid',
    },
    deliveryDate: {
      name: 'deliveryDate',
      label: 'Delivery date*',
      requiredErrorMsg: 'Delivery date is required',
      invalidErrorMsg: 'Delivery date is not valid',
    },
    startTime: {
      name: 'startTime',
      label: 'Start time*',
      requiredErrorMsg: 'Start time is required',
    },
    service: {
      name: 'service',
      label: 'Service*',
      requiredErrorMsg: 'Service is required',
    },
    size: {
      name: 'size',
      label: 'Move size*',
      requiredErrorMsg: 'Movw size is required',
    },
    additionalInfo: {
      name: 'additionalInfo',
      label: 'Additioanl info',
      placeholder:
        'Please include information on heavy, oversized or fragile items, narrow stairways or halls, long walk ways, extra stops, or anything else that may affect the moving time.',
    },
    referral: {
      name: 'referral',
      label: 'How did you hear about us?*',
      requiredErrorMsg: 'Please select one option',
    },

    originAddress: {
      name: 'originAddress',
      label: 'Origin Address*',
      placeholder: '123 Street Name*',
      requiredErrorMsg: 'Address is required',
    },
    originCity: {
      name: 'originCity',
      label: '',
      // requiredErrorMsg: 'Address is required',
    },
    originState: {
      name: 'originState',
      label: '',
      // requiredErrorMsg: 'State is required',
    },
    originZip: {
      name: 'originZip',
      label: 'From zip*',
      requiredErrorMsg: 'From zip is required',
      invalidErrorMsg: 'Invalid zip',
    },
    originFloor: {
      name: 'originFloor',
      label: 'Entrance (from)*',
      requiredErrorMsg: 'Floor is required',
    },
    originApt: {
      name: 'originApt',
      label: 'Apt',
      placeholder: 'Apt',
    },

    destinationAddress: {
      name: 'destinationAddress',
      label: 'Destination Address*',
      placeholder: '123 Street Name',
      requiredErrorMsg: 'Address is required',
    },
    destinationCity: {
      name: 'destinationCity',
      label: '',
      // requiredErrorMsg: 'Address is required',
    },
    destinationState: {
      name: 'destinationState',
      label: '',
      // requiredErrorMsg: 'State is required',
    },
    destinationZip: {
      name: 'destinationZip',
      label: 'To zip*',
      requiredErrorMsg: 'To zip is required',
      invalidErrorMsg: 'Invalid zip',
    },
    destinationFloor: {
      name: 'destinationFloor',
      label: 'Entrance (to)*',
      requiredErrorMsg: 'Floor is required',
    },
    destinationApt: {
      name: 'destinationApt',
      label: 'Apt',
      placeholder: 'Apt',
    },
    isFlatRate: {
      name: 'isFlatRate',
      label: '',
    },
    crewSize: {
      name: 'crewSize',
      label: '',
    },
    estimateTime: {
      name: 'estimateTime',
      label: '',
    },
    estimateQuote: {
      name: 'estimateQuote',
      label: '',
    },
    travelTime: {
      name: 'travelTime',
      label: '',
    },
    timeBetween: {
      name: 'timeBetween',
      label: '',
    },
    distanceBetween: {
      name: 'distanceBetween',
      label: '',
    },
    //   address1: {
    //     name: 'address1',
    //     label: 'Address Line 1*',
    //     requiredErrorMsg: 'Address Line 1 is required'
    //   },
    //   address2: {
    //     name: 'address2',
    //     label: 'Address Line 2'
    //   },
    //   city: {
    //     name: 'city',
    //     label: 'City*',
    //     requiredErrorMsg: 'City is required'
    //   },
    //   state: {
    //     name: 'state',
    //     label: 'State/Province/Region'
    //   },
    //   zipcode: {
    //     name: 'zipcode',
    //     label: 'Zipcode*',
    //     requiredErrorMsg: 'Zipcode is required',
    //     invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
    //   },
    //   country: {
    //     name: 'country',
    //     label: 'Country*',
    //     requiredErrorMsg: 'Country is required'
    //   },
    //   useAddressForPaymentDetails: {
    //     name: 'useAddressForPaymentDetails',
    //     label: 'Use this address for payment details'
    //   },
    //   nameOnCard: {
    //     name: 'nameOnCard',
    //     label: 'Name on card*',
    //     requiredErrorMsg: 'Name on card is required'
    //   },
    //   cardNumber: {
    //     name: 'cardNumber',
    //     label: 'Card number*',
    //     requiredErrorMsg: 'Card number is required',
    //     invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
    //   },
    //   expiryDate: {
    //     name: 'expiryDate',
    //     label: 'Expiry date*',
    //     requiredErrorMsg: 'Expiry date is required',
    //     invalidErrorMsg: 'Expiry date is not valid'
    //   },
    //   cvv: {
    //     name: 'cvv',
    //     label: 'CVV*',
    //     requiredErrorMsg: 'CVV is required',
    //     invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    //   }
  },
};
