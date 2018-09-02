import '../style.css';
import 'isomorphic-unfetch';
import StatCounter from '../components/statcounter';
import Footer from '../components/footer';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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
                        <span className="text">Amusement Club is a bot for collecting and making amazing cards from your favourite show or game!</span>
                        <span className="text">Gift a fun game to your discord community!</span>
                        <Button variant="contained">
                            <img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/discord_logo.svg"/>
                            Add to Discord
                        </Button>
                    </div>

                    <div className="daily-card">
                        <img src={this.props.card.url}/>
                        <div className="card-info">
                            <b>{this.props.card.name}</b>
                            <p>Fandom: <b>{this.props.card.collection}</b></p>
                            <p>Get started now and get this card!</p>
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
                        <span className="title">OwO where do I start</span>
                        <p>
                            <b>Amusement Club</b> is global gacha game for Discord with thousands of cute and fancy cards made by bot community.
                            <br/><br/>
                            Get started on any server by typing <br/><code>->claim</code> in bot channel. You will get your first card and special card of the day if you are new player. Each claim will cost you more.<br/>
                            <code>->daily</code> will reset your claim cost and give you extra tomatoes.<br/>
                            Collect more cards and get a <b>hero</b> to unlock full game potential!<br/>
                            <code>->help</code> will explain all other functionality<br/>
                        </p>

                        <Paper className="video">
                            <video autoplay="true" muted="true" loop="true">
                                <source src="https://amusementclub.nyc3.digitaloceanspaces.com/web/demonstration.mp4" type="video/mp4"/>
                            </video>
                        </Paper>
                    </div>

                    <div className="article">
                        <span className="title">very nice features</span>
                        <p>
                            Bot features trading, auctions, card forging, special heroes and effect cards. 
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>)
    }
}
