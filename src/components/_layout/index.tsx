import { LayoutProps } from './interfaces';

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-red-400 flex space-x-4 flex-wrap justify-center items-center">
      {children}
    </div>
  );
}
