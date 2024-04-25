import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import PaymentScreen from '@/features/payment/screen/index'

export default function Payment(props: any) {
  return (
    <div>
      <Layout menu={props.menu} setMenu={props.setMenu}>
        <PaymentScreen />
      </Layout>
    </div>
  );
}
