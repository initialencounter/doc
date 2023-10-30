import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';


function App() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <iframe
          className="top-level-iframe"
          title="滑动舒尔特"
          src="https://initialencounter.github.io/schulte"  // Replace with the URL of the HTML page you want to embe
          width="500px"
          height="380px"
        />
      </div>
    </header>
  );
}


function Newyear() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container"
        style={{
          width: "600px",
          height: "380px"
        }}>
        <h1 className="hero__title">烟花</h1>
        <p className="hero__subtitle">绚丽的烟花和祝福语</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://initialencounter.github.io/newyear">
            欣赏烟花
          </Link>
        </div>
      </div>
    </header>

  )
}
function Minesweeper() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container" style={{
        width: "500px",
        height: "380px"
      }}>
        <h1 className="hero__title">扫雷</h1>
        <p className="hero__subtitle">扫雷网页版，无猜</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://initialencounter.github.io/minesweeper">
            开始游戏
          </Link>
        </div>
      </div>
    </header>

  )
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="风宝宝的主页">
      <main style={{
        display: "grid",
        "grid-template-columns": "repeat(3, minmax(300px, 1fr))",
        gap: "var(--card-margin)",
        margin: "var(--card-margin) 0",
        "justify-items": "center"
      }}>
        <App />
        <Newyear />
        <Minesweeper />
      </main>
    </Layout>
  );
}
