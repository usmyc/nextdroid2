export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((droid) => {
    return {
      params: { id: droid.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: { droid: data },
  };
}

export default function Details({ droid }) {
  return (
    <div>
      <h2> {droid.name} </h2>
      <p> {droid.email} </p>
      <p> {droid.website} </p>
    </div>
  );
}
