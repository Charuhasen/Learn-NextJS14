import Link from "next/link";
const NotFound = () => {
  return (
    <div>
      <h2>PAGE NOT FOUND</h2>
      <p>Sorry the page you are looking for was not found.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
