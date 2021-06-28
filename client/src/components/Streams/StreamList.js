import { connect } from 'react-redux';
import { fetchStreams } from '../action';
import { Component } from 'react';

class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams();
    }
    renderedList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>

                </div>
            );
        })
    }
    render() {

        return (
            <div>
                <h3>Streams</h3>
                <div className="ui celled list">
                    {this.renderedList()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams) }
}
export default connect(mapStateToProps, { fetchStreams })(StreamList);