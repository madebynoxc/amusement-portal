import React from 'react'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import nextCookie from 'next-cookies'
import Layout from '../components/layout'
import { withAuthSync } from '../utils/auth'
import getHost from '../utils/get-host'
import cookie from 'js-cookie'

import { 
  GridList,
  GridListTile,
  Avatar
} from '@material-ui/core';

const Profile = props => {
  const { username, id, cards, avatar, discriminator } = props.user

  if(props.token)
    cookie.set('token', props.token, { expires: 1 })

  return (
    <Layout>
      <Avatar alt={username} src={avatar} />
      <h1>{username}#{discriminator}</h1>
      <p className="lead">{id}</p>

      <GridList spacing={10} cellHeight={'auto'} cols={4}>
        {cards.map((x, i) => (
          <GridListTile key={x.url}>
            <img src={x.url} className='card'/>
          </GridListTile>
        ))}
      </GridList>

      <style jsx>{`
        h1 {
          margin-bottom: 0;
        }

        .lead {
          margin-top: 0;
          font-size: 1.5rem;
          font-weight: 300;
          color: #666;
        }

        p {
          color: #6a737d;
        }
      `}</style>
    </Layout>
  )
}

Profile.getInitialProps = async ctx => {
  const token = ctx.query.token || nextCookie(ctx).token
  //const apiUrl = getHost(ctx.req) + '/api/profile'
  const apiUrl = 'http://noxcaos.ddns.net:3000/api/profile'

  const redirectOnError = () =>
    typeof window !== 'undefined'
      ? Router.push('/api/login')
      : ctx.res.writeHead(302, { Location: '/api/login' }).end()

  try {
    const response = await fetch(apiUrl, {
      credentials: 'include',
      headers: {
        Authorization: JSON.stringify({ token }),
      },
    })

    if (response.ok) {
      const js = await response.json()
      return js
    } else {
      console.error(error)
      //return await redirectOnError()
    }
  } catch (error) {
    console.error(error)
    //return redirectOnError()
  }
}

export default withAuthSync(Profile)
