import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

type Props = {
  title: string;
};

const Story: React.FC<Props> = ({ title }) => {
  return (
    <div className="border border-gray-200 rounded-md px-3 py-3">
      <div>{title}</div>
    </div>
  );
};

export default Story;
