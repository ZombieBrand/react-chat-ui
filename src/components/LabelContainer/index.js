import React from "react";
import PropTypes from "prop-types";
import { StyledLabelContainer } from "./style";
import Text from "components/Text";

function LabelContainer(props) {
  const { children, label, ...rest } = props;
  return (
    <StyledLabelContainer {...rest}>
      {label && <Text style={{ marginBottom: "8px" }}>{label}: </Text>}
      {children}
    </StyledLabelContainer>
  );
}

LabelContainer.propTypes = {
  children: PropTypes.any,
};

export default LabelContainer;
