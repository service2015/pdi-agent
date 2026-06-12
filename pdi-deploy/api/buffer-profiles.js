export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  try {
    const response = await fetch(`https://api.bufferapp.com/1/profiles.json?access_token=${process.env.BUFFER_ACCESS_TOKEN}`);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Buffer profiles error' });
  }
}
