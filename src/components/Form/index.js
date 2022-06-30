import { Component } from 'react';

class Form extends Component {

    constructor() {
        super();

        this.state = {
            value: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(e, this.props, this.state);
        this.props.onChange(this.state.value);

    }

    onChange = (e) => {
        const value = e.target.value;

        this.setState({
            value
        })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="number"
                    name='balance' 
                    placeholder='Сума'
                    value = {this.state.value}
                    onChange={this.onChange} />
                    <button>Зберегти</button>
                </form>
            </div>
        )
    }
}

export default Form;