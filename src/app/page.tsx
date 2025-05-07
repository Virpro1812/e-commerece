import Header from "@/components/Header";

const home = () => {
  return (
    <>
    <Header />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold">Welcome to Next.js!</h1>
        <p className="mt-4 text-lg">This is a simple Next.js application.</p>
      </div>
    </>
  );
};

export default home;
