"use client";
import Link from "next/link";
import { Logo } from "@/components";
import { Burger } from "@/components";
import { HeaderProps } from "./Header.types";
import { useState } from "react";

export function HeaderClient({ items }: HeaderProps) {
    const [active, setActive] = useState<boolean>(false);
    return (
        <>
            <nav className="wrapper" data-open={active ? "" : null}>
                <Logo />
                {items?.map((link) => (
                    <Link key={link?.label} href={link?.href}>
                        {link?.label}
                    </Link>
                ))}
            </nav>
            {!!items?.length && (
                <Burger
                    onClick={() => {
                        setActive(!active);
                    }}
                />
            )}
        </>
    );
}
