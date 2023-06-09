import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/* Side Bar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}

        {/* Model */}
      </main>
    </div>
  );
}
