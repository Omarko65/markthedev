
type ProjectCardProps = {
  title: string;
  year: string;
  description: string;
};

export default function ProjectCard({
  title,
  year,
  description,
}: ProjectCardProps) {
  return (
    <div className="grid lg:grid-cols-3 justify-items-start items-center gap-3 w-full">
      <div className="lg:-rotate-90 justify-self-start h-fit shrink-0">
        <p className="w-max whitespace-nowrap text-sm font-medium text-center">
          [ {title} ] <span className="font-light">[{year}]</span>
        </p>
      </div>

      <p className="lg:col-span-2">
        {description}
      </p>
    </div>
  );
}
