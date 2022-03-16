import type { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import Story from "../components/Story";
import { useSearchLazyQuery } from "../gql/api";

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const [search, { data, error, loading }] = useSearchLazyQuery();

  const onSearch: FormEventHandler<HTMLFormElement> = (e) => {
    search({ variables: { text } });
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={onSearch}
        className="flex gap-5 border-b fixed top-0 bg-white w-full border-gray-200 px-5 py-5"
      >
        <input
          type="text"
          value={text}
          onChange={({ target: { value } }) => setText(value)}
          className="border border-gray-200 rounded-sm px-2 py-1 outline-none flex-grow"
        />
        <input type="submit" />
      </form>
      <main className="px-5 mt-28">
        <div className="flex flex-col gap-2">
          {data?.search &&
            data.search.map(
              (result) => result && <Story title={result.story.title} />
            )}
        </div>
        {error && <div>{error.message}</div>}

        {loading && <div>Loading</div>}
      </main>
    </div>
  );
};

export default Home;
