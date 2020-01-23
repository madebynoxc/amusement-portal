import fetch from 'isomorphic-unfetch'
import DiscordOauth2 from 'discord-oauth2'

export default async (req, res) => {
  try {
    const oauth = new DiscordOauth2()
    if (!req.query.code) 
        throw new Error('NoCodeProvided');

    const response = await oauth.tokenRequest({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    
        code: req.query.code,
        scope: "identify guilds",
        grantType: "authorization_code",
        
        redirectUri: "http://localhost:3000/api/discordauth"
    })

    res.writeHead(302, { Location: `/profile?token=${response.access_token}` })
    return res.end()

  } catch (error) {
    const { response } = error
    return response
        ? res.status(response.status).json({ message: response.statusText })
        : res.status(400).json({ message: error.message })
  }
}
