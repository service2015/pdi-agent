export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  try {
    const { text, profile_ids, scheduled_at } = req.body;
    const params = new URLSearchParams();
    params.append('access_token', process.env.BUFFER_ACCESS_TOKEN);
    profile_ids.forEach(id => params.append('profile_ids[]', id));
    params.append('text', text);
    if (scheduled_at) params.append('scheduled_at', scheduled_at);
    const response = await fetch('https://api.bufferapp.com/1/updates/create.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Buffer API error', detail: error.message });
  }
}
