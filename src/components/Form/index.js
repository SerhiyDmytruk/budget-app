import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

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
            value: +value
        })
    }

    render () {
        return (
            <Fragment>
                <form onSubmit={this.onSubmit} className='form'>

                    <input type="number"
                    className='form__input'
                    name='balance' 
                    placeholder='Сума'
                    value = {this.state.value}
                    onChange={this.onChange} />

                    <button className='form__button'>Зберегти</button>
                </form>
            </Fragment>
        )        
    }
}

Form.propTypes = {
    onChange: PropTypes.func
}

export default Form;