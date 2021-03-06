import React from "react";
import { styled, withTheme } from "styled-components";
import PropTypes from "prop-types";
import Flex from "./Flex";
import Box from "./Box";

export default withTheme(
  class HorizontalFlex extends React.Component {
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
      const kids = React.Children.toArray(children);
      const numberOfChildren = kids.length;

      return (
        <Flex
          css={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            overflow: "hidden"
          }}
        >
          {kids.map(k => (
            <Box key={k.key} width={1 / numberOfChildren}>
              {k}
            </Box>
          ))}
        </Flex>
      );
    }
  }
);
