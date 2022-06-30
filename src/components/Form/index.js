import { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

    constructor() {
        super();

        this.state = {
            value: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onChange(this.state.value);
        this.setState({
            value: ''
        });
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

Form.propTypes = {
    onChange: PropTypes.func
}

export default Form;