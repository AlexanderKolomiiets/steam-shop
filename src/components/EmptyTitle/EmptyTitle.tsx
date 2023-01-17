import { Title } from './EmptyTitleStyles';

type Props = {
  text: string;
};

export const EmptyTitle: React.FC<Props> = ({ text }) => {
  return (
    <Title>
      {text}
    </Title>
  );
};
