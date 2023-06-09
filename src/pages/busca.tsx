import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  polularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: string;
  vote_average: number;
  vote_count: number;
}

export default function Busca() {
  const [searchText, setSearchText] = useState<string>("");
  const [movies, setMovies] = useState<IMovie[]>([]);

  const handleSearch = async () => {
    if (searchText !== "") {
      const response = await fetch(
        `https://tryitoutnext.vercel.app/api/search?q=${searchText}`
      );

      const json = await response.json();

      setMovies(json);
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Busca</h1>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>

        <hr />

        <ul>
          {movies && (
            <>
              {movies.map((item) => (
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
            </>
          )}
        </ul>
      </main>
    </>
  );
}
