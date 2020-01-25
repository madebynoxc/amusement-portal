
import cards from '../test/data/cards'
import collections from '../test/data/collections'
import items from '../test/data/items'

const baseURL = `https://amusementclub.nyc3.digitaloceanspaces.com`
cards.map(x => {
    const col = collections.filter(y => y.id == x.col)[0]
    x.url = `${baseURL}/cards/${col.id}/${x.level}_${x.name}.${x.animated? 'gif' : (col.compressed? 'jpg' : 'png')}`
})

const withData = handler => (req, res) => {
  req.cards = cards
  req.collections = collections
  req.items = items
  return handler(req, res)
}

export default withData
