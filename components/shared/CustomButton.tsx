import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

function CustomButton({ href, children }: Props) {
  return (
    <Button className="transition-ease bg-dark700 text-[14px] hover:bg-gray100 md:text-[16px]">
      <Link href={href} className="flex items-center gap-2 ">
        {children}
      </Link>
    </Button>
  );
}

export default CustomButton;
