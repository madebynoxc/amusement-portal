import '../style.css';
import 'isomorphic-unfetch';
import StatCounter from '../components/statcounter';
import Footer from '../components/footer';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';

export default class Index extends React.Component {

    static async getInitialProps () {
        const res = await fetch('http://localhost:700/getindex/');
        const obj = await res.json();
        return obj.content.object;
    }

    render () {
        return (<div>

            <div className="head-wrapper">
                <div className="back-image"/>
                <div className="head-content">
                    <div className="desc-content">
                        <span className="title">stay amused</span>
                        <span className="text">Amusement Club is a global Discord bot for collecting amazing cards from your favourite show or game!</span>
                        <span className="text">Gift a fun game to your discord community!</span>
                        <a href="https://discordapp.com/oauth2/authorize?client_id=340988108222758934&scope=bot&permissions=126017">
                            <Button variant="contained">
                                <Icon className="button-icon"><img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/discord_logo.svg" /></Icon>
                                Add to Discord
                            </Button>
                        </a>
                    </div>

                    <div className="daily-card">
                        <img src={this.props.card.url}/>
                        <div className="card-info">
                            <b>{this.props.card.name}</b>
                            <div>Fandom: <b>{this.props.card.collection}</b></div>
                            <div>Get started now and get this card!</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main">
                <div className="container">
                    <div className="stats">
                        <StatCounter title="servers" minValue={0} maxValue={this.props.stats.servers} />
                        <StatCounter title="cards" minValue={0} maxValue={this.props.stats.cards} />
                        <StatCounter title="fandoms" minValue={0} maxValue={this.props.stats.fandoms} />
                        <StatCounter title="users/week" minValue={0} maxValue={this.props.stats.weekly} />
                        <StatCounter title="players" minValue={0} maxValue={this.props.stats.players} />

                    </div>

                    <div className="article">
                        <h1>Important notice</h1>
                        <p>
                            At the start of <b>June 2020</b> Amusement Club will be upgraded to new version (known as 2.0) containing multiple improvements and features. 
                            However, a lot of current functionality will be replaced and changed.
                        </p>
                        <p><a href="/upgrade" style={{color: "#eb2196"}}>More information here</a></p>
                    </div>

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

                        <Paper className="video">
                            <video autoPlay="true" muted="true" loop="true">
                                <source src="https://amusementclub.nyc3.digitaloceanspaces.com/web/demonstration.mp4" type="video/mp4"/>
                            </video>
                        </Paper>
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

            <Footer />
        </div>)
    }
}
