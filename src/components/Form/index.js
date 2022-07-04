import {Component} from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Input, Row, Button, Comment } from './style';

class Form extends Component {

    constructor() {
        super();

        this.state = {
            value: '',
            date:  new Date().toISOString().substring(0, 10),
            comment: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onChange(this.state);
        this.setState({
            value: '',
            date: '',
            comment: ''
        });
    }

    onChange = (e) => {
        const {value, name} = e.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Wrapper>
                <form onSubmit={this.onSubmit} >
                        
                    <Row>
                        <Input type="number"
                            name='value'
                            placeholder='Сума'
                            value={this.state.value}
                            onChange={this.onChange} />

                        <Input type="date" 
                            data-date-format="DD MMMM YYYY"
                            value={this.state.date}
                            onChange={this.onChange} />
                    </Row>

                    <Row>
                        <Button>Зберегти</Button>

                        <Comment name="comment" 
                                value={this.state.comment}
                                placeholder='Коментар'
                                onChange={this.onChange} />
                    </Row>
                         
                </form>
            </Wrapper>
        )
    }
}

Form.propTypes = {
    onChange: PropTypes.func
}

export default Form;