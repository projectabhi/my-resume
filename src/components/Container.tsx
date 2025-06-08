const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="max-w-full h-0 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
        {children}
      </main>
    </>
  );
};
export default Container;
