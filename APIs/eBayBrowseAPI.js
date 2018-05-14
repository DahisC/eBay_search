const axios = require('axios');
const Token = 'v^1.1#i^1#I^3#p^1#f^0#r^0#t^H4sIAAAAAAAAAOVXfWwURRS/6xc0UEpQgRSQY0tjxe7e7N5t726lp0dLbUO/6J2IrZXM7c62S+92z505ymGApmLRxEhI+EMhgZIgBmJAI1ZD0ERNROTDxKA0EBI1SggxigSiiUad3TvKtRI+i5B4/1zmzZs37/d7vzezA3oLCuf11/X/VuQclzPQC3pznE5+AigsyH9kUm5OSb4DZDk4B3rn9ub15Z6dj2E8lpBaEU4YOkaulfGYjiXbWMUkTV0yINawpMM4whKRpXCosUESOCAlTIMYshFjXPU1VYwXyF6fKiPZIwuK7APUql+OGTHovB94ZOhDPkXx+ioVROcxTqJ6HROokypGALyfBSLLCxHgl7xA4nnO5xXaGNcSZGLN0KkLB5igna5krzWzcr12qhBjZBIahAnWh2rDzaH6moVNkfnurFjBDA9hAkkSjxxVGwpyLYGxJLr2Ntj2lsJJWUYYM+5geoeRQaXQ5WRuIX2b6oCKgCgijwgDwCv4xobKWsOMQ3LtPCyLprCq7SohnWgkdT1GKRvR5UgmmVETDVFf47L+FidhTFM1ZFYxCxeEng61tDDBGtil4eouxIYRNOWuBQbb0lrDAkWt9AG/GmCR4g0IdJDZKB0tQ/OonaoNXdEs0rCrySALEM0ajebGk8UNdWrWm82QSqyMsvx4cJlDj6/NKmq6iknSpVt1RXFKhMseXr8Cw6sJMbVokqDhCKMnbIqqGJhIaAozetLWYkY+K3EV00VIQnK7e3p6uB4PZ5idbgEA3r20sSEsd6E4ZKiv1etpf+36C1jNhiJTbVF/iaQSNJeVVKs0Ab2TCQo+UfQJGd5HphUcbf2XIQuze2RHjFWHCKoSjfKiD6geMSpAMBYdEsyI1G3lgaIwxcah2Y1IIgZlxMpUZ8k4MjVF8oiq4PGriFUqAyrrDagqGxWVSpZXEQIIRaNywP9/apQblXpYNhKoxYhpcmpMBD9mYveYSgs0SSqMYjFquFHVXxUktkDecXhWr98URCsGpkFgQuMsbXOyEXcbkB5qlmmZnfVt4dbofXhPFZUCTCPVlPRFxtlwObxC5kyEjaRJ73Cu2TrXI0Y30mmXENOIxZC5hL8tJsbuRL9Lp/lVUckxjdK47F5DdpPH5C1qG5K7iDqvz9l+FeS8KFTyvNfL355aq+26RlL/waF1U4WtMzBByh34AHGPfA4FHfaP73O+B/qc79AXFXCDMr4UzCnIfTIvd2IJ1gjiNKhyWOvU6Ve+ibhulEpAzcwpcLbPfHvXsqwH2EAHmD78BCvM5SdkvcfAzCsz+XzxtCLeD0ReAH4v4Pk2UHplNo+fmnf/Q+WHLm7qaIg0mata5xY7DhofLK8ARcNOTme+gyrDcSD/MdfZC4+XdyfenyFPOr3ux5+/WX3p3NbpH+39SvulY7Cx1lPc8+aXrspX927edmqwYmj6ohn9s9et9Yw/eH7hkXPnX9x5fl/bE7vLq1+b9rquHT5T3jD04OLtFavR7uJvOyevfa7l96WvHHN8fbxMcZ/q35/q2DAbz3p+z5qGtpMn/z7ROnFK0cYL+xYdubR91ud1O3/Yo0+ePUGWt5w4A8ZJ3R/D0i3M0NFNx74YzPuu5KUN21Zwka2NL3/2x7w35tTFh5hLx3esUzYeSgQc4sV3Pyzq3NW+in12fDvY/P2vxccHPj3QVlhb9kDDJ/DojikPA27NT31T95/+85kXjjx1eNKGR/+6r6SsYsVb66vT5fsH/vALSBoPAAA=';

let progressCount = 0;

module.exports = function search(categoryID, sellerID = '', progressEmit) {
    console.log('hi');
    console.log(progressEmit);
    axios.get(
        //`https://api.ebay.com/buy/browse/v1/item_summary/search?category_ids=${categoryID}&filter=sellers:{${sellerID}}&limit=200&offset=${progressCount}`,
        `https://api.ebay.com/buy/browse/v1/item_summary/search?category_ids=281&filter=sellers:{leperfect}&limit=200&offset=${progressCount}`,
        {
            headers: { 'Authorization': 'Bearer v^1.1#i^1#I^3#p^1#f^0#r^0#t^H4sIAAAAAAAAAOVXfWwURRS/6xc0UEpQgRSQY0tjxe7e7N5t726lp0dLbUO/6J2IrZXM7c62S+92z505ymGApmLRxEhI+EMhgZIgBmJAI1ZD0ERNROTDxKA0EBI1SggxigSiiUad3TvKtRI+i5B4/1zmzZs37/d7vzezA3oLCuf11/X/VuQclzPQC3pznE5+AigsyH9kUm5OSb4DZDk4B3rn9ub15Z6dj2E8lpBaEU4YOkaulfGYjiXbWMUkTV0yINawpMM4whKRpXCosUESOCAlTIMYshFjXPU1VYwXyF6fKiPZIwuK7APUql+OGTHovB94ZOhDPkXx+ioVROcxTqJ6HROokypGALyfBSLLCxHgl7xA4nnO5xXaGNcSZGLN0KkLB5igna5krzWzcr12qhBjZBIahAnWh2rDzaH6moVNkfnurFjBDA9hAkkSjxxVGwpyLYGxJLr2Ntj2lsJJWUYYM+5geoeRQaXQ5WRuIX2b6oCKgCgijwgDwCv4xobKWsOMQ3LtPCyLprCq7SohnWgkdT1GKRvR5UgmmVETDVFf47L+FidhTFM1ZFYxCxeEng61tDDBGtil4eouxIYRNOWuBQbb0lrDAkWt9AG/GmCR4g0IdJDZKB0tQ/OonaoNXdEs0rCrySALEM0ajebGk8UNdWrWm82QSqyMsvx4cJlDj6/NKmq6iknSpVt1RXFKhMseXr8Cw6sJMbVokqDhCKMnbIqqGJhIaAozetLWYkY+K3EV00VIQnK7e3p6uB4PZ5idbgEA3r20sSEsd6E4ZKiv1etpf+36C1jNhiJTbVF/iaQSNJeVVKs0Ab2TCQo+UfQJGd5HphUcbf2XIQuze2RHjFWHCKoSjfKiD6geMSpAMBYdEsyI1G3lgaIwxcah2Y1IIgZlxMpUZ8k4MjVF8oiq4PGriFUqAyrrDagqGxWVSpZXEQIIRaNywP9/apQblXpYNhKoxYhpcmpMBD9mYveYSgs0SSqMYjFquFHVXxUktkDecXhWr98URCsGpkFgQuMsbXOyEXcbkB5qlmmZnfVt4dbofXhPFZUCTCPVlPRFxtlwObxC5kyEjaRJ73Cu2TrXI0Y30mmXENOIxZC5hL8tJsbuRL9Lp/lVUckxjdK47F5DdpPH5C1qG5K7iDqvz9l+FeS8KFTyvNfL355aq+26RlL/waF1U4WtMzBByh34AHGPfA4FHfaP73O+B/qc79AXFXCDMr4UzCnIfTIvd2IJ1gjiNKhyWOvU6Ve+ibhulEpAzcwpcLbPfHvXsqwH2EAHmD78BCvM5SdkvcfAzCsz+XzxtCLeD0ReAH4v4Pk2UHplNo+fmnf/Q+WHLm7qaIg0mata5xY7DhofLK8ARcNOTme+gyrDcSD/MdfZC4+XdyfenyFPOr3ux5+/WX3p3NbpH+39SvulY7Cx1lPc8+aXrspX927edmqwYmj6ohn9s9et9Yw/eH7hkXPnX9x5fl/bE7vLq1+b9rquHT5T3jD04OLtFavR7uJvOyevfa7l96WvHHN8fbxMcZ/q35/q2DAbz3p+z5qGtpMn/z7ROnFK0cYL+xYdubR91ud1O3/Yo0+ePUGWt5w4A8ZJ3R/D0i3M0NFNx74YzPuu5KUN21Zwka2NL3/2x7w35tTFh5hLx3esUzYeSgQc4sV3Pyzq3NW+in12fDvY/P2vxccHPj3QVlhb9kDDJ/DojikPA27NT31T95/+85kXjjx1eNKGR/+6r6SsYsVb66vT5fsH/vALSBoPAAA=' }
        },
    )
    .then((res) => {
        console.log(res.data.itemSummaries.length);
        progressEmit(res.data.itemSummaries.length);
        progressCount += res.data.itemSummaries.length;
        console.log(`現在進度 - ${progressCount} 筆資料`);
        console.log(res.data.itemSummaries[0]);
        res.data.itemSummaries.length == 200
        ? search(categoryID, sellerID, progressEmit)
        : console.log('done');
    }).catch((err) => { console.log(err); });
}