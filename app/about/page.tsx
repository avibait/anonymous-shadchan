import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

export default function Page() {
  // return (
  //   <div>
  //     <Card className="">
  //       <CardHeader className="flex gap-3">
  //         <Image
  //           alt="nextui logo"
  //           height={40}
  //           radius="sm"
  //           src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
  //           width={40}
  //         />
  //         <div className="flex flex-col">
  //           <p className="text-md">NextUI</p>
  //           <p className="text-small text-default-500">nextui.org</p>
  //         </div>
  //       </CardHeader>
  //       <Divider />
  //       <CardBody>
  //         <p>Make beautiful websites regardless of your design experience.</p>
  //       </CardBody>
  //       <Divider />
  //       <CardFooter>
  //         <Link
  //           isExternal
  //           showAnchorIcon
  //           href="https://github.com/nextui-org/nextui"
  //         >
  //           Visit source code on GitHub.
  //         </Link>
  //       </CardFooter>
  //     </Card>
  //   </div>
  //);

  return (
    <div>
      <h1 className="m-12 font-extrabold text-2xl  ">
        So, what is this exactly? {String.fromCodePoint(0x1f615)}
      </h1>
      <Divider />
      <main className="flex min-h-screen flex-col items-center mt-16  mx-16">
        {/* <p>Glad you asked </p> */}
        <Card className="">
          <CardBody>
            <p>
              1. Submit a shidduch anonymously with the relevant information you
              have
            </p>
          </CardBody>
        </Card>
        <Card className="mt-6">
          <CardBody>
            <p>2. Our team anonymously reaches out to the parties involved.</p>
          </CardBody>
        </Card>
        <Card className="mt-6">
          <CardBody>
            <p>3. If a shidduch is made you receive 500 dollars</p>
          </CardBody>
        </Card>
        <Divider className="m-24" />
        <footer className="m-24 text-center">
          More questions?
          <br />
          Reach out to help@anonymousshadchan.com
        </footer>
      </main>
    </div>
  );
}
