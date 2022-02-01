import { CardProps } from './interface';

export function Card({ imgPath, name, description }: CardProps) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:w-80 md:h-48">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            src={imgPath}
            alt={name}
            className="h-32 w-full object-cover md:h-full md:w-40"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {name}
          </div>
          <a
            href="/"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            See more
          </a>
        </div>
      </div>
    </div>
  );
}
