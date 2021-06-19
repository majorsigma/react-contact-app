import React from 'react';

class EditContact extends React.Component {
    constructor(props) {
        super(props)
        const { id, name, email } = props.location.state.contact;
        this.state = {
            id,
            name,
            email
        };
    }

    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.updateContactHandler(this.state);
        this.setState({ name: "", email: "" });
        this.props.history.push("/");
    }

    render() {
        return (            
            <article className="ui main" style={{marginTop: 50,}}>
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            email="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                     <button className="ui button blue">Update</button>
                </form>
            </article>
        );
    }
}

export default EditContact;