interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="w-full max-w-6xl m-auto p-6 pb-32 rounded-lg bg-neutral-800">
      {children}
    </div>
  );
}
