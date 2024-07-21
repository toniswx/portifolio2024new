import React from "react";
import AnimatedShinyText from "./components/magicui/animated-shiny-text";
import { cn } from "./lib/utils";
import { FadeText } from "@/components/magicui/fade-text";
import DotPattern from "@/components/magicui/dot-pattern";
import AnimatedGradientText from "./components/magicui/animated-gradient-text";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  ChevronRight,
  Code,
  Github,
  Home,
  Mail,
  MailCheckIcon,
  MessageCircle,
  Send,
  SeparatorHorizontal,
} from "lucide-react";
import ShinyButton from "./components/magicui/shiny-button";
import SparklesText from "./components/magicui/sparkles-text";
import ShineBorder from "./components/magicui/shine-border";
import { Button } from "@/components/ui/button";
import { CustomMarqueeT } from "./components/customMarquee";
import BoxReveal from "@/components/magicui/box-reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { Badge } from "./components/ui/badge";
import { BorderBeam } from "./components/magicui/border-beam";
import { siR, siReact } from "simple-icons";
import OrbitingCircles from "./components/magicui/orbiting-circles";
import Marquee from "./components/magicui/marquee";
import { MagicCard } from "./components/magicui/magic-card";
import BlurFade from "./components/magicui/blur-fade";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { BentoDemo } from "./AboutBento";
import Ripple from "./components/magicui/ripple";
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

const projects = [
  {
    title: "Denmark ",
    description:
      "A web application that provide a simple way to deal with deadlines and  includes roles access,team creation,manager users on your team,manage tasks and user authentication. ",
    images: [
      "https://raw.githubusercontent.com/de-Padua/denmark/b742dde9c4dc02001bb07820c165251de807a128/public/project.png",
      "https://github.com/de-Padua/denmark/blob/main/public/Captura%20de%20tela%202023-12-29%20-%2021.16.22.png?raw=true",
      "https://github.com/de-Padua/denmark/blob/main/public/Captura%20de%20tela%202023-12-29%20-%2021.16.36.png?raw=true",
      "https://github.com/de-Padua/denmark/blob/main/public/Captura%20de%20tela%202023-12-29%20-%2021.17.24.png?raw=true",
    ],
    live:"https://basel-plum.vercel.app" ,
    github: "https://github.com/toniswx/denmark",
    tec: ["Tailwind", "Next.js", "React", "Mongo"],
  },
  {
    title: "Hidders ecommerce (back-end)",
    description:
      "A web application built with JavaScript and Node.js, featuring Stripe integration for secure payments. It includes user authentication, product browsing, shopping cart management, and checkout functionalities",
    images: [],
    live: undefined,
    github: "https://github.com/toniswx/node-stripe-backend",
    tec: ["Mongo", "Express", "Stripe", "Node"],
    bulletPoints: [
      "• Designed and implemented a user authentication and authorization system utilizing encrypted tokens (bcrypt)",
      "• Integrated Stripe as a payment gateway",
      "• Implemented a session system to identify the current user by it's cookie",
    ],
  },
];


const buttons = [
  {name:"About",link:"#about"},{name:"Skills",link:"#skill"},{name:"Contact",link:"#about"},{name:"Works",link:"#work"}
]
function App() {
  return (
    <div className="">
      <div className=" flex items-center justify-around  w-full sticky h-10 top-0 z-30 bg-background border-b  ">
         
         <div>
          
        {buttons.map((item,idx) =>{
          return <a href={item.link}><Button variant={"link"} size={"sm"} >{idx + 1 } . {item.name}</Button></a>
        })}
         </div>
        </div>
      <div className="flex items-center justify-center w-full h-screen flex-col bg-background text-foreground border-none">
        <a  href="mailto:toninhoport@gmail.com" className="w-full ">
          <div className=" flex items-center justify-center  w-full  h-10 top-10 z-20 bg-background border-b cursor-pointer  ">
          <SparklesText
            text="   Currently open to international roles. Get in touch here !
"
            className="text-sm my-2 font-light  "
            sparklesCount={4}
          />
        </div> 
        </a>
       

        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden   bg-background md:shadow-xl  p-20 ">
          <div className="z-10   flex items-center justify-center flex-col">
            <FadeText
              className="  text-2xl  text-black dark:text-white "
              direction="right"
              framerProps={{
                show: { transition: { delay: 0.2 } },
              }}
              text="Hi there 👋 ! I'm"
            />
            <FadeText
              className="text-8xl font-bold  z-10 whitespace-pre-wrap text-center tracking-tighter text-black dark:text-white "
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.3 } },
              }}
              text="Antonio de Padua"
            />

            <span className="text-5xl font-bold my-4 ">
              I build servers for the web.
            </span>

            <div className="my-3 w-2/3">
              <FadeText
                className=" text-black  dark:text-white t"
                direction="left"
                framerProps={{
                  show: { transition: { delay: 0.5 } },
                }}
                text="I'm a web developer who prioritizes efficiency , robustness and security in application development ,from backend to frontend (and everything in between).
       "
              />
            </div>
          </div>

          <div className="  z-10 my-10 ">
            <a href="#work"><ShinyButton text="See my work" /></a>
          </div>

          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] opacity-40 border-none"
            )}
          />
          <div className="fixed bottom-20 z-20">
         
          </div>
        </div>
      </div>
   
    
      <div className=" flex items-center justify-center pt-10" id="work" >
        <div className="flex items-center justify-center flex-col">
          <div>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h2 className="text-8xl font-semibold">Works</h2>
            </BoxReveal>
          </div>

          <div className=" grid grid-cols-2 gap-4 p-10 w-9/12 my-10" id="cc" >
            {projects.map((item) => {
              return (
                <div className="relative border rounded-xl my-10   ">
                  <div className=" h-full p-6 rounded-md space-y-9 flex flex-col items-start justify-between">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold ">{item.title}</h2>
                      <p>{item.description}</p>

                      {item.tec?.map((tec) => {
                        return <Badge className="mr-2">{tec}</Badge>;
                      })}
                      <div className="my-5">
                        {item.bulletPoints?.map((task) => {
                          return <p className="">{task};</p>;
                        })}
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                      {item.images.length > 0 ? (
                        <Carousel className="w-10/12">
                          <CarouselContent>
                            {item.images.map((item, index) => {
                              return (
                                <>
                                  <CarouselItem className="basis-1/2">
                                    <img src={item} className="rounded-md" />{" "}
                                  </CarouselItem>
                                </>
                              );
                            })}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="space-x-3 justify-self-end ">
                      {item.live === undefined ? "" : <a href={item.live} target="_blank"><ShinyButton text="Live" /></a>}
                      <a href={item.github} target="_blank">
                      <Button>
                        Code <Code size={13} className="mt-[0.8px] ml-1" />
                      </Button>
                      </a>
                    </div>
                  </div>
                  <DotPattern
                    className={cn(
                      "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] opacity-20 top-0 absolute -z-10 " // <<<< this does not go under the image
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start flex-col relative  " id="skill">
        <div className="my-10 flex flex-col items-center justify-center w-full space-y-4 ">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="text-8xl font-bold">Skills</h2>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={1}>
            <p className=" ">
              These are some of the skills I'm most refined in; these tools
              enable me to build reliable and robust back-ends.
            </p>
          </BoxReveal>
        </div>

        <div className="flex items-center w-full relative ">

          <div className=" flex items-center justify-center flex-col w-full">
            <div className="text-lg space-x-2 mb-4">
              {icons.map((icon) => {
                return <Badge className="">{icon.name}</Badge>;
              })}{" "}
            </div>
            
            <CustomMarqueeT />
          </div>
          
          
        </div>
    
        <DotPattern
                    className={cn(
                      "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] opacity-10  top-0  " // <<<< this does not go under the image
                    )}
                  />
      </div>

      <div className=" flex items-center justify-start flex-col h-full  p-10 overflow-hidden " id="about">
        <div className="my-10 flex flex-col items-center justify-center w-full h-full space-y-10  ">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="text-8xl font-bold">About</h2>
          </BoxReveal>

          <div className="flex items-start justify-center space-x-20 relative  h-full  ">
            <div className="  flex items-start justify-start flex-col  border border-neutral-600   rounded-md bg-card z-10 h-full">
              <div className="flex items-center justify-start w-full py-2 bg-neutral-800 border rounded-t-md">
                <div className="w-2 h-2 bg-green-500 rounded-full ml-6 mr-1 relative"></div>
                <p className="text-xs font-semibold">Online</p>
              </div>

              <div className=" w-full h-full  border-t p-6 ">
                <img
                  src="https://media.licdn.com/dms/image/D4E03AQFP7wMBhp7ajw/profile-displayphoto-shrink_800_800/0/1718214848460?e=1727308800&v=beta&t=_VEt_WovShVrB5S_G1-Vq-9BpKhSHz7jAJLau_qvsQo"
                  className=" w-[200px] h-full rounded-full border  border-neutral-300"
                />
                <div className="w-full flex items-start justify-center flex-col space-y-2  mt-2">
                  <h2 className="text-lg font-semibold">Antônio de Pádua</h2>
                  <p className="text-sm">Fullstack developer</p>
                </div>
              </div>
            </div>
            <div className="w-1/3 space-y-10 font-normal ">
              <p>
                I have skills in both server-side and client-side development.
                For server-side, I specialize in creating robust APIs with
                Node.js using frameworks like Nest and Express. My database
                expertise includes MongoDB, PostgreSQL, and I leverage ORM tools
                such as Prisma for efficient data management. Recently, I've
                been exploring Docker for containerization and deployment. On
                the client-side, I design user-friendly interfaces with React
                and Next.js, enhancing user experiences. Additionally, I'm
                expanding my skills in C# development.
              </p>
              <p>
                Furthermore, I have integrated Supabase and Firebase into my
                projects for real-time database capabilities, authentication,
                enhancing the dynamic and interactive aspects of my
                applications.
              </p>
              <div className="space-x-2">
                <a href="https://github.com/toniswx" target="_blank">
                  <Button>
                  Check my github
                  <Github size={15} className="mx-1 mt-1 font-bold" />
                </Button>
                </a>
               
               <a  href="mailto:toninhoport@gmail.com">
                    <Button variant={"outline"}>
                  Send me a mail
                  <MailCheckIcon size={15} className="mx-1 mt-1 font-bold" />
                </Button>
               </a>
            
              </div>
            </div>

            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 absolute w-full "
              )}
            />
          </div>
        </div>
      
      </div>
      <div>
      <div className="relative flex h-[300px]  flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl w-[100%]">
              <div className="z-10 flex items-center justify-center flex-col space-y-7 ">
              <h2 className="text-5xl font-bold">Have a project in mind ?</h2>
               <p>Whether you're starting from scratch or looking to enhance an existing concept, I'm here to help. Let's collaborate and bring your ideas to life 🚀 </p>
               <a  href="https://www.linkedin.com/in/ant%C3%B4nio-de-p%C3%A1dua-36a530254/" target="_blankgit init">
                 <ShinyButton text="Get in touch in linkedin!"/>
               </a>
              
              </div>
          <Ripple />
        </div>
        
      </div>
      <footer className="px-3 pt-4 lg:px-9 border text-white">
    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

        <div className="sm:col-span-3">
            <a href="#" className="inline-flex items-center">
                <span className="ml-2 text-lg font-bold tracking-wide ">Antônio de Pádua</span>
            </a>
            <p></p>
            
        </div>

        <div className="flex flex-col gap-2 text-sm">
            <p className="text-base font-bold tracking-wide text-neutral-100">Links</p>
            <a href="https://www.linkedin.com/in/ant%C3%B4nio-de-p%C3%A1dua-36a530254/" target="_blank">Linkedin</a>
            <a href="https://github.com/toniswx" target="_blank">Github</a>
            <a href="mailto:toninhoport@gmail.com" > Email</a>
           
        </div>
 

    </div>

 

</footer>

    </div>
  );
}

export default App;
