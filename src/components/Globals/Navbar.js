import React, {Component} from 'react';
import {Link} from 'gatsby';
import {FaCartArrowDown} from 'react-icons/fa';

//my own
import logo from '../../images/logo.svg';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    navbarOpen: false,
    css: 'collapse navbar-collapse',
    links: [
      {
        id: 1,
        path: '/',
        text: 'home',
      },
      {
        id: 2,
        path: '/about',
        text: 'about',
      },
    ],
  };

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({navbarOpen: false, css: 'collapse navbar-collapse'})
      : this.setState({
          navbarOpen: true,
          css: 'collapse navbar-collapse show',
        });
  };

  render() {
    return (
      <nav className='navbar navbar-expand-md bg-light navbar-light'>
        <Link to='/' className='navbar-brand'>
          <img src={logo} alt='logo' />
          {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/webalys */}
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          onClick={this.navbarHandler}
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className={this.state.css}>
          <ul className='navbar-nav mx-auto'>
            {this.state.links.map(({id, path, text}) => {
              return (
                <li key={id} className='nav-item'>
                  <Link to={path} className='nav-link text-capitalize'>
                    {text}
                  </Link>
                </li>
              );
            })}

            <li className='nav-item ml-md-5'>
              <FaCartArrowDown className='cart-icon snipcart-checkout' />
            </li>
            <li className='nav-item ml-2'>{this.props.anyNew}</li>
          </ul>
        </div>
      </nav>
    );
  }
}
