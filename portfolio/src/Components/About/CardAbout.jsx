import React from 'react';
import { Tag, TagLabel, Avatar } from '@chakra-ui/react';
import style from './CardAbout.module.css';

const CardAbout = ({ name, avatar }) => {
  const icon = require(`./Icons/${avatar}`);
  return (
    <Tag className={style.card}>
      <Avatar src={icon} size="xs" name={name} ml={-1} mr={2} />
      <TagLabel>{name}</TagLabel>
    </Tag>
  );
};

export default CardAbout;
