import { type ReactNode } from 'react';
import { iif } from '@/utils/iif';

interface Props {
  expression: boolean;
  then: ReactNode;
  else?: ReactNode;
}

const Condition = ({ expression, then: thenNode, else: elseNode }: Props): ReactNode => {
  return iif(expression, thenNode, elseNode);
};

export default Condition;
