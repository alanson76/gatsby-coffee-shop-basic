import React from 'react';
import {Link} from 'gatsby';
import Title from '../Globals/Title';

const Info = () => {
  return (
    <section className='py-5'>
      <div className='container'>
        <Title title='our story' />
        <div className='row'>
          <div className='col-10 col-sm-8 mx-auto text-center'>
            <p className='lead text-muted mb-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis magnam corrupti itaque unde ea, nesciunt ab, alias
              eum deleniti laboriosam cum quidem ex facere rerum minima labore
              at. Officiis magnam, pariatur quaerat in autem sit neque rem
              eligendi doloremque facilis. Distinctio tempora vel molestias
              similique porro placeat! Odit veniam corporis possimus debitis
              nulla illo quo unde fugiat laboriosam doloremque? Rem excepturi
              laboriosam, neque deserunt est ut ipsam repellendus odio
              necessitatibus numquam, harum quidem error! Veritatis, cupiditate.
              Repudiandae unde inventore mollitia?
            </p>
            <Link to='/about/'>
              <button className='btn text-uppercase btn-yellow'>
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
