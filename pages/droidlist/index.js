import Link from "next/link";
import styles from "../../styles/Droid.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      droids: data,
    },
  };
};

export default function DroidList({ droids }) {
  return (
    <div>
      <h1>All Droids</h1>
      {droids.map((droid) => (
        <Link href={"/droidlist/" + droid.id} key={droid.id}>
          <a className={styles.single}>
            <h3> {droid.name} </h3>
            <p> {droid.website} </p>
          </a>
        </Link>
      ))}
    </div>
  );
}
