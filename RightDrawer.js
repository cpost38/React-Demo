import React, { Component,Fragment } from 'react';
import Button from 'calcite-react/Button';
import Drawer from 'calcite-react/Drawer'
import SideNav from 'calcite-react/SideNav';
import SideNavLink from 'calcite-react/SideNav/SideNavLink';
import SideNavTitle from 'calcite-react/SideNav/SideNavTitle';

class RightDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerDirection: 'right',
      active: false,
    }

    this.showDrawerClicked = this.showDrawerClicked.bind(this)
    this.hideDrawer = this.hideDrawer.bind(this)
  }
  showDrawerClicked(drawerDirection) {
    this.setState({
      drawerDirection,
      active: true,
    })
  }

  hideDrawer() {
    this.setState({
      active: false,
    })
  }

  render() {
    return (
      <Fragment>
        <Button 
        style={{
          zIndex: 1,
          position: 'absolute',
          transform: 'rotate(90deg)' 
        }}
        onClick={() => this.showDrawerClicked('left')}>
            Data Drawer
          </Button>
          <Button
            style={{ 
              zIndex: 1,
              position: 'absolute',
              transform: 'rotate(90deg)' 
            }}
            onClick={() => this.showDrawerClicked('right')}
          >
            Tool Drawer
          </Button>
        <Drawer
          active={this.state.active}
          right={this.state.drawerDirection === 'right'}
          onRequestClose={this.hideDrawer}
        >
          <SideNav>
            <SideNavTitle>Sidenav Group</SideNavTitle>
            <nav>
              <SideNavLink>Agricultural</SideNavLink>
              <SideNavLink>Transition</SideNavLink>
              <SideNavLink>Perpetual</SideNavLink>
              <SideNavLink>Cultural</SideNavLink>
            </nav>
          </SideNav>
        </Drawer>
      </Fragment>
    );
  }
}

export default RightDrawer;