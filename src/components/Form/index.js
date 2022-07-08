import {Component, useState} from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Input, Row, Button, Comment } from './style';

const Form = (props) => {

    const [form, setForm] = useState({
        value: '',
        date:  new Date().toISOString().substring(0, 10),
        comment: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();

        props.onChange(form);
        setForm({
            ...form,
            value: '',
            comment: ''
        });
    }

    const onChange = (e) => {
        const {value, name} = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <Wrapper>
            <form onSubmit={onSubmit} >
                    
                <Row>
                    <Input type="number"
                        name='value'
                        placeholder='Сума'
                        value={form.value}
                        onChange={onChange} />

                    <Input type="date" 
                        data-date-format="DD MMMM YYYY"
                        value={form.date}
                        onChange={onChange} />
                </Row>

                <Row>
                    <Button>Зберегти</Button>

                    <Comment name="comment" 
                            value={form.comment}
                            placeholder='Коментар'
                            onChange={onChange} />
                </Row>
                        
            </form>
        </Wrapper>
    )
}

Form.propTypes = {
    onChange: PropTypes.func
}

export default Form;