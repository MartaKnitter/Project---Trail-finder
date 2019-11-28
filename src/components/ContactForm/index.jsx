import React, {Component} from "react";


class Form extends Component {
    render() {
        return (
            <div>
                <label htmlFor="">Imię i Nazwisko:</label>
                <input type="text"/>
                <label htmlFor="">E-mail:</label>
                <input type="text"/>
                <label htmlFor="">Treść wiadomości:</label>
                <input type="text"/>
                <button>Send</button>
            </div>
        )
    }
}


export default Form;