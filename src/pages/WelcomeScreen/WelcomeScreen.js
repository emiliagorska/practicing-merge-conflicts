import React from "react";
import "./WelcomeScreen.css";
import ShareInfoButton from "../../components/ShareInfoButton/ShareInfoButton";
import ActionButton from "../../components/ActionButton/ActionButton";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const WelcomeScreen = () => {
  return (
    <PageWrapper>
      <ShareInfoButton marginBottom="16px">
        Share Information - Edited in MAIN in commit 1{" "}
      </ShareInfoButton>
      <ShareInfoButton marginBottom="32px">Share Information</ShareInfoButton>
      <ActionButton marginBottom="8px">Place Bid</ActionButton>
      <ActionButton>New Game</ActionButton>
    </PageWrapper>
  );
};

export default WelcomeScreen;
