import styles from '../../app/page.module.css';

export async function getServerSideProps() {
  return { props: { title: 'Test SSR' } };
}

export default function Test({ title }: { title: string }) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>{title}</h1>
      </div>
    </main>
  );
}
