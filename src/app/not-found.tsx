import Image from "next/image";
import Link from "next/link";

const notFound = () => {
  return (
    <main className="flex justify-center h-screen items-center">
      <div className="flex items-end gap-4">
        <Image
          src={"/logos/logo-small.svg"}
          width={100}
          height={100}
          alt="studio"
        />
        <div>
          <h1 className="text-2xl">404 page not found</h1>
          <Link href="/" className="font-serif hover:text-primaryMain">
            Back to home page
          </Link>
        </div>
      </div>
    </main>
  );
};

export default notFound;
