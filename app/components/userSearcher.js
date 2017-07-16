import http from '../services/http';

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

class UserSearcher extends React.Component {
    constructor() {
        super()
    }

    static propTypes = {
        userActions: React.PropTypes.object.isRequired
    };

    state = {
        names: [],
        lastNames: [],
        fatherNames: [],
        name: '',
        lastName: '',
        fatherName: '',
        users: []
    };

    handleUpdateInput = (searchProperty, arrayProperty, value) => {
        const self = this;
        value = value.trim();

        if (value.length === 0) {
            self.setState({
                [arrayProperty]: [],
                [searchProperty]: value
            });
        } else if (this.state[searchProperty][0] !== value[0]) {
            let request;
            switch (arrayProperty) {
                case 'names':
                    request = http.getNames(value[0] || '', this.state.lastName, this.state.fatherName);
                    break;
                case 'lastNames':
                    request = http.getLastNames(this.state.name, value[0] || '', this.state.fatherName);
                    break;
                case 'fatherNames':
                    request = http.getFatherNames(this.state.name, this.state.lastName, value[0] || '');
                    break;
            }
            request.done(dataArray => {
                self.setState({
                    [arrayProperty]: dataArray,
                    [searchProperty]: value
                });
            });
        }
    };

    handleNewRequest = (property, value) => {
        this.setState({
            [property]: value.trim()
        });
    };
    
    getUserByFullName = () => {
        this.props.userActions.getUserByFullName(this.state.name, this.state.lastName, this.state.fatherName)
    };

    render() {
        return (
            <div>
                <form className="user-form">
                    <AutoComplete
                        hintText="Name"
                        filter={AutoComplete.caseInsensitiveFilter}
                        dataSource={this.state.names}
                        onNewRequest={this.handleNewRequest.bind(this, 'name')}
                        onUpdateInput={this.handleUpdateInput.bind(this, 'name', 'names')}
                    />

                    <AutoComplete
                        hintText="Last Name"
                        filter={AutoComplete.caseInsensitiveFilter}
                        dataSource={this.state.lastNames}
                        onNewRequest={this.handleNewRequest.bind(this, 'lastName')}
                        onUpdateInput={this.handleUpdateInput.bind(this, 'lastName','lastNames')}
                    />

                    <AutoComplete
                        hintText="Father Name"
                        filter={AutoComplete.caseInsensitiveFilter}
                        dataSource={this.state.fatherNames}
                        onNewRequest={this.handleNewRequest.bind(this, 'fatherName')}
                        onUpdateInput={this.handleUpdateInput.bind(this, 'fatherName', 'fatherNames')}
                    />

                    <div>
                        <RaisedButton className="submit-btn"
                                      onClick={this.getUserByFullName}>Submit
                        </RaisedButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default UserSearcher
