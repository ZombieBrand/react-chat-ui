import React from "react";
import PropTypes from "prop-types";
import { StyledContactList, Contacts } from "./style";
import FilterList from "components/FilterList";
import ContactCard from "components/ContactCard";
import contactsData from "data/contacts";
import useStaggeredList from "hooks/useStaggeredList";
import { animated } from "react-spring";
function ContactList(props) {
  const { children, ...rest } = props;
  const trailAnimes = useStaggeredList(contactsData.length);
  return (
    <StyledContactList {...rest}>
      <FilterList options={["新添加优先", "按姓名排序"]} actionLabel="添加好友">
        <Contacts>
          {contactsData.map((contact, i) => (
            <animated.div key={i} style={trailAnimes[i]}>
              <ContactCard key={contact.id} contact={contact} />
            </animated.div>
          ))}
        </Contacts>
      </FilterList>
    </StyledContactList>
  );
}

ContactList.propTypes = {
  children: PropTypes.any,
};

export default ContactList;
