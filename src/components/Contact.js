import React, {Component} from 'react';
import './Contact.css'
import PropTypes from 'prop-types'

class Contact extends Component { 
  constructor(props) {
    super(props);
      this.state = {
        online: props.online
    }
  }
    render() {
    return (
    <div className="Contact">
        <img className="avatar" alt="" src={this.props.avatar}/>
        <div>    
        <h4 className="name">{this.props.name}</h4>
        <div className="status">
          <div className={this.state.online ? "status-online" : "status-offline"}></div>

          <p className="status-text"
          onClick={e => {let newState = !this.state.online 
                        this.setState({online: newState})}}
          >
            {this.props.online ? "online" : "offline"}
          </p>

        </div>
        </div>
    </div>)
}}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};
export default Contact;