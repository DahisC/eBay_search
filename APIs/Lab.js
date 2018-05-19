const axios = require('axios');
var parseString = require('xml2js').parseString;

const Token =
  'v^1.1#i^1#f^0#r^0#I^3#p^3#t^H4sIAAAAAAAAAOVXbWwTZRxft65k4JAhm2YiKceLCLn2uZde22NtUtYhjcAKHTimZDx399x6cL2rd9eV+mlbFASjMRJNFhJCwASIRlSUMBIDESIgCWF+kA9GSXwhwPAFEAFJjM91L3QzbGzzwxL7pXme5//2+/1///Z5QJurbOGWZVtulzsmFe9uA23FDgc1BZS5ShdNLSmuLi0CBQaO3W1z25wdJZdrTJhS0/xqZKZ1zUTuzSlVM/n8ZojIGBqvQ1MxeQ2mkMlbIp+IrFjO0x7Apw3d0kVdJdyxaIgIsFKAQT7IASDSjMzgXa0/ZoMeIoKAAyzlZ/1MQBaCkMbnpplBMc20oGaFCBpQARL4SMrfQLE84HiG9TBMsIlwr0WGqegaNvEAIpwvl8/7GgW1Dl8qNE1kWDgIEY5FlibqI7Fo3cqGGm9BrHAfDwkLWhlz8KpWl5B7LVQzaPg0Zt6aT2REEZkm4Q33ZhgclI/0FzOG8vNUByVWloEYRLIo5okeP5FLdSMFreGrsHcUiZTzpjzSLMXKjcQn5kLYiESrb7USh4hF3fbXqgxUFVlBRoioWxJZtyZRt5pwJ+JxQ29VJCTZOCl/wM/SPo5hiLAExWSQY/tS9Mbpo3dIjlpdkxSbLNO9UreWIFwvGswKw/sKWMFG9Vq9EZEtu5ZCO26APa7JbmZv9zJWUrP7iVKYAnd+OTL3/VK43/z/SgyM38eyMk3RgIWixMEHysGe9VFIImx3JRKPe+1akABzZAoam5CVVqGISBHTm0khQ5F4xifTeKYRKXFBmWSDskwKPokjKRkhgJAgiMHA/0MZlmUoQsZCA+oYepCHFyISop5GcV1VxBwx1CT/K9Onhc1miEhaVpr3erPZrCfLeHSjxUsDQHkbVyxPiEmUwu3ut1VGNiaVvCpEhL1MhbdyaVzNZiw6nFxrIcKMIcWhYeUSSFXxRr9kB9UWHrr7AJCmDXJiwbP9TRwAphWPrWiPqKe8OsQTbG815yt2P4yR18QEeXrnAUf2GAhKuqbmxuI8Ch9Fa8Wi0o3ciAntWR8uwCiSQlHUM5o1Fox9rqPwkDOqrKiqPTtjSVjgPpoyNajmLEU0B1KOS/iRdDomTSzhR2FSMWuTiEwgaIjJJToZXx0lgSRzfhCQgySS2CCNF+PCvaJFmWCwKYbiKD/HsT4AfOPCFkWtE62nwC/gO6Akkc6O4uVSUIb2Xy8iAzQlkLJPEv2C5JOgII0Ld62q4FlqyE20X/JlummhcULDl6iJBcqeyf6RFBC+bFBByJAsogV8oeICJIIw8LCQvQ+8kfzrGuod/P4LF+U/VIfjM9Dh+Bg/IYEXzKPmgNmukjXOkkeqTcVCHgXKHlNp0fCzxkCeTSiXhopR7HK8MPOjA80FL87d68ETA2/OshJqSsEDFMy8f1JKPfp4ORUAPspPsYBj2CYw5/6pk6pyztjxzA/+32Z0u2f9/eq9l/76tXtXrO4rUD5g5HCUFjk7HEVNVa5F3affOdPYvrG+xzX9z5Nbbn9xYef1E42fzs5G2//wVu25/Pq29GJi1aP7tla2Xjv+ZMW8q3tvLGzZUPnLsUML7772xlHni4e2Ji6dqbjTWf5Y97rO8PtF7fvPfP/e+QvPHu+cRPvvTv793NmzR65c32/82PzdiYs7erp2Vd+Z/y5Te37nsbc6Dgcu7V185GBiVsXz2+ujs2Z8wHV1T5v69aqrZ7MLrjhvf/icswvcODe/8+DcyqWtV09O2zb9zZ92tn8bJ58ONjIVRzesm7L+k5sXv7nz9oGZL0/vch7Pfr6nOvZlZsG1mjnChp9dp9Pnbu1b/Erzxnu3enpuVrpPyU/V1KQmHz51t6zKuuTYTve27x9I7ENxCxAAAA==';
console.log('Currently Env: Lab123');

const xmls =
  '<?xml version="1.0" encoding="utf-8"?><GetSessionIDRequest xmlns="urn:ebay:apis:eBLBaseComponents"><ErrorLanguage>en_US</ErrorLanguage><WarningLevel>High</WarningLevel><RuName>Dahis_Cheng-DahisChe-Search-rxzwg</RuName></GetSessionIDRequest>';

axios
  .post('https://api.ebay.com/ws/api.dll', xmls, {
    headers: {
      'X-EBAY-API-APP-NAME': 'DahisChe-SearchBo-PRD-0df6708f9-ed492f67',
      'X-EBAY-API-DEV-NAME': '07bf0cdd-d9fa-49fe-821b-f5dc7bd5dabd',
      'X-EBAY-API-CERT-NAME': 'PRD-df6708f9be18-19a3-4e2b-b568-eaa8',
      'X-EBAY-API-COMPATIBILITY-LEVEL': 967,
      'X-EBAY-API-SITEID': 0,
      'X-EBAY-API-CALL-NAME': 'GetSessionID',
      'X-EBAY-API-DETAIL-LEVEL': 0,
      'Content-Type': 'application/xml',
    },
  })
  .then((xres) => {
    parseString(xres.data, (err, jres) => {
      console.log(jres);
      console.log(jres.GetSessionIDResponse.SessionID[0]);
      return jres.GetSessionIDResponse.SessionID[0];
    });
  })
  .catch((err) => console.log(err));

// const now = Date.now();
// console.log(now);
// const options = {
//     url: 'https://api.ebay.com/buy/browse/v1/item_summary/search?category_ids=281&limit=50',
//     headers: {
//         'Authorization': `Bearer ${Token}`
//     }
// };

// function callback(error, response, body, time) {
//     console.log(response);
//     console.log(Date.now() - now);
// }

// request(options, callback);
