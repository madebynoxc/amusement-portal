import React from 'react'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import getHost from '../utils/get-host'
import { useMediaQuery } from 'react-responsive'

import { 
  GridList,
  GridListTile,
} from '@material-ui/core';

const Cards = props => {
  //console.log(props)
  let { cards, type } = props
  cards = cards.filter(x => x)

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

  return (
      <Layout>
        <h1>{type === 'claim'? "Your claimed cards:" : ""}</h1>
        <GridList spacing={10} cellHeight={'auto'} cols={isTabletOrMobile? 2 : 4}>
            {cards.map((x, i) => (
              <GridListTile key={x.url}>
                <img src={x.url} className='card'/>
              </GridListTile>
            ))}
        </GridList>

        <style jsx>{`
          h1 {
            margin-bottom: 2rem;
          }
        `}</style>
      </Layout>
  )
}

Cards.getInitialProps = async ctx => {
  //const apiUrl = getHost(ctx.req) + '/api/cards'
  const apiUrl = 'http://noxcaos.ddns.net:3000/api/cards'

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Data: JSON.stringify({ ids: ctx.query.ids })
      },
    })

    if (response.ok) {
      const js = await response.json()
      js.type = ctx.query.type
      return js

    } else {
      throw new Error(response.statusText)
    }
  } catch (error) {
    console.error(error)
    return {}
  }
}

export default Cards
