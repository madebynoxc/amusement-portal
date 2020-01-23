
import DiscordOauth2 from 'discord-oauth2'

const oauth = new DiscordOauth2()

const withDiscord = handler => (req, res) => {
  req.oauth = oauth
  return handler(req, res)
}

export default withDiscord
