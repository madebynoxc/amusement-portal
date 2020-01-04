import '../style.css';
import 'isomorphic-unfetch';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';

export default class Votes extends React.Component {

    static async getInitialProps () {
        const res = await fetch('http://localhost:700/getvotes/');
        const obj = await res.json();
        return {data: obj};
    }

    render () {
        return (<div>
        	<div className="main">
                <div className="container">
                	<div className="article">
                        <br/><br/>
                        <h1>VOTING RESULTS 2019!</h1>
                        <span>Here is how the votes distributed across cards in 2019. This table includes only cards that got at least 3 votes.<br/> Thank you for participating, you can run ->vote to check how many times you voted.</span>
                        <br/><br/>

                        {this.props.data.map((x, i) => (
                            <Card className="card">

                                <img src={x.url}/>
                                <div className="caption">
                                    {x.card.name.replace(/_/gi, ' ')}<br/><b>{x.votes} votes</b><br/>Place: #{i + 1}
                                </div>

                                <h3><b>#{i + 1}</b></h3>
                            </Card>
                        ))}
                    </div>
            	</div>
            </div>
      	</div>)
    }
}
