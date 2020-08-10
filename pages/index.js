import React from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Layout from '../components/layout'
import { withStyles } from '@material-ui/core/styles'
import getHost from '../utils/get-host'

const styles = {
  button: {
    'display': 'block',
    'background-color': '#222',
    'font-size': '25px',
    'font-weight': 600,
    'padding': '15px',
    'color': '#fff',
    'margin': '80px auto',
    'left': 0,
    'right': 0,
    '&:hover': {
      'background-color': '#444',
    }
  },

  buttonimg: {
    'vertical-align': 'bottom',
    'margin-right': '15px',
  },

  'buttonspan': {
    'display': 'block',
    'vertical-align': 'top',
    'background': 'radial-gradient(#eb2196, #0d4acf, #2b9ab5)',
    'background-size': '500% 500%',
    'background-clip': 'text',
    'text-fill-color': 'transparent',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    'animation': 'shine 45s linear infinite',
  },
}

const Home = props => {
  const cards = props.cards.filter(x => x)
  const { classes } = props;

  return (
    <Layout>
      <div className="container">
        <div>
          <img src={cards[0].url} className='card'/>
          <img src={cards[1].url} className='card'/>
          <img src={cards[2].url} className='card'/>
        </div>

        <div style={{height: '50px'}}></div>
        {/*<Icon className="button-icon"><img src="https://amusementclub.nyc3.cdn.digitaloceanspaces.com/web/alexandritepfp.jpg" /></Icon>*/}

        <h1 style={{'text-align': 'center'}}>Amusement Club: Global Gacha for Discord</h1>
        <h3 style={{'text-align': 'center'}}>Claim and create cards, build your guild, choose your hero character craft various effects and trade on auctions. 
          All your progress is transferred between Discord servers</h3>

        <Button variant="contained" className={props.classes.button}>
            {/*<Icon className={props.classes.buttonimg}><img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/discord_logo.svg"/></Icon>*/}
            <span className={props.classes.buttonspan}>Add to Discord</span>
        </Button>
      </div>
        
    <style jsx>{`

      body {
        background-image: url(https://amusementclub.nyc3.cdn.digitaloceanspaces.com/web/blurback.jpg);
      }

      .container {
        width: 100%;
        margin: auto;
        color: #fff;
      }

      .container .card {
        width: 250px;
        margin: 0 35px;
      }

      h2 {
        color: #fff;
      }

      .head-content button:hover {
        background-color: #2c2c2c;
      }

        .head-content button > span:first-child {
          display: block;
          vertical-align: top;
          background: radial-gradient(#ebb35b,  #e8ad5a, #f8d148, #adcd86, #5abec1, #4faeb1, #5abec1, #adcd86, #f8d148, #e8ad5a, #ebb35b); 
          background-size: 500% 500%;
          background-clip: text;
          text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 45s linear infinite;
        }

        .head-content button img {
          vertical-align: bottom;
        }

        .head-content button img {
          margin-right: 15px;
        }

        @keyframes shine {
          to {
            background-position: 500% 500%;
          }
        }
      `}</style>
    </Layout>
  )
}

Home.getInitialProps = async ctx => {
  const apiUrl = getHost(ctx.req) + '/api/home'

  try {
    const response = await fetch(apiUrl)

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

export default withStyles(styles)(Home)
