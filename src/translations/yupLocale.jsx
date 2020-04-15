import { setLocale } from 'yup';

const setYupLocale = () => {
  setLocale({
    mixed: {
      default: 'fieldInvalid',
      required: 'fieldRequired'
    },
    string: {
      email: 'invalidEmail',
      min: ({ min }) => ({ key: 'minString', count: min }),
      max: ({ max }) => ({ key: 'maxString', count: max })
    },
    number: {
      min: ({ min }) => ({ key: 'minNumber', count: min }),
      max: ({ max }) => ({ key: 'maxNumber', count: max })
    }
  });
};

export default setYupLocale;
