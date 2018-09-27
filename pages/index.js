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

                    <div className="article">
                        <h1>featuring the following collections</h1>
                        <span>The following collections have partnered their discord server with the Amusement Club, if you join these servers you will only be able to get cards from that fandom. There are several other locked collections as well!</span>
                        <Card className="card">
                            <a href="https://discord.gg/HCyrmpX">
                                <img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/collections/kobayashi.jpg"/>
                                <div className="caption">
                                    <img src="https://cdn.discordapp.com/icons/260080390096683019/ff65872f1359f70bfb916b715e77da95.webp"/>
                                    Join<br/><b>/r/DragonMaid</b><br/>Discord
                                </div>
                            </a>
                            <h3>Dragon Maid</h3>
                        </Card>
                        <Card className="card">
                            <a href="https://discord.gg/ryDUcWc">
                                <img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/collections/darling.jpg"/>
                                <div className="caption">
                                    <img src="https://cdn.discordapp.com/icons/416807759502114827/7f03708239662d27c0955b21f2bca1f3.webp"/>
                                    Join<br/><b>Darling in the Franxx</b><br/>Discord
                                </div>
                            </a>
                            <h3>Darling in the FranXX</h3>
                        </Card>
                        <Card className="card">
                            <a href="https://discord.gg/madoka">
                                <img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/collections/madoka.jpg"/>
                                <div className="caption">
                                    <img src="https://cdn.discordapp.com/icons/364704870177046531/5e646bc4e8178d9ae5086d02b3673be9.webp"/>
                                    Join<br/><b>/r/MadokaMagica</b><br/>Discord
                                </div>
                            </a>
                            <h3>Madoka Magica</h3>
                        </Card>
                        <Card className="card">
                            <a href="https://discord.gg/9g24p52">
                                <img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/collections/touhou.jpg"/>
                                <div className="caption">
                                    <img src="https://cdn.discordapp.com/icons/342519426836594698/dcd9d544d9df06de18ebf10f45acd1af.webp"/>
                                    Join<br/><b>Gensokyo Crowd</b><br/>Discord
                                </div>
                            </a>
                            <h3>Touhou Project</h3>
                        </Card>
                        <Card className="card">
                            <a href="https://discord.gg/jt7N3BU">
                                <img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/collections/monogatari.jpg"/>
                                <div className="caption">
                                    <img src="https://cdn.discordapp.com/icons/204487943568621568/3b11116f294bdcda15c03b45fa267a42.webp"/>
                                    Join<br/><b>/r/araragi</b><br/>Discord
                                </div>
                            </a>
                            <h3>Monogatari Series</h3>
                        </Card>
                        <Card className="card">
                            <a href="https://discord.gg/vVxqsjJ">
                                <img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/collections/yuyuyu.jpg"/>
                                <div className="caption">
                                    <img src="https://cdn.discordapp.com/icons/204077054608670720/842ba47cde013e1a53b878673512fa19.webp"/>
                                    Join<br/><b>/r/YuYuYu Hero Club</b><br/>Discord
                                </div>
                            </a>
                            <h3>Yuuki Yuuna</h3>
                        </Card>
                        <h1>...and 50 more!</h1>
                    </div>

                    <div style={{height: "50px"}}/>
                </div>
            </div>

            <Footer />
        </div>)
    }
}
