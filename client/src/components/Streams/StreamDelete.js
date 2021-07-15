
import Modal from '../Modal';
import {Fragment} from 'react';
import history from '../../history';

const StreamDelete = () => {
    const actions = (
        <Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </Fragment>
    );
    return (
        <div>
            StreamDelete
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                action={actions}
                onDismiss= {()=>history.push('/')}
            />
        </div>

    );
}
export default StreamDelete;