interface TabButtonProps {
  title: string
  onClick: Function
}

export default function TabButton({ title, onClick, ...props }: TabButtonProps) {
  return <button {...props}>{title}</button>;
};

