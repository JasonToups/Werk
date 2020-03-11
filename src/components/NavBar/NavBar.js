import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import Register from './Modal/ModalRegister';
import Login from './Modal/ModalLogin';
import logo from './Werk-Logo.svg';
import './NavBar.css';

class NavBar extends Component {
  state = {
    // sets default active item
    activeItem: 'profile'
  }
  // passes props to the navbar - e=event
  handleItemClick = (e, props) => this.setState({ activeItem: props.name })

  render = props => {
    // console.log(this.props)
    const { activeItem } = this.state
    return (
      <div className='navbar'>
        <Menu inverted>
          <Menu.Item header>
            <Image
              src={logo}
              as='a'
              size='small'
              href='/'></Image></Menu.Item>
          <Menu.Menu position='right'>
            {this.props.currentUser ? (
              <>
                <Menu.Item
                  name='create post'
                />

                <Menu.Item
                  name='profile'
                  onClick={this.handleItemClick}
                >
                  <Link to='/profile'>Profile</Link>
                </Menu.Item>
                <Menu.Item
                  name='logout'
                  active={activeItem === 'logout'}
                  onClick={this.props.logout}
                >
                </Menu.Item>
              </>
            ) : (
                <>
                  <Menu.Item>
                    < Register />
                  </Menu.Item>
                  <Menu.Item>
                    < Login setCurrentUser={this.props.setCurrentUser} />
                  </Menu.Item>
                </>
              )}
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
export default NavBar