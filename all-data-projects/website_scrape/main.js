const scrape = require('website-scraper');
const options = {
  urls: ['https://mezi.com/'],
  directory: './mezi',
};

// with async/await
// const result = await scrape(options);
//
// // with promise
// scrape(options).then((result) => {});
//
// // or with callback
scrape(options, (error, result) => {console.log(result)});
