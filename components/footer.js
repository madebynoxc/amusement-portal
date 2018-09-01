
export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer">
                <div className="content">
                    <img src="https://amusementclub.nyc3.digitaloceanspaces.com/web/yosoro.png"/>
                    <div className="centered">
                        <span>Amusement Club © 2018</span>
                    </div>
                    <img className="right" src="https://amusementclub.nyc3.digitaloceanspaces.com/web/discord.png"/>
                </div>
            </div>
        )
    }
}
