import i18n from 'i18next';
// import { AsYouType } from 'libphonenumber-js';

/**
 * Converts object to array
 *
 * @param {Object} object
 * @returns {Array}
 */
export const objectToArray = object => {
  if (Object.keys(object).length === 0) {
    return [];
  }
  return Object.keys(object).map(key => object[key]);
};

/**
 * Converts and array of objects to object using passed property as key for each object.
 *
 * @param {Array} array
 * @param {string} useAsProperty
 * @returns {Object}
 */
export const arrayToObject = (array, useAsProperty = 'id') => {
  let object = {};
  array.map(item => (object[item[useAsProperty]] = item));
  return object;
};

/**
 * Returns last element in array
 *
 * @param {Array} array
 * @param {number} n
 * @returns {Element}
 */
export const last = (array, n) => {
  if (array == null) return void 0;
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};

/**
 * Checks if nested property exists in object
 * Pass params like: checkNestedProp(object, 'key', 'key2', 'key3') etc
 *
 * @param {Object} obj
 * @param {string} property
 * @returns {bool}
 */
export const checkNestedProp = (obj, property, ...rest) => {
  if (obj === undefined) return false;
  if (rest.length === 0 && Object.prototype.hasOwnProperty.call(obj, property)) return true;
  return this.checkNestedProp(obj[property], ...rest);
};

/**
 * @description ### Returns Go / Lua like responses(data, err)
 * when used with await
 *
 * - Example response [ data, undefined ]
 * - Example response [ undefined, Error ]
 *
 *
 * When used with Promise.all([req1, req2, req3])
 * - Example response [ [data1, data2, data3], undefined ]
 * - Example response [ undefined, Error ]
 *
 *
 * When used with Promise.race([req1, req2, req3])
 * - Example response [ data, undefined ]
 * - Example response [ undefined, Error ]
 *
 * @param {Promise} promise
 * @returns {Promise} [ data, undefined ]
 * @returns {Promise} [ undefined, Error ]
 */
export const to = promise => {
  return promise
    .then(data => [data, undefined])
    .catch(error => Promise.resolve([undefined, error]));
};

/**
 *
 * @param {Array} stringArray
 * @returns {string}
 */
export const joinStringArray = stringArray => {
  const length = stringArray.length;
  let string = '';
  stringArray.map((item, index) => {
    if (index < length - 2) {
      string += item + ', ';
    } else if (index === length - 2) {
      string += item + ' ' + i18n.t('words.and') + ' ';
    } else {
      string += item;
    }
    return null;
  });
  string = string.toLowerCase();
  string = string.charAt(0).toUpperCase() + string.slice(1);
  return string;
};

/**
 * Sorts errors into object by field name
 *
 * @param {Object} err
 * @returns {Promise<Array>}
 */
export const sortAndTranslateErrors = err =>
  new Promise((resolve, reject) => {
    const { inner } = err;

    let sortedErrors = {};

    inner.forEach(err => {
      const { path, errors } = err;
      if (!sortedErrors[path]) sortedErrors[path] = [];
      sortedErrors[path].push(
        joinStringArray(
          errors.map(error =>
            typeof error === 'string'
              ? i18n.t(`errors.${error}`)
              : i18n.t(`errors.${error.key}`, { count: error.count })
          )
        )
      );
    });

    let joinedErrors = {};
    Object.keys(sortedErrors).forEach(key => {
      joinedErrors[key] = joinStringArray(sortedErrors[key]);
    });

    reject(joinedErrors);
  });

/**
 * Validates that the input value is an e-mail
 *
 * @param {string} email
 * @returns {Bool}
 */
export const validateEmail = email => {
  if (!email) return true;
  else {
    // eslint-disable-next-line
      let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  }
};

// /**
//  * Formats a phone number depending
//  * on the national code (+xxx) given in inputfield
//  * @param {string} number
//  * @returns {string}
//  */
// export const formatPhoneNumber = number => {
//   return new AsYouType().input(number);
// };