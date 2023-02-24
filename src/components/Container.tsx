interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Container({ children, style }: ContainerProps) {
  return (
    <div
      className="w-full max-w-6xl m-auto p-6 pb-20 rounded-lg bg-neutral-800 flex flex-col"
      style={style}
    >
      {children}
    </div>
  );
}
