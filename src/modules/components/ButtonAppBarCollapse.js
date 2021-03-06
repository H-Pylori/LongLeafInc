import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = (theme) => ({
  buttonCollapse: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    margin: "10px",
    boxShadow: "none",
  },
  icon: {
    color: "white",
  },
  menu: { color: theme.palette.primary.dark },
});

class ButtonAppBarCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.buttonCollapse}>
        <IconButton onClick={this.handleMenu} aria-label="menu open">
          <MenuIcon className={classes.icon} />
        </IconButton>
        <Menu
          id="menu-appbar"
          className={classes.menu}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClick={this.handleClose}
        >
          {this.props.children}
        </Menu>
      </div>
    );
  }
}
export default withStyles(styles)(ButtonAppBarCollapse);
