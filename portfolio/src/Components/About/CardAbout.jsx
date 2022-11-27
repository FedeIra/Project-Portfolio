import React from 'react';
import { Tag, TagLabel, Avatar } from '@chakra-ui/react';
import style from './CardAbout.module.css';

const CardAbout = ({ name, avatar }) => {
  const icon = require(`./Icons/${avatar}`);
  return (
    <Tag
      border="1px solid #000000"
      borderRadius="1rem"
      padding="0.5rem"
      bgGradient={'linear(to-r, rgba(4, 1, 19, 0.5), #1a294e)'}
      margin="0.8rem"
      width="12rem"
      className={style.cardAbout}
    >
      <Avatar src={icon} size="xs" name={name} ml={-1} mr={2} />
      <TagLabel color={'white'}>{name}</TagLabel>
    </Tag>
  );
};

export default CardAbout;
