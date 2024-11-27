"use client";
import { FC } from "react";

import { Button } from "@/app/_components/ui/button";
import { signOut } from "next-auth/react";
import { Icons } from "./icons";
import { useState } from "react";

interface SignoutButtonProps {}

const SignoutButton: FC<SignoutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signoutHandler = async function () {
    try {
      setIsLoading(true);
      const signout = await signOut({
        callbackUrl: `${window.location.origin}/login`,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      onClick={signoutHandler}
      variant={"default"}
      className="rounded-md bg-secondary-foreground"
      disabled={isLoading}
    >
      {isLoading ? <Icons.Loader2 className="w-4 h-4 animate-spin" /> : null}
      <span>Logout</span>
    </Button>
  );
};

export default SignoutButton;
