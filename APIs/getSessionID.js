const axios = require('axios');
const parseString = require('xml2js').parseString;

//

module.exports = () => {
  const RuName = 'Dahis_Cheng-DahisChe-Search-rxzwg';

  const xmls = `<?xml version="1.0" encoding="utf-8"?><GetSessionIDRequest xmlns="urn:ebay:apis:eBLBaseComponents"><ErrorLanguage>en_US</ErrorLanguage><WarningLevel>High</WarningLevel><RuName>${RuName}</RuName></GetSessionIDRequest>`;

  return new Promise((resolve, reject) => {
    axios
      .post('https://api.ebay.com/ws/api.dll', xmls, {
        headers: {
          'X-EBAY-API-CALL-NAME': 'GetSessionID',
          'X-EBAY-API-APP-NAME': 'DahisChe-SearchBo-PRD-0df6708f9-ed492f67',
          'X-EBAY-API-DEV-NAME': '07bf0cdd-d9fa-49fe-821b-f5dc7bd5dabd',
          'X-EBAY-API-CERT-NAME': 'PRD-df6708f9be18-19a3-4e2b-b568-eaa8',
          'X-EBAY-API-COMPATIBILITY-LEVEL': 967,
          'X-EBAY-API-SITEID': 0,
          'X-EBAY-API-DETAIL-LEVEL': 0,
          'Content-Type': 'application/xml',
        },
      })
      .then((xres) => {
        parseString(xres.data, (err, jres) => {
          resolve({
            RuName: RuName,
            sessionID: jres.GetSessionIDResponse.SessionID[0],
          });
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
