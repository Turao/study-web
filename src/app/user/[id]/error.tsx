"use client";

export default function Error(error: Error) {
    console.log("found an error!");
    console.error(error);
    return (
        <div>
            unable to load user
        </div>
    )
}