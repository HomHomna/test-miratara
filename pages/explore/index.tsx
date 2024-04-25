import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import ExploreScreen from "@/features/explore/screen"
import Layout from "@/components/layout/Layout";

export default function Explore(props: any) {
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
    <div>
      <Layout menu={props.menu} setMenu={props.setMenu}>
        <ExploreScreen
          focusField={focusField}
          setFocusField={setFocusField}
        />
      </Layout>
    </div>
  );
}