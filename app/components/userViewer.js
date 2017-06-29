import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DataTables from 'material-ui-datatables';

class UserViewer extends React.Component {
    constructor(props) {
        super(props);
    };

    static propTypes = {
        users: React.PropTypes.array.isRequired
    };

    state = {
        dialogOpen: false,
        userForDialog: {}
    };

    TABLE_COLUMNS = [
        {key: 'id', label: 'User ID'},
        {key: 'name', label: 'Name'},
        {key: 'lastName', label: 'Last Name'},
        {key: 'fatherName', label: 'Father Name'},
        {key: 'adress', label: 'Location'},
        {key: 'birthDay', label: 'Birthday'}
    ];

    handleCellClick = (event, index, user) => {
        this.setState({dialogOpen: true, userForDialog: user});
    };

    handleClose = () => {
        this.setState({dialogOpen: false, userForDialog: {}});
    };

    render() {
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];
        return (
            <div className="user-info">
                {
                    this.props.users.length > 0

                        ? <DataTables
                        height={'auto'}
                        selectable={false}
                        showRowHover={true}
                        columns={this.TABLE_COLUMNS}
                        data={this.props.users}
                        showCheckboxes={false}
                        onCellClick={this.handleCellClick}
                        page={1}
                        count={100}
                        showFooterToolbar={false}/>

                        : null
                }
                <Dialog
                    title="User info"
                    actions={actions}
                    modal={false}
                    open={this.state.dialogOpen}
                    onRequestClose={this.handleClose}>

                    {this.TABLE_COLUMNS.map((column, i) => {
                        return <span key={i}
                                     className="dialog-line">
                            {column.label}: {this.state.userForDialog[column.key]}
                        </span>
                    })}
                </Dialog>
            </div>
        )
    }
}

export default UserViewer
