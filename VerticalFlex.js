import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import Flex from "./Flex";
import Box from "./Box";

export default withTheme(
  class VerticalFlex extends React.Component {
    static propTypes = {
      children: PropTypes.object,
      className: PropTypes.string,
      theme: PropTypes.object
    };

    constructor(props) {
      super(props);
    }

    render() {
      const { className, children, theme } = this.props;
      const kids = React.Children.toArray(children)
      const numberOfChildren = kids.length;

      return (
        <Flex
          css={{
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {kids.map(k => (
            <Box
              key={k.key}
              height={1 / numberOfChildren}
            >
              {k}
            </Box>
          ))}
        </Flex>
      );
    }
  }
);
