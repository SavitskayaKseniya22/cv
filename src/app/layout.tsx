import React from "react";

import MainLayout from "./components/main-layout";
import "../styles/styles.scss";
import Status from "./components/status";
import StyledComponentsRegistry from "./components/registry";

export const metadata = {
    title: "CV",
    description: 'Ksenia Savitskaia"s portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <StyledComponentsRegistry>
                <body>
                    <MainLayout>{children}</MainLayout>
                    <Status />
                </body>
            </StyledComponentsRegistry>
        </html>
    );
}
