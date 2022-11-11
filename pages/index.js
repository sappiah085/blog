import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { useState } from "react";
import Featured from "./components/featured";
import GetStories from "./components/getMoreStories";
import Footer from "./components/foot";
export default function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styles.container} ${toggle && styles.toggled}`}>
      <Head>
        <title>The news hub</title>
        <meta
          name="description"
          content="provides you with juicy and hottest headline"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div
          className={`${styles.toggle} ${toggle && styles.open}`}
          onClick={() => setToggle((pre) => !pre)}
        ></div>
        <div className={styles.animate}>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
        </div>
        <nav className={`${styles.nav} ${toggle && styles.open}`}>
          <a href="/" className={styles.label}>
            Samuel
          </a>
          <ul className={styles.list}>
            <li className={styles.active}>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <ul className={styles.list}>
            <li>
              <a href="/">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.content}>
          <h1 className={styles.landingText}>
            Hey, I’m Samuel. See my thoughts, stories and ideas.
          </h1>
          <h5 className={styles.welcome}>
            Welcome to my minimal multipurpose blog where I share my stories
          </h5>

          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Subscribe to mails"
            />
            <input className={styles.button} type="submit" value="Subscribe" />
          </form>
        </div>
      </main>
      <main className={styles.news}>
        <nav className={`${styles.nav}  ${styles.second}`}>
          <ul className={styles.secondList}>
            <li className={styles.active}>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Computer Science</a>
            </li>
            <li>
              <a href="/">Scholarships</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
            <li>
              <a href="/">Finance</a>
            </li>
          </ul>
        </nav>
        <div className={styles.items}>
          <Featured title="Featured" />
          <Featured title="News" />
          <Featured
            counter="yes"
            title="Recent Blog Post"
            alignContainer="column"
            align="row-reverse"
          />
        </div>
        <GetStories />
        <Footer />
      </main>
    </div>
  );
}
