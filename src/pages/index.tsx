import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

interface IProps {
  list: any[];
}

export default function Home({ list }: IProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Filmes em Destaque</h1>

        <Link href={"/busca"}>Ir para a Busca</Link>

        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <Link href={`/movie/${item.id}`}>
                <>
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    width="150"
                  />
                  <br />
                  {item.title}
                </>
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/sobre">Sobre mim</Link>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://tryitoutnext.vercel.app/api/trending");
  const json = await res.json();

  return {
    props: {
      list: json.list,
    },
  };
}
