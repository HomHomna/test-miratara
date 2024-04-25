import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";

export default function Profile(props: any) {
  return (
    <Layout menu={props.menu} setMenu={props.setMenu}>
      <div>profile page</div>
    </Layout>
  );
}
