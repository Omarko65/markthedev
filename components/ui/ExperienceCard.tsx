
import Link from 'next/link';
import { Tags } from './Tags';
import Visit from './Visit';

type ExperienceCardProps = {
  title: string;
  tags: string[];
  descriptions: string[];
  href: string;
};

export default function ExperienceCard({
  title,
  tags,
  descriptions,
  href,
}: ExperienceCardProps) {
  return (
    <div className="layout py-6 grid md:grid-cols-2 items-center">
      <h3 className="text-6xl py-25">{title}</h3>

      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <Tags
              key={tag}
              variant={index === 0 ? 'primary' : 'secondary'}
            >
              {tag}
            </Tags>
          ))}
        </div>

        <div className="w-12 h-px bg-black" />

        <div>
          {descriptions.map((description, index) => (
            <p key={index} className={index > 0 ? 'pt-3' : ''}>
              {description}
            </p>
          ))}
        </div>

        <div className="w-12 h-px bg-black" />

        <Link href={href}>
          <Visit />
        </Link>
      </div>
    </div>
  );
}
