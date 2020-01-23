
import withDiscord from '../../middlewares/withDiscord';
import withMongo from '../../middlewares/withMongo';

const handler = async (req, res) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).send('Authorization header missing')
  }

  const auth = await req.headers.authorization
  try {
    const { token } = JSON.parse(auth)
    const discord_user = await req.oauth.getUser(token)
    const user = await req.db.collection('users').findOne({ discord_id: discord_user.id })

    if (user) {
      return res.status(200).json({ user })
    } else {
      throw new Error('Cannot get user')
    }
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export default withDiscord(withMongo(handler))
