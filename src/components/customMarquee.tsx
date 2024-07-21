import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
const frontend = [
  {
    name: "sass",
    url: "devicon-sass-original  ",
  },
  {
    name: "Vite",
    url: "devicon-vitejs-plain  ",
  },
  {
    name: "Svelte",
    url: "devicon-svelte-plain  ",
  },
  {
    name: "Nextjs",
    url: "devicon-nextjs-plain ",
  },
  {
    name: "Tailwind",
    url: "devicon-tailwindcss-plain  ",
  },
  {
    name: "Javascript",
    url: "devicon-javascript-plain  ",
  },
  {
    name: "React",
    url: "devicon-react-original  ",
  },
  {
    name: "Typescript",
    url: "devicon-typescript-plain  ",
  },
  {
    name: "Redux",
    url: "devicon-redux-original  ",
  },
];
const icons = [
  {
    name: "Nest",
    url: "devicon-nestjs-original  ",
  },

  {
    name: "Express",
    url: "devicon-express-original   ",
  },
  {
    name: "Docker",
    url: "devicon-docker-plain  ",
  },
  {
    name: "Mongodb",
    url: "devicon-mongodb-plain   ",
  },
  {
    name: "Node",
    url: "devicon-nodejs-plain   ",
  },
  {
    name: "Postgres",
    url: "devicon-postgresql-plain   ",
  },
  {
    name: "Prisma",
    url: "devicon-prisma-original   ",
  },

  {
    name: "Supabase",
    url: "devicon-supabase-plain   ",
  },
  {
    name: "Firebase",
    url: "devicon-firebase-plain   ",
  },
];

 
const firstRow = icons.slice(0, icons.length / 2);
const secondRow = icons.slice(icons.length / 2);
 
const ReviewCard = ({
  url,
  name

}: {
   url: string;
   name:string
 
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
   
      <div className="mt-2 text-sm flex items-center justify-center flex-col" >
        
        <p className={url + "text-6xl"}></p>
        <p className="text-2xl font-extralight">{name}</p>
      </div>
    </figure>
  );
};
 
export function CustomMarqueeT() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
      <Marquee   pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} url={review.url} name={review.name} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover  className="[--duration:30s]">
        {frontend.map((review) => (
          <ReviewCard key={review.name} url={review.url} name={review.name} />
        ))}
      </Marquee>

    </div>
  );
}