export default async function serverSideCall(req, res) {
  const {
    query: { q, units },
  } = req;

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=${process.env.API_KEY}&units=${units}`;
  const response = await fetch(baseUrl);
  res.status(200).json({
    data: response.data,
  });
}
