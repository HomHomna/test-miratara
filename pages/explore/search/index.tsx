import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import SearchScreen from '@/features/explore/screen/Search'

export default function Search(props: any) {

  return (
    <Layout menu={props.menu} setMenu={props.setMenu}>
      <SearchScreen/>
    </Layout>
  );
}
