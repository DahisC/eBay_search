const axios = require('axios');

module.exports = (authCode) => {
  const ruName = 'Dahis_Cheng-DahisChe-Search-rxzwg';
  return new Promise((resolve, reject) => {
    axios
      .post(
        'https://api.ebay.com/identity/v1/oauth2/token',
        `grant_type=authorization_code&code=${authCode}&expires_in=299&redirect_uri=${ruName}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization:
              'Basic RGFoaXNDaGUtU2VhcmNoQm8tUFJELTBkZjY3MDhmOS1lZDQ5MmY2NzpQUkQtZGY2NzA4ZjliZTE4LTE5YTMtNGUyYi1iNTY4LWVhYTg=',
          },
        },
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
