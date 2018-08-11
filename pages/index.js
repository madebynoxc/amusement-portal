import '../style.css';

const Index = () => (
    <div>
    <div className="head-wrapper">
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
                <img src="https://amusementclub.nyc3.digitaloceanspaces.com/cards/gabrieldropout/3_the_seventh_trumpet.jpg"/>
                <div className="card-info">
                    <b>The Seventh Trumpet</b>
                    <p>Fandom: <b>Gabriel Dropout</b></p>
                    <p>Get started now and get this card!</p>
                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="stats">
            <div>
                <span className="numbers">800</span>
                <span>servers</span>
            </div>
            <div>
                <span className="numbers">10000</span>
                <span>cards</span>
            </div>
            <div>
                <span className="numbers">55</span>
                <span>fandoms</span>
            </div>
            <div>
                <span className="numbers">2000+</span>
                <span>weekly users</span>
            </div>
            <div>
                <span className="numbers">6000</span>
                <span>players</span>
            </div>
        </div>

        <div className="article">
            <span className="title">Get Started</span>
            <p>
                Amusement Club is an amazing gacha game for discord! Bot already has more than 10,000 cards from over more than 50 fandoms created and submitted by people from bot's community. After one year in service it currently has more than 1500 active weekly users of 5000+ players overall from hundreds of servers. Use ->claim to get cards for tomatoes (in-game currency). You can use ->daily every 20 hours and get free tomatoes. Get a hero after 50 Stars and earn tomatoes from completing ->quests that you get with ->daily and trading using ->sell and ->auction!
            </p>
            <span className="title">Something Else</span>
            <p>
                Amusement Club is an amazing gacha game for discord! Bot already has more than 10,000 cards from over more than 50 fandoms created and submitted by people from bot's community. After one year in service it currently has more than 1500 active weekly users of 5000+ players overall from hundreds of servers. Use ->claim to get cards for tomatoes (in-game currency). You can use ->daily every 20 hours and get free tomatoes. Get a hero after 50 Stars and earn tomatoes from completing ->quests that you get with ->daily and trading using ->sell and ->auction!
            </p>
        </div>
    </div>
    </div>
);

export default Index;
