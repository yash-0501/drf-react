import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps){
        const {error, alert, message} = this.props;
        if( error!== prevProps.error ){
            console.log(error)
            if(error.msg.name)
                var key
                for (key in error.msg){
                    console.log(error.msg[key])
                    if(key==='non_field_errors')
                        alert.error(`${error.msg[key]}`)
                    else
                    alert.error(`${key}: ${error.msg[key]}`)
                }
                
        }
        if(message!==prevProps.message){
            if(message.deleteLead)
                alert.success(message.deleteLead)
            if(message.addLead)
                alert.success(message.addLead)
        }
    }

    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state =>({
    error:state.errorReducer,
    message:state.messageReducer
})

export default connect(mapStateToProps)(withAlert()(Alerts));
