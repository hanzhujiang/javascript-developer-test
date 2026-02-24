const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const results = await Promise.all(
    urls.map(async (url) => {
      try {
        const response = await httpGet(url);

        if (response.status === 200) {
          const { message } = JSON.parse(response.body);
          return { 'Arnie Quote': message };
        } else {
          const { message } = JSON.parse(response.body);
          return { 'FAILURE': message };
        }
      } catch (error) {
        return { 'FAILURE': error.message };
      }
    })
  );

  return results;
};

module.exports = {
  getArnieQuotes,
};
