import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const Button = ({ children, variant, size, className }) => {
  return <button className={classNames(styles.container, styles[variant], styles[size], className)}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["filled", "outlined"]),
  size: PropTypes.oneOf(["default", "small", "medium"]),
};

Button.defaultProps = {
  variant: "filled",
  size: "default",
};

export default Button;
