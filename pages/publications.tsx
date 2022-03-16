import Head from "next/head";
import { useEffect, useState } from "react";
import { Publication } from "../model/publication";
import { PublicationCard } from "../components/publication";

const ENDPOINT = "https://api.curio.io/api/providers?type=publication";

type PublicationResponse =
  | {
      data?: Publication[];
    }
  | {
      error?: string;
    };

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[] | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    (async function fetchPublications() {
      try {
        const res = await fetch(ENDPOINT);
        const data = await res.json();
        if (data.error) {
          setError(data.error);
        } else if (data.data) {
          setPublications(data.data);
        } else {
          throw new Error("unexpected error");
        }
      } catch (err) {
        setError(error);
      }
    })();

    setLoading(false);
  }, []);

  return (
    <div>
      <Head>
        <title>Publications</title>
      </Head>
      <main className="p-5 flex flex-col justify-center">
        <h1 className="text-lg mb-5">Publications</h1>
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        <div className="grid grid-cols-2 gap-5">
          {publications &&
            publications.map((publication) => (
              <PublicationCard publication={publication} />
            ))}
        </div>
      </main>
    </div>
  );
}
