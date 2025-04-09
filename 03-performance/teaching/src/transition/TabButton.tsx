import React from "react";
interface TabButtonProps {
  title: string
  onClick: Function
}

export default function TabButton({ title, onClick, ...props }: TabButtonProps) {
  const [isLoading, startTransition] = React.useTransition()

  const handleClick = () => startTransition(() => {
    onClick()
  })

  return <button onClick={handleClick} {...props}>{isLoading ? "Loading..." : title}</button>;
};

