import { UserButton } from "@clerk/nextjs";

export default function OnBoardingPage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
