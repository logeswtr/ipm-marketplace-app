import React from "react";
import { Grid } from "carbon-components-react";
import "./Container.scss";

export default function ContainerComponent(props) {
  const { fullWidth } = props;

  return (
    <Grid fullWidth={fullWidth} className="container">
      {props.children}
    </Grid>
  );
}
