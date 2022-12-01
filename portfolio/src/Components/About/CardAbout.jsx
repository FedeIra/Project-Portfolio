import React from 'react';
import { Tag, TagLabel, Avatar, Image } from '@chakra-ui/react';
import style from './CardAbout.module.css';

const CardAbout = ({ name, avatar }) => {
  const icon = require(`./Icons/${avatar}`);
  return (
    <Tag
      padding="0.5rem"
      margin="1rem"
      className={style.cardAbout}
      backgroundColor="#f5f5f5"
    >
      <Image src={icon} size="xs" width={'auto'} height={'40px'} name={name} />
    </Tag>
  );
};

export default CardAbout;
