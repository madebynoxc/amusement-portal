import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/footer';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';

const Home = () => (
    <Layout>
    <div className="main">
        <div className="container">

            <div className="article">
                <h1>...what is this?</h1>
                <div>
                    <b>Amusement Club</b> is a global gacha game for Discord with thousands of cute and fancy cards made by the bot's community.
                    <br/><br/>
                    You can get started on any server by typing <code>->claim</code> in a bot channel. You will get your first card and special card of the day if you are new player. Each claim will cost you more <b>tomatoes</b> (in-game currency)<br/>
                    <code>->daily</code> will reset your claim cost and give you extra tomatoes.<br/>
                    Collect more cards and get a <b>hero</b> to unlock full game potential!<br/>
                    <code>->help</code> will explain all other functionality<br/>
                </div>
            </div>

            <div className="article">
                <h1>you can also...</h1>
                <img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/trade.jpg"/>

                <div className="feature">
                    <div className="title">Trade</div><br/>
                    cards with other players globally. Your card list is the same on any server throughout Discord. Take this opportunity to visit more servers and meet new people!<br/>
                    You can type <code>->sell @user card_name</code> a card to player and get bot evaluated price in <b>tomatoes</b>
                </div>
            </div>

            <div className="article">
                <img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/hero.jpg"/>

                <div className="feature">
                    <div className="title">Get a Hero</div><br/>
                    who will open full bot features for you once you have <b>50 stars</b><br/>
                    Each hero has various abilities that fit your own unique play style<br/>
                    Typing <code>->hero</code> will summon your current hero
                </div>
            </div>

            <div className="article">
                <img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/forge.jpg"/>

                <div className="feature">
                    <div className="title">Forge</div><br/>
                    your cards and get new one with higher rarity.<br/>
                    Typing <code>->forge card_1, card_2</code> will consume two cards of the same level giving you a card <b>one level higher</b>
                </div>
            </div>

            <div className="article">
                <img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/auction.jpg"/>

                <div className="feature">
                    <div className="title">Participate in auctions</div><br/>
                    where you can sell or bid on cards competing with other players typing<br/>
                    <code>->auc</code> will show all current auctions<br/>
                    This feature is available once you have a hero
                </div>
            </div>

            <div style={{height: "50px"}}/>
        </div>
    </div>
    <style jsx>{`
        .container {
          width: 800px;
          margin: auto;
          color: #fff;
        }
          
          .container .video {
            display: inline-block;
            width: 400px;
            margin-left: 50px;
            margin-top: 20px;
            vertical-align: top;
            background-color: #35383E;
          }

            .container .video video {
              width: 100%;
            }
          
          .container .article {
            margin-top: 30px;
            width: 100%;
          }

            .container .article span {
              display: block;
              margin: 0 150px;
              margin-bottom: 20px;
              text-align: center;
            }

            .container .article h1 {
              width: 100%;
              display: block;
              font-size: 35px;
              font-weight: 300;
              color: #e8ad5a;
              text-align: center;
              margin: 30px 0;
            }

            .container .article .title {
              display: inline-block;
              font-size: 30px;
              color: #4faeb1;
              vertical-align: top;
              margin-top: 10px;
              margin-bottom: 20px;
              font-weight: 600;
            }

              .container .article div {
                display: inline-block;
                font-size: 18px;
                font-weight: 300;
                line-height: 25px;
                letter-spacing: 1px;
                width: 350px;
                vertical-align: top;
              }

              .container .article div.feature {
                margin-top: 20px;
                margin-left: 30px;
                width: 400px;
                height: 100%;
              }

              .container .article img {
                display: inline-block;
                font-size: 18px;
                font-weight: 300;
                line-height: 25px;
                letter-spacing: 1px;
                margin-top: 20px;
                width: 350px;
                border-radius: 4px;
                vertical-align: top;
                box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 
                            0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
                            0px 3px 1px -2px rgba(0, 0, 0, 0.12);
              }

              .container .article .card {
                display: inline-block;
                margin: 10px;
                background-color: #2c2c2c;
                width: 245px;
                transition: .5s;
              }

              .container .article .card:hover {
                transition: .25s;
              } 

                .container .article .card h3 {
                  margin: 10px 0;
                  font-size: 20px;
                  width: 100%;
                  text-align: center;
                }

                  .container .article .card h3 b {
                    font-size: 32px;
                    color: #4faeb1;
                  }

                .container .article .card p {
                  margin: 5px 0;
                  font-size: 17px;
                  width: 100%;
                  text-align: center;
                }

                .container .article .card img {
                  width: 100%;
                  margin: 0;
                  transition: .25s;
                }

                .container .article .card img:hover {
                  opacity: .15;
                  transition: .25s;
                }

                .container .article .card div.caption {
                  display: block;
                  position: absolute;
                  width: 245px;
                  text-align: center;
                  margin-top: -250px;
                  opacity: 0;
                  transition: .25s;
                  pointer-events: none;
                }

                  .container .article .card div.caption img {
                    display: block;
                    border-radius: 100%;
                    width: 50px;
                    margin: auto;
                    margin-bottom: 20px;
                  }

                .container .article .card img:hover + div {
                  opacity: 1;
                  transition: .25s;
                }

          .container .stats {
            width: 100%;
          }

            .container .stats div {
              display: inline-block;
              margin: auto;
              text-align: center;
              margin-top: 25px;
              width: 160px;
              white-space: nowrap;
            }

              .container .stats div span {
                display: block;
                font-size: 22px;
                font-weight: 900;
                /*color: #e8ad5a;*/
              }

              .container .stats div span.numbers {
                font-size: 35px;
                color: #5fc3c7;
                margin: 10px 0;
                animation: shine2 10s linear infinite;
              }
    `}</style>
    </Layout>
)

export default Home
