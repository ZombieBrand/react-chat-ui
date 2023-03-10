import React from "react";
import PropTypes from "prop-types";
import {
  Album,
  AlbumSection,
  AlbumTitle,
  CloseIcon,
  Photo,
  SocialLinks,
  StyledProfile,
} from "./style";
import face from "assets/images/face-female-3.jpg";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Emoji from "components/Emoji";
import Icon from "components/Icon";
import {
  faWeibo,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import "styled-components/macro";
import Seperator from "components/Seperator";
import Text from "components/Text";
import { ContactSection } from "components/Seperator/style";
import photo1 from "assets/images/photo1.jpg";
import photo2 from "assets/images/photo2.jpg";
import photo3 from "assets/images/photo3.jpg";
import { ReactComponent as Cross } from "assets/icons/cross.svg";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
function Profile(props) {
  const {
    showEditBtn,
    showCloseIcon = true,
    onCloseClick,
    onEdit,
    status,
    children,
    ...rest
  } = props;
  return (
    <StyledProfile {...rest}>
      {showCloseIcon && <CloseIcon icon={Cross} onClick={onCloseClick} />}
      <Avatar
        css={`
          margin: 26px 0;
          grid-area: 1 / 1 / 3 / 2;
        `}
        src={face}
        size="160px"
        status={status}
        statusIconSize="25px"
      ></Avatar>
      {showEditBtn && (
        <Button
          size="52px"
          onClick={onEdit}
          css={`
            grid-area: 1 / 1 / 3 / 2;
            align-self: end;
            margin-left: 100px;
            z-index: 10;
          `}
        >
          <FontAwesomeIcon
            css={`
              font-size: 24px;
            `}
            icon={faPen}
          />
        </Button>
      )}
      <Paragraph
        size="xlarge"
        css={`
          margin-bottom: 12px;
        `}
      >
        ZombieBrand
      </Paragraph>
      <Paragraph
        size="medium"
        type="secondary"
        css={`
          margin-bottom: 18px;
        `}
      >
        ????????? ?????????
      </Paragraph>
      <Paragraph
        css={`
          margin-bottom: 26px;
        `}
      >
        ZombieBrand?????????IM?????? <Emoji label="medal">????</Emoji>
      </Paragraph>
      <SocialLinks>
        <Icon.Social
          icon={faWeibo}
          bgColor="#F06767"
          href="http://www.weibo.com"
        />
        <Icon.Social
          icon={faGithub}
          bgColor="black"
          href="https://github.com"
        />
        <Icon.Social
          icon={faDiscord}
          bgColor="#2483C0"
          href="https://discord.com"
        />
      </SocialLinks>
      <Seperator
        css={`
          margin: 30px 0;
        `}
      ></Seperator>
      <ContactSection>
        <Description label="????????????">18510227944</Description>
        <Description label="????????????">admin@gmail.com</Description>
        <Description label="????????????">https://www.baidu.com</Description>
      </ContactSection>
      <Seperator
        css={`
          margin: 30px 0;
        `}
      ></Seperator>
      <AlbumSection>
        <AlbumTitle>
          <Text type="secondary">?????????31???</Text>
          <a href="#">????????????</a>
        </AlbumTitle>
        <Album>
          <Photo src={photo1} alt="" />
          <Photo src={photo2} alt="" />
          <Photo src={photo3} alt="" />
        </Album>
      </AlbumSection>
    </StyledProfile>
  );
}

function Description({ label, children }) {
  return (
    <Paragraph>
      <Text type="secondary">{label}: </Text>
      <Text>{children}</Text>
    </Paragraph>
  );
}

Profile.propTypes = {
  children: PropTypes.any,
};

export default Profile;
