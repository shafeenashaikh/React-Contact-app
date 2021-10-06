import React, { Component } from 'react';

class AddContact extends Component{
    render(){
        return(
            <div>
                <h2>Add Contact</h2>
                <form>
                    <div className="field">
                        <label>Name: </label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div><br/>
                    <div>
                        <label>Email: </label>
                        <input type="text" name="email" placeholder="Email"/>
                    </div><br/>
                    <button style={{backgroundColor:"#3b6ff5", color:"white", padding: "8px 10px", fontSize:"20px"}}>  Add</button>
                </form>
            </div>
        )
    }
}
export default AddContact