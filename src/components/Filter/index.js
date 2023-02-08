import React from "react";
import PropTypes from "prop-types";
import { Action, Filters, StyledFilter } from "./style";
import Text from "components/Text";

function Filter(props) {
  const { children, ...rest } = props;
  return <StyledFilter {...rest}>{children}</StyledFilter>;
}

Filter.Filters = (props) => {
  const { children, label, ...rest } = props;
  return (
    <Filters {...rest}>
      <Text type="secondary">{label}: </Text>
      {children}
    </Filters>
  );
};

Filter.Action = (props) => {
  const { children, label, ...rest } = props;
  return (
    <Action {...rest}>
      <Text type="secondary">{label}</Text>
      {children}
    </Action>
  );
};

Filter.propTypes = {
  children: PropTypes.any,
};

export default Filter;
 