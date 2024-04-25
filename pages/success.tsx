import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import { Success as Icon } from "@/components/icons";
import { Button } from "antd";
import { useRouter } from "next/router";

export default function Success(props: any) {
  const {push} =useRouter()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center',padding:'50px' }}>
      <Icon />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center',marginTop:'50px',gap:'20px' }}>
        <div style={{ fontFamily: 'Poppins-Bold', fontSize: '36px' }}>Booking Successfully completed</div>
        <div style={{ fontSize: '18px' }}>Your trip schedule is ready,please check under profile.</div>
        <Button onClick={()=> {push(`/explore`)}} style={{ width: '143px', height: '47px' }} type="primary">Home</Button>
      </div>
    </div>
  );
}
