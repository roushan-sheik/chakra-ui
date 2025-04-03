import { Accordion, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemTriggerProps extends Accordion.ItemTriggerProps {
  indicatorPlacement?: 'start' | 'end';
}

export const AccordionItemTrigger = React.forwardRef<HTMLButtonElement, AccordionItemTriggerProps>(
  function AccordionItemTrigger(props, ref) {
    const { children, indicatorPlacement = 'end', ...rest } = props;
    return (
      <Accordion.ItemTrigger {...rest} ref={ref}>
        {indicatorPlacement === 'start' && (
          <Accordion.ItemIndicator rotate={{ base: '-90deg', _open: '0deg' }}>
            <ChevronDown color="black" />
          </Accordion.ItemIndicator>
        )}
        <HStack flex="1" gap="1" textAlign="start" width="full">
          {children}
        </HStack>
        {indicatorPlacement === 'end' && (
          <Accordion.ItemIndicator>
            <ChevronDown color="black" />
          </Accordion.ItemIndicator>
        )}
      </Accordion.ItemTrigger>
    );
  },
);

type AccordionItemContentProps = Accordion.ItemContentProps;

export const AccordionItemContent = React.forwardRef<HTMLDivElement, AccordionItemContentProps>(
  function AccordionItemContent(props, ref) {
    return (
      <Accordion.ItemContent>
        <Accordion.ItemBody {...props} ref={ref} />
      </Accordion.ItemContent>
    );
  },
);

export const AccordionRoot = Accordion.Root;
export const AccordionItem = Accordion.Item;
