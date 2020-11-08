import Link from "next/link";
import type { GetStaticProps } from "next";
import Image from "next/image";
import Button from "../components/button";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      message: "hello",
    },
  };
};

const AboutPage = ({ message }: { message: string }) => {
  return (
    <div>
      <h1>About Page 1</h1>
      <p>{message}</p>
      <Image src="/logo.png" alt="Logo" width={300} height={300} />
      <Button>
        <Link href="/">
          <a>Кнопка</a>
        </Link>
      </Button>
      <style jsx>{`
        h1 {
          color: red;
          font-size: 40px;
          padding: 10px 20px;
          text-align: center;
          text-transform: uppercase;
          background-color: var(--main-color);
        }

        p {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
