import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Not found</h1>
      <Link href="/">
        <a> Go Back </a>
      </Link>
    </div>
  );
}
