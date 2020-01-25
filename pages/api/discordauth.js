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
        
        //redirectUri: "http://localhost:3000/api/discordauth"
        redirectUri:"http://noxcaos.ddns.net:3000/api/discordauth"
    })

    return res.writeHead(302, { Location: `/profile?token=${response.access_token}` }).end()

  } catch (error) {
    const { response } = error
    return response
        ? res.status(response.status).json({ message: response.statusText })
        : res.status(400).json({ message: error.message })
  }
}
