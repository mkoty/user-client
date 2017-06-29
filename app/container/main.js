import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import http from '../services/http'


import UserSearcher from '../components/userSearcher'
import UserViewer from '../components/userViewer'


class MainContainer extends React.Component {
    static propTypes = {
    };

    constructor() {
        super()
    }

    state = {
        users: []
    };

    getUserByFullName = (name, lastName, fatherName) => {
        const self = this;
        http
            .getUsersByFullName(name, lastName, fatherName)
            .done(users => {
                self.setState({users: users});
            });

    };

    render() {
        return (
            <div className="user-module-container">
                <UserSearcher getUserByFullName={this.getUserByFullName.bind(this)}/>
                <UserViewer users={this.state.users}/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(MainContainer)
