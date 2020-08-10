
import withData from '../../middlewares/withData'
import _ from "lodash"

const handler = async (req, res) => {
  try {
    const cards = _.sampleSize(req.cards.filter(x => x.level >= 3), 3)
    return res.status(200).json({ cards })
    
  } catch (error) {
    return res.status(500)
  }
}

export default withData(handler)
