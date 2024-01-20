"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <section className="error bg-red-600 text-white min-h-screen flex justify-center items-center flex-col gap-4">
          <h2>Something went wrong!</h2>
          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            className="bg-white text-black py-2 px-4 rounded"
          >
            Try again
          </button>
        </section>
      </body>
    </html>
  );
}
