"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    console.error(error);

    return (
        <>
            <h2>Something went wrong!</h2>
            <button type="button" onClick={() => reset()}>
                Try again
            </button>
        </>
    );
}
