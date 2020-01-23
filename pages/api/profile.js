import fetch from 'isomorphic-unfetch'
import DiscordOauth2 from 'discord-oauth2'

export default async (req, res) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).send('Authorization header missing')
  }

  const oauth = new DiscordOauth2()
  const auth = await req.headers.authorization

  try {
    const { token } = JSON.parse(auth)
    const user = await oauth.getUser(token)

    if (user) {
      return res.status(200).json({ user })
    } else {
      throw new Error('Cannot get user')
    }
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}
