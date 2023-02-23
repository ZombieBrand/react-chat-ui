import styled from "styled-components";
import Text from "components/Text";

export const GroupTitle = styled(Text).attrs({ size: "large" })`
  align-self: end;
`;

export const GenderAndRegion = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: space-between;
`;

export const SelectGroup = styled.div`
  > * {
    margin: 0 4px;
  }
  margin: 0 -4px;
`;

export const StyledIconInput = styled.div`
  display: grid;
  grid-template-columns: 38px 1fr;
  align-items: end;
`;

export const StyledEditProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding: 30px;
  max-height: 100vh;
  overflow-y: auto;
`;

