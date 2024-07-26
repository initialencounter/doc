import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

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

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Newyear></Newyear>
      </main>
    </Layout>
  );
}
