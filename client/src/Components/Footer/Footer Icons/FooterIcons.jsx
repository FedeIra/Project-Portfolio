import React from "react";
import { IconButton } from "@chakra-ui/react";

const footerIconButton = (link, iconComponent) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <IconButton
        size="lg"
        icon={iconComponent}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "0",
        }}
      />
    </a>
  );
};

export default footerIconButton;
