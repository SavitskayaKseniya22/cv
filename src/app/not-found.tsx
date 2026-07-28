"use client";

import ArrowUturnLeftIcon from "@heroicons/react/24/outline/ArrowUturnLeftIcon";
import { useRouter } from "next/navigation";

function NotFound() {
    const router = useRouter();
    return (
        <>
            <h1>Not Found</h1>
            <button type="button" onClick={() => router.back()}>
                <ArrowUturnLeftIcon className="styled-svg styled-svg_big styled-svg_white" />
            </button>
        </>
    );
}

export default NotFound;
