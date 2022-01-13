import React, {Component} from "react";

class PersonCardComponent extends Component {
    /*constructor(firstName, lastName, age, hairColor) {
        super(firstName, lastName, age, hairColor)
        console.log(this);
    }*/

    render() {
        return (
            <fieldset>
                <legend>PersonCardComponent.jsx</legend>
                <div>
                    <h1>{ this.props.lastName },  { this.props.firstName }</h1>
                    <h3>Age: { this.props.age }</h3>
                    <h3>Hair Color: { this.props.hairColor }</h3>
                </div>
            </fieldset>
        );

    }
}

export default PersonCardComponent;
