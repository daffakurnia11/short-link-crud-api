"use client";

import { ListApi, RetrieveApi } from "@/api/apis";
import { Spin, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = { params: { custom: string } };

export async function generateStaticParams() {
  try {
    const shortlink = await ListApi().then((res) => res.data);
    console.log(shortlink);

    return shortlink.map((data: any) => ({
      custom: data.custom,
    }));
  } catch (error) {
    console.log(error);
  }
}

/**
 * Redirecter Component is a component to redirect the short link to original link
 * @param param.custom Parsing the url parameters to get the short link
 * @returns Redirecter Component
 */
export default function Redirecter({ params }: Props): React.JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    setLoading(true);
    RetrieveApi(params.custom).then((resp: any) => {
      setLoading(false);
      setData(resp.data);
      setInterval(() => {
        router.push(resp.data.origin);
      }, 5000);
    });
  }, [params]);

  return (
    <div className="text-center">
      <Typography.Title level={4} className="mb-4">
        Redirecting to the website..
      </Typography.Title>
      <Spin size="large" />
      <Typography.Title level={5} className="mt-4">
        {loading ? (
          "Searching for the link.."
        ) : (
          <>
            <span>Waiting for {data.name} link</span>
            <br />
            <span>
              Redirect to <Link href={data.origin}>{data.origin}</Link>
            </span>
          </>
        )}
      </Typography.Title>
    </div>
  );
}
