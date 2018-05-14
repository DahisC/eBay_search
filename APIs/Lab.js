const axios = require('axios');
const request = require('request');
const Token = 'v^1.1#i^1#f^0#r^0#I^3#p^1#t^H4sIAAAAAAAAAOVXa2wUVRTu9mUaBPxhagUiyyAGwZm5M7uzOzNhlywtpCWUtuyKWmLq7Myd7tDdmXXuXcoGMKU8IgGJJAiWgFSJxhePRiEqEImhiP7goQb9g1GJiFEJhiok+sM7s0vZVsKzCIn7Yzb33HPPPd93vnNnLugor5i0snblheGee4q7O0BHscfDDQMV5WWTR5QUjyorAgUOnu6OhztKO0vOTEFKKpmW50CUtkwEvQtTSRPJrjFEZWxTthRkINlUUhDJWJWjkfpZMs8AOW1b2FKtJOWtqwlRmgZESRSD0MfDOBeQiNW8FDNmhSiB54OcEAearosCFH1kHqEMrDMRVkwconjAiTQQaI6PAUkGgsz5mWCQa6a8c6GNDMskLgygwm66srvWLsj16qkqCEEbkyBUuC4yI9oQqauZPjs2hS2IFc7zEMUKzqCBo2pLg965SjIDr74Ncr3laEZVIUIUG87tMDCoHLmUzE2k71KtxgUQUFVFUgKcqHNwSKicYdkpBV89D8diaLTuusrQxAbOXotRwkZ8PlRxfjSbhKir8Tp/TRklaegGtEPU9GmRpyKNjVS4RkkYqDoB6ShUbDUxzaIb59TQRDSBIBB1iYaaX+LJIL9RLlqe5kE7VVumZjikIe9sC0+DJGs4kBtRFgq4IU4NZoMd0bGTUYEfx13iMBBsdoqaq2IGJ0ynrjBFiPC6w2tXoH81xrYRz2DYH2HwhEtRiFLSaUOjBk+6WszLZyEKUQmM0zLLtre3M+0+xrJbWR4Ajn2yflZUTcCUQhFfp9dz/sa1F9CGC0Ul2iL+Ms6mSS4LiVZJAmYrFeaDghDk87wPTCs82PovQwFmdmBHDFmHiFJAiMclv1/RRaCqQ9Eh4bxIWScPGFeydEqx2yBOJxUV0irRWSYFbUOTfYLO+0Qd0lpA0mm/pOt0XNACNKdDCCCMx1VJ/D81yvVKPapaadhoJQ01OySCHzKx+2ytUbFxNgqTSWK4XtVfESRyQN52eE6v3xBEJwYiQZS0wTjaZlQrxVoKOdQcU4ub9S3hNsj78K4qKgGYQ2pouRcZ48Jl0AKVsSGyMjZ5hzMNzrkes9qgSboE21YyCe253C0xMXQn+h06za+ISk0ahMaWuw3ZDR6TN6ltBd9B1KWdnnlXQM4JfIDjBInz3xK2areusex/cGjdUGFrLYShdhs+QNiB16FwkfvjOj27Qaenh9yoAAsmcOPBuPKSx0tL7h2FDAwZQ9EZZLSa5CvfhkwbzKYVwy4u98wbs+utloILWPfToKr/ClZRwg0ruI+BMZdnyriRDwznRCBwPJDI098Mxl+eLeUqS++feN/e7AHfkpotzwaO/jme3sAvKNoIhvc7eTxlRUQZRSs+WNZ1kT31xJpNn7xHj912pOzUpsBnPT9NONG79sHFia5vW5uLV79wcfPfv52f+M2n/kXnPIcPrFu6Id1Z2/f1vi1ncP2xhviXjcZBvOp75rXnuOreZ/ZT7/S+3Xd6jd1xsm/+1JMjZ1Y+1l5xmKo4Xbk1uv39EWzsjUNd836Z/kfx8v19e+uOdv84c+d3xx7pfXnSzOdf7W7p4rVdVVM3bpu8eGnli+j314OLou+i1Lj0kS92RHfvO7/k19E9TZu3v7R87LmDPzxUMvbzN0eI0sdrY21F63aEwdlhO9dv7ak6XkXPYUdfqP35lUPlTcu6z65imRXMR/WKH/y17BAQEmumnj++Z3UTt+fRD786kSvfP1B32FUaDwAA';

console.log('Currently Env: Lab');

// axios.get(
//     `https://api.ebay.com/buy/browse/v1/item_summary/search?q=watch&limit=200`,
//     {
//         headers: { 'Authorization': `Bearer ${Token}` }
//     },
// ).then(res => console.log('Done')).catch(err => console.log(err.response.statusText));

const now = Date.now();
console.log(now);
const options = {
    url: 'https://api.ebay.com/buy/browse/v1/item_summary/search?category_ids=281&limit=50',
    headers: {
        'Authorization': `Bearer ${Token}`
    }
};

function callback(error, response, body, time) {
    console.log(response);
    console.log(Date.now() - now);
}

request(options, callback);