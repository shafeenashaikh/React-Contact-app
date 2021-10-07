import React from "react";
import { Link } from "react-router-dom";
// import User from '../images/User.png';

const ContactDetails = (props) => {

   const {name, email} = props.location.state.contact;
    return(
      <div className="main">
           <div className="ui card center">
                <div className="content"><br/><br/>
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
           </div>
      </div>
    )
}
export default ContactDetails