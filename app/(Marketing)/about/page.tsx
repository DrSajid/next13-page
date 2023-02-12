import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Link href={"/"}>Home</Link>
      {/* <img src="/about.jpg" alt="About Image" width="100" height="100" /> */}
      <Image src="/about.jpg" alt="About Image" width="100" height="100" />
    </>
  );
}
