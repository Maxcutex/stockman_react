import React, {useState} from 'react';
import { config } from '../../config';
import axios from 'axios';
import { useForm } from 'react-hook-form';
export const baseUrl = config.STOCKMAN_API_BASE_URL; 

const NewsLetterForm = (props) => {
    const [labelEmail, setLabelEmail] = useState('Your Email Here');
    const { handleSubmit, register, errors } = useForm();
    const [form, setFormState] = useState({
        email: '',
      });
    const handleOnClick = (e) => {
        setLabelEmail('');
    }
    const handleOnBlur= (e) => {
        const email = e.target.value;
        if(email.length ==0 ){
            setLabelEmail('Your Email Here');
        } 
        
    }
    const updateField = e => {
        setFormState({
          ...form,
          [e.target.name]: e.target.value
        });
      };
    const onSubmit = values => {
        console.log(values);
        var postObj = {email:values.email, is_active: true};
        console.log(postObj);

        axios({
            method: 'POST', 
            url:`${baseUrl}/NewsLetterList/`, 
            data:  postObj
          }).then((response)=>{
              console.log(response.data)
            if (response.data.id > 0){
              alert('Registration Complete.'); 
              setLabelEmail('Your Email Here');
              setFormState({
                email: '',
              })
            }else {
              alert('Registration Failed.')
            }
          }).catch(error => {
            alert('Registration Failed [' + error.response.data.email + ']');
            
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
        });
    };
    return (<form
        className='rd-mailform text-left rd-mailform-inline'
        data-form-output='form-output-global'
        data-form-type='subscribe'
        onSubmit={handleSubmit(onSubmit)}
    >
        <div className='form-wrap'>
            <label
                className='form-label text-italic'
                htmlFor='subscribe-email'
            >
                {labelEmail}
            </label>
            
            <input
                name='email'
                className='form-input'
                id='subscribe-email'
                type='email'
                onClick={handleOnClick}
                onBlur={handleOnBlur}
                onChange={updateField}
                value={form.email}
                ref={register({
                required: 'Required',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'invalid email address'
                }
                })}
            />
            {errors.email && errors.email.message}
        </div>
        <button
            className='button button-primary'
            type='submit'
        >
            Subscribe
        </button>
    </form>
      );
}
 
export default NewsLetterForm;