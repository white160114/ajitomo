"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";
import styles from "./styles/page.module.css";

export default function Home() {
  const router = useRouter()
  return (
    <>
      <div>
        <div>
          <button type="button" className={styles.createbutton} onClick={() => router.push('/create')}>
            アカウント作成
          </button>
        </div>
        <div>
          <button type="button" className={styles.loginbutton} onClick={() => router.push('/home')}>
            ログイン
          </button>
        </div>
      </div>

    </>
  );
}
