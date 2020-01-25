
import withDiscord from '../../middlewares/withDiscord';
import withMongo from '../../middlewares/withMongo';
import withData from '../../middlewares/withData';

const handler = async (req, res) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).send('Authorization header missing')
  }

  const auth = await req.headers.authorization
  try {
    const { token } = JSON.parse(auth)
    const discord_user = await req.oauth.getUser(token)
    const user = await req.db.collection('users').findOne({ discord_id: discord_user.id })

    user.cards = user.cards.map(card => Object.assign({}, req.cards[card.id], card))
    user.discriminator = discord_user.discriminator

    if(discord_user.avatar)
      user.avatar = `https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.${discord_user.avatar.startsWith("a_") ? "gif" : "jpg"}`

    if (user) {
      return res.status(200).json({ user })
    } else {
      throw new Error('Cannot get user')
    }
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export default withDiscord(withMongo(withData(handler)))
