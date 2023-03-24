import Link from "next/link";
import { useRouter } from "next/router";

const article = ({ post }) => {
  //   const router = useRouter();
  console.log("post++", post);
  //   const { id } = router.query;
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br />
      <Link href="/">Go Back</Link>
      {/* This is an article {post.id} */}
    </>
  );
};

export const getServerSideProps = async (context) => {
  console.log("context params+++", context);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};
export default article;
