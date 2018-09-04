
export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer">
                <div className="content">
                    <div className="block">
                        <img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/amusement-logo-small.png"/>
                        <img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/discord.png"/>
                        <a href="https://discordbots.org/bot/340988108222758934" >
                          <img src="https://discordbots.org/api/widget/upvotes/340988108222758934.svg" alt="Amusement Club" />
                        </a>
                        <span>with ❤️ by NoxCaos</span>
                    </div>
                    <div className="block">
                        <span className="title">Get Started</span>
                        <ul>
                            <li><a href="https://discordapp.com/oauth2/authorize?client_id=340988108222758934&scope=bot&permissions=126016">Invite</a></li>
                            <li><a>Documentation</a></li>
                            <li><a href="https://discord.gg/kqgAvdX">Bot Discord</a></li>
                        </ul>
                    </div>
                    <div className="block">
                        <span className="title">Links</span>
                        <ul>
                            <li><a href="https://github.com/NoxCaos/amusement-club">GitHub</a></li>
                            <li><a href="https://ko-fi.com/noxcaos">Donate</a></li>
                            <li><a href="https://discordbots.org/bot/340988108222758934">Discord bot list</a></li>
                        </ul>
                    </div>
                    <div className="block">
                        <span className="title">Using</span>
                        <ul>
                            <li><a href="https://github.com/izy521/discord.io">Discord.io</a></li>
                            <li><a href="https://nodejs.org/">NodeJS</a></li>
                            <li><a href="https://www.mongodb.com/">MongoDB</a></li>
                            <li><a href="https://reactjs.org/">React</a></li>
                            <li><a href="https://nextjs.org/">NEXT.js</a></li>
                            <li><a href="https://material-ui.com">Material UI</a></li>
                            <li>Some Dark Magic</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}
