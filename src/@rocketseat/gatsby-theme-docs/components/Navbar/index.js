/* @jsx jsx */
import React from "react";
import PropTypes from "prop-types";

//import { Nav } from './styles';
export default function Navbar({ title }) {
  return <div>{title}</div>;
}

Navbar.propTypes = {
  title: PropTypes.string,
};
