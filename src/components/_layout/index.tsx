import { LayoutProps } from './interfaces';

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-blue-400 flex justify-center items-center">
      {children}
    </div>
  );
}
