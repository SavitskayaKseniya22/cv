"use client";

import Icon from "@/components/Icon/Icon";
import ArrowUturnLeftIcon from "@heroicons/react/24/outline/ArrowUturnLeftIcon";
import { useRouter } from "next/navigation";

function NotFound() {
    const router = useRouter();
    return (
        <>
            <h1>Not Found</h1>
            <button type="button" onClick={() => router.back()}>
                <Icon icon={ArrowUturnLeftIcon} view="normal" />
            </button>
        </>
    );
}

export default NotFound;
