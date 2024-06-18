import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start sm:justify-center mt-20 sm:mt-0 gap-5 px-4 sm:p-24 text-white">
      <p>Step 1: Perform ID-Verification with DocuSign.</p>
      <Link
        href="/startIDV"
        className=" bg-petrol-sits rounded-lg px-4 py-2 font-bold shadow-lg"
      >
        Get Identity Credential
      </Link>
      <br />
      <br />
      <p className="text-sm">
        With this Function, you can present your Verified Partner Credential and
        the claims of your Credential will be displayed. It's for testing
        purposes here to demonstrate functionality.
      </p>
      <Link
        href="/startIDV"
        className=" bg-petrol-sits rounded-lg px-4 py-2 font-bold shadow-lg"
      >
        Present "Verified Partner" Credential
      </Link>
    </main>
  );
}
