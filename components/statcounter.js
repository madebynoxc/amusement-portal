import AnimatedNumber from 'react-animated-number';

export default class StatCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: props.maxValue }
    }

    render() {
        return (
            <div>
                <AnimatedNumber className="numbers" value={this.state.value} duration={2000} formatValue={n => Math.round(n)} />

                <span>{this.props.title}</span>
            </div>
        )
    }
}
