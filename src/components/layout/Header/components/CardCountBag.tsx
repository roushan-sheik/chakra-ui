import React from 'react';
import { Box, Icon, Text } from '@chakra-ui/react';

type MiniCartBagProps = {
  quantity?: number;
};

export function MiniCartBag({ quantity = 0 }: MiniCartBagProps) {
  return (
    <Box
      alignItems="center"
      as="span"
      display="inline-flex"
      height="1em"
      justifyContent="center"
      position="relative"
      width="1em"
    >
      <Icon height="24px" width="24px">
        <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.232 5.352a.948.948 0 0 0-.936-.912H16.56C16.44 1.992 14.448.048 12 .048S7.536 1.992 7.44 4.44H4.728a.937.937 0 0 0-.936.936L3.144 21.84c-.024.552.168 1.104.552 1.512s.888.624 1.464.624h13.68c.552 0 1.056-.216 1.464-.624.36-.408.552-.936.552-1.488l-.624-16.512zM12 1.224c1.8 0 3.288 1.416 3.408 3.216l-6.816-.024A3.431 3.431 0 0 1 12 1.224zM7.44 5.616v1.968c0 .336.264.6.6.6s.6-.264.6-.6V5.616h6.792v1.968c0 .336.264.6.6.6s.6-.264.6-.6V5.616h2.472l.624 16.224c-.024.24-.12.48-.288.648s-.384.264-.6.264H5.16c-.24 0-.456-.096-.624-.264s-.24-.384-.216-.624l.624-16.248H7.44z"></path>
        </svg>
      </Icon>
      <Text
        as="span"
        color="neutral.100"
        paddingX="3px"
        paddingY="2px"
        position="absolute"
        right="0"
        textStyle="caption1"
        top="0"
        width="100%"
      >
        {quantity}
      </Text>
    </Box>
  );
}
