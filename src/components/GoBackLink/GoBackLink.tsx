import { BackLink } from './GoBackLinkStyles';

type Props = {
  to: string;
  text: string;
};

export const GoBackLink: React.FC<Props> = ({ to, text }) => {
  return (
    <BackLink to={to}>{text}</BackLink>
  );
};
