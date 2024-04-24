import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home(props: any) {
  const { push } = useRouter()
  useEffect(() => {
    if (props?.menu) {
      push(`/${props?.menu.toLowerCase()}`)
    }
  }, [])

  return (
    <div>test</div>
  );
}
