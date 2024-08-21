"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  if (session.status === "loading") {
    return <p>Loading....</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div>
        <Image
          src="/maintenance.jpg"
          width={1100}
          height={500}
          alt="maintenance"
        />
      </div>
    );
  }
};

export default Dashboard;
