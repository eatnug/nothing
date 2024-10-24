import type {Metadata} from "next";
import "./globals.css";
import {PropsWithChildren} from "react";

export const metadata: Metadata = {
    title: "Nothing",
    description: "it is nothing.",
};

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
