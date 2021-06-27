import React, { Component } from 'react';
import { connect } from 'react-redux';
class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const breed = this.breed.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            breed,
            message,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
        this.breed.value = ''
    }
    render() {
        return (
            <div>
                <h1>Create Pokemon</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                        placeholder="Enter name" />
                    <br /><br />
                    <textarea required type="text" ref={(input) => this.breed = input}
                        placeholder="Enter Breed" />
                    <br /><br />
                    <textarea required rows="3" ref={(input) => this.getMessage = input} cols="20"
                        placeholder="Enter Description" />
                    <br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);