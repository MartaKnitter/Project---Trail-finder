import React, {Component} from "react";
import './contact.css';


class Form extends Component {
    render() {
        return (
            <div className="form-background" id="navigationform">
                <div className="contactform">
                    <label className="contactlabel" htmlFor="">Imię i Nazwisko:</label>
                    <input className="contactinput"type="text"/>
                    <label className="contactlabel" htmlFor="">E-mail:</label>
                    <input className="contactinput" type="text"/>
                    <label className="contactlabel" htmlFor="">Treść wiadomości:</label>
                    <input className="contactinput textform" type="text"/>
                    <button className="contactlabel contactbutton">Send</button>
                </div>
            </div>
        )
    }
}


export default Form;