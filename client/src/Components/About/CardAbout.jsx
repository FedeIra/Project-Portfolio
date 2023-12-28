// Import external dependencies:
import React from "react";
import { Tag, Image } from "@chakra-ui/react";

// Import local dependencies:
import styles from "./CardAbout.module.css";

const CardAbout = ({ name, avatar }) => {
  const icon = require(`./Icons/${avatar}`);
  return (
    <Tag className={styles.tag}>
      <Image src={icon} size="xs" width={"auto"} height={"40px"} name={name} />
    </Tag>
  );
};

export default CardAbout;
