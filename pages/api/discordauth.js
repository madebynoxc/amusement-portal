import fetch from 'isomorphic-unfetch'
import btoa from 'btoa'

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const redirect = encodeURIComponent('http://localhost:3000/api/discordauth');

export default async (req, res) => {
  try {
    if (!req.query.code) 
        throw new Error('NoCodeProvided');

    const code = req.query.code;
    const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${creds}`,
      },
    });

    if (response.ok) {
      const json = await response.json()
      
        res.writeHead(302, { Location: `/login?token=${json.access_token}` })
        return res.end()
    } else {
      const error = new Error(response.statusText)
      error.response = response
      throw error
    }
  } catch (error) {
    const { response } = error
    return response
      ? res.status(response.status).json({ message: response.statusText })
      : res.status(400).json({ message: error.message })
  }
}
