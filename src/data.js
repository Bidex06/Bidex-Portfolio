import {
  SiDotnet,
  SiReact,
  SiSharp,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiSwagger,
  SiHtml5,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { LuLayers3, LuRepeat, LuLightbulb, LuCode, LuDatabase, LuCloud, LuShieldCheck } from "react-icons/lu";

export const profile = {
  brand: "codewithBidex",
  realName: "Abidemi Akinmoladun",
  role: "Full-Stack Software Engineer",
  tagline: "Building with React and ASP.NET Core (C#).",
  bio:
 "I build full-stack web applications and Mobile Applications end to end — from a PostgreSQL schema to a polished React interface. My core stack is React.js on the frontend and ASP.NET Core (C#) on the backend, and I care as much about clean architecture and auth as I do about the pixels on screen.",
  email: "abidemi1199@gmail.com",
  github: "https://github.com/Bidex06",
  x: "https://x.com/Manuldex26",
};

export const pinnedSkills = [
  { name: "ASP.NET Core", icon: SiDotnet, note: "Enterprise application management" },
  { name: "React.js", icon: SiReact, note: "React.js application" },
  { name: "C#", icon: SiSharp, note: "Software engineering" },
];

export const additionalSkills = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "REST API Development", icon: TbApi },
  { name: "SQL Server", icon: LuDatabase },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Entity Framework Core", icon: LuLayers3 },
  { name: "Git & GitHub", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "Microsoft Azure", icon: LuCloud },
  { name: "JWT Authentication", icon: LuShieldCheck },
  { name: "Swagger / OpenAPI", icon: SiSwagger },
  { name: "HTML & CSS", icon: SiHtml5 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Clean Architecture", icon: LuLayers3 },
  { name: "Agile / Scrum", icon: LuRepeat },
  { name: "Problem Solving", icon: LuLightbulb },
  { name: "Software Development", icon: LuCode },
];

export const projects = [
  {
    id: "shopnest",
    name: "ShopNest",
    description:
      "Full-stack e-commerce platform for household products with category filtering, search, and sorting.",
    stack: ["React", "Vite", "ASP.NET Core 8", "PostgreSQL"],
    image: "shopnest.png",
    live: "https://shopnest-frontend-jb5r.onrender.com/",
  },
  {
    id: "restaurant",
    name: "Bidex Restaurant",
    description:
      "Restaurant landing page with menu browsing, table reservations, and contact section.",
    stack: ["React", "Vercel"],
    image: "restaurant.png",
    live: "https://bidex-resturant.vercel.app/",
  },
  {
    id: "sneaker",
    name: "Shop With Bidex",
    description:
      "Sneaker storefront with a featured products grid and a streamlined buy-now flow.",
    stack: ["React", "Vercel"],
    image: "sneaker.png",
    live: "https://shop-with-bidex.vercel.app/",
  },
];

export const marqueeSkills = [
  { name: "ASP.NET Core", icon: SiDotnet },
  { name: "React.js", icon: SiReact },
  { name: "C#", icon: SiSharp },
  { name: "TypeScript", icon: SiTypescript },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Swagger", icon: SiSwagger },
];

export const testimonials = [
  {
    quote:
      "Bidex delivered exactly what we asked for, on time, and explained every change clearly along the way.",
    name: "Client Name",
    role: "Product Manager —  Client",
  },
  {
    quote:
      "Communication was smooth and the final product was clean, fast, and easy to manage.",
    name: "Client Name",
    role: "UiUx Designer —  Client",
  },
  {
    quote:
      "A reliable full-stack developer who understands both the frontend details and backend architecture.",
    name: "Client Name",
    role: "Data Analyst Client",
  },
];
