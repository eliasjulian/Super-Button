import * as React from "react";
import { PropertyControls, ControlType } from "framer";
//import styled, { css } from 'styled-components';

type Props = { text: string };

export class superbutton extends React.Component<Props> {

  render() {
    return <div style={style}>{this.props.text}</div>;
  }

  static defaultProps: Props = {
    text: "Super🦸‍♀️Button"
  };

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Label" }
    backgroundColor: { type: ControlType.Color, title: "Bkg Color" }
  };
}

const style: React.CSSProperties = {
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#fff",
  borderRadius: "10px",
  overflow: "hidden",
  fontFamily: "Work Sans, Open Sans",
  fontWeight: "900",
  fontSize: "16px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  backgroundColor: "#432D7C",
};