import React from 'react';
import { Tag, Image } from '@chakra-ui/react';

const CardAbout = ({ name, avatar }) => {
  const icon = require(`./Icons/${avatar}`);
  return (
    <Tag
      padding="0.4rem"
      margin="1rem"
      backgroundColor="#f5f5f5"
      borderRadius="0"
    >
      <Image src={icon} size="xs" width={'auto'} height={'40px'} name={name} />
    </Tag>
  );
};

export default CardAbout;
