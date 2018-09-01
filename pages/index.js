import '../style.css';
import 'isomorphic-unfetch';
import StatCounter from '../components/statcounter'
import Footer from '../components/footer'

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
                        <span>Amusement Club is a bot that allows you to collect and make amazing cards from your favourite show or game!</span>
                        <span>Invite to your Discord server or get started with any other community</span>
                        <div className="links">
                            <a href="https://discordapp.com/oauth2/authorize?client_id=340988108222758934&scope=bot&permissions=126016">
                                <span>🍅 Get invite link</span>
                            </a>
                            <a href="https://discordapp.com/oauth2/authorize?client_id=340988108222758934&scope=bot&permissions=126016">
                                <span>🍅 Join fandom server with bot</span>
                            </a>
                            <a href="https://discordbots.org/servers/351871492536926210">
                                <span>🍅 Join main bot server</span>
                            </a>
                        </div>
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
                        <StatCounter title="weekly users" minValue={0} maxValue={this.props.stats.weekly} />
                        <StatCounter title="players" minValue={0} maxValue={this.props.stats.players} />

                    </div>

                    <div className="article">
                        <span className="title">Get Started</span>
                        <p>
                            Amusement Club is an amazing gacha game for discord! Bot already has more than 10,000 cards from over more than 50 fandoms created and submitted by people from bot's community. After one year in service it currently has more than 1500 active weekly users of 5000+ players overall from hundreds of servers. Use <code>->claim</code> to get cards for tomatoes (in-game currency). You can use ->daily every 20 hours and get free tomatoes. Get a hero after 50 Stars and earn tomatoes from completing ->quests that you get with ->daily and trading using ->sell and ->auction!
                        </p>

                        <div className="video">
                            <video autoplay="true" muted="true" loop="true">
                                <source src="https://amusementclub.nyc3.digitaloceanspaces.com/web/demonstration.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>

                    <div className="article">
                        <span className="title">Something Else</span>
                        <p>
                            Amusement Club is an amazing gacha game for discord! Bot already has more than 10,000 cards from over more than 50 fandoms created and submitted by people from bot's community. After one year in service it currently has more than 1500 active weekly users of 5000+ players overall from hundreds of servers. Use ->claim to get cards for tomatoes (in-game currency). You can use ->daily every 20 hours and get free tomatoes. Get a hero after 50 Stars and earn tomatoes from completing ->quests that you get with ->daily and trading using ->sell and ->auction!
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>)
    }
}
