import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import ConfirmScreen from '@/features/explore/screen/confirm'

export default function Confirm(props: any) {
  const [focusField, setFocusField] = useState<boolean>(false)

  useEffect(() => {
    const handleOutsideClick = (e: any) => {

      if (focusField && !e.target.closest('#number_stays')) {
        setFocusField(false);
      }
    }
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, [focusField])
  return (
    <Layout menu={props.menu} setMenu={props.setMenu}>
      <ConfirmScreen 
      focusField={focusField}
        setFocusField={setFocusField} 
        />
    </Layout>
  );
}
