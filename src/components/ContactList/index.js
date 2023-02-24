import React from "react";
import PropTypes from "prop-types";
import { StyledContactList, Contacts } from "./style";
import FilterList from "components/FilterList";
import ContactCard from "components/ContactCard";
import contactsData from "data/contacts";

function ContactList(props) {
  const { children, ...rest } = props;
  return (
    <StyledContactList {...rest}>
      <FilterList options={["新添加优先", "按姓名排序"]} actionLabel="添加好友">
        <Contacts>
          {contactsData.map((contact, i) => (
            <ContactCard key={contact.id} contact={contact} />
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
