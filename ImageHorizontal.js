// example Layout.js
import React from "react";
import { styled, withTheme } from "styled-components";
import PropTypes from "prop-types";
import ImageIcon from "./ImageIcon";
import Flex from "./Flex";
import Box from "./Box";

export default withTheme(
  class ImageHorizontal extends React.Component {
    static propTypes = {
      children: PropTypes.string,
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
            flexDirection: "row",
            flexFlow: "nowrap",
            alignItems: "center",
            width: "100%",
            overflow: "hidden",
            margin: "0px 0px 10px 0px",
            padding: "0px 0px 0px 0px"
          }}
        >
          {kids.map(k => (
            <Box
              key={k.key}
              width={1 / numberOfChildren}
              css={{
                padding: "0px 5px 0px 5px"
              }}
            >
              {k}
            </Box>
          ))}
        </Flex>
      );
    }
  }
);
