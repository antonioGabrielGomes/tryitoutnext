import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { GetStaticProps } from "next";

const inter = Inter({ subsets: ["latin"] });

interface IProps {
  author: string;
}

export default function Sobre({ author }: IProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Sobre o sistema</h1>
        Sitema feito em nextjs
        <hr />
        Author: {author}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      author: "Antonio",
    },
  };
};
