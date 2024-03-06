import React from "react";
import { IconButton } from "@chakra-ui/react";

const footerIconButton = (link, iconComponent) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <IconButton
        size="lg"
        icon={iconComponent}
        style={{
          backgroundColor: "rgba(4, 1, 19, 1)",
          borderRadius: "0",
          color: "white",
        }}
      />
    </a>
  );
};

export default footerIconButton;
