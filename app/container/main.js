import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../actions/usersActions'

import UserSearcher from '../components/userSearcher'
import UserViewer from '../components/userViewer'

class MainContainer extends React.Component {
    static propTypes = {
        users: React.PropTypes.object.isRequired,
        userActions: React.PropTypes.object.isRequired
    };

    constructor() {
        super()
    }

    state = {
        users: []
    };

    render() {
        var self = this;
        this.props.users.users.then(users => {
            self.setState({
                users: users
            });
        });

        return (
            <div className="user-module-container">
                <UserSearcher userActions={this.props.userActions}/>
                <UserViewer users={this.state.users}/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
