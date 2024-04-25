import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";

export default function Trips(props: any) {
  return (
    <Layout menu={props.menu} setMenu={props.setMenu}>
      <div>trips page</div>
    </Layout>
  );
}
