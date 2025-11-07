const https = require('https');

const url = 'https://antonydigitalsolutionske.online/portfolio';

function check(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        resolve(res.statusCode);
      })
      .on('error', reject);
  });
}

(async () => {
  try {
    const status = await check(url);
    console.log(`Status: ${status}`);
    if (status !== 200) {
      console.error('Smoke check failed: expected 200');
      process.exit(1);
    }
    console.log('Smoke check passed');
  } catch (err) {
    console.error('Error running smoke check:', err.message || err);
    process.exit(2);
  }
})();
