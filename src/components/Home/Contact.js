import React from 'react';
import Title from '../Globals/Title';

const Contact = () => {
  return (
    <section className='contact py-5'>
      <Title title='contact us' />
      <div className='row'>
        <div className='col-10 col-sm-8 col-md-6 mx-auto'>
          <form action='https://formspree.io/moqkqrlq' method='POST'>
            {/* name */}
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                className='form-control'
                placeholder='john'
              />
            </div>
            {/* email */}
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                className='form-control'
                placeholder='email@email.com'
              />
            </div>
            {/* description */}
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                name='description'
                id='description'
                cols='30'
                rows='10'
                className='form-control'
                placeholder='your description goes here'
              />
              {/* submit button */}
              <button
                type='submit'
                className='btn btn-yello btn-block text-capitalize mt-5'
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
