'use client';
import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import * as LucideIcons from 'lucide-react';

/**
 * This component is a client component that renders a Lucide icon.
 * It is used to render a Lucide icon in the UI.
 * If you get an error `Only plain objects can be passed to Client Components from Server Components.`,
 * you can use this component instead of the `Icon` component.
 * @param param0
 * @returns
 */
const LucideIcon = ({ name, ...props }: { name: keyof typeof LucideIcons } & IconProps) => {
  const LucideIcon = LucideIcons[name] as React.ElementType;

  if (!LucideIcon) {
    console.error(`Icon "${name}" not found in Lucide icons`);
    return null;
  }

  return <Icon as={LucideIcon} {...props} />;
};

export default LucideIcon;
