import Head from "next/head";
import { useEffect, useState } from "react";

const ENDPOINT = "https://api.curio.io/api/providers?type=publication";

type PublicationResponse =
  | {
      data?: Publication[];
    }
  | {
      error?: string;
    };

export default function PublicationsPage() {
  return <></>;
}
