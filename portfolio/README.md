# Hi, this is my portfolio 

This is the code behind my personal portfolio site — built to actually show what I've worked on. It's a single-page app with smooth section-to-section navigation (home, experience, projects, skills, education, certificates, beyond code, and contact), all crossfading into each other.

I built this with Next.js + TypeScript + Tailwind, and leaned on Framer Motion for the transitions.

## What's in here

- **Home** — quick intro, who I am, what I do
- **Experience** — where I've worked and what I actually did there
- **Projects** — the stuff I'm proudest of
- **Skills** — tools and tech I use regularly
- **Education** — the academic path
- **Certificates & Achievements** — courses, certifications, that kind of thing
- **Beyond Code** — a bit of the non-work side of me
- **Contact** — how to reach me

Navigation is hash-based, so every section has its own shareable URL, and it remembers where you were if you refresh.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for the animations and page transitions
- [Lucide](https://lucide.dev/) for icons

## Running it locally

If you want to poke around the code or run it yourself:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts, in case you need them:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the codebase
```

## Project structure

```
app/            entry point, layout, and global styles
components/
  layout/       shell, section nav, theme toggle, etc.
  sections/     each individual section (Hero, Projects, Skills, ...)
  ui/           small reusable UI bits
data/           all my actual content — profile, projects, experience, skills, education, certs
lib/            navigation context, animation variants, small utilities
```

The content (my bio, project list, work experience, etc.) lives entirely in the `data/` folder as typed TypeScript files, so updating the site is mostly just editing data, not rewriting components.

## Why I built it this way

I wanted something that felt more like a small product than a static resume page — real transitions, a proper nav, and content kept separate from layout so I'm not touching component code every time I add a new project or certificate. It's also just been a fun place to try things out with Next.js and Framer Motion.

## License

See [LICENSE](../LICENSE).

## Get in touch

- LinkedIn: [linkedin.com/in/prakashsingh04](https://linkedin.com/in/prakashsingh04)
- GitHub: [github.com/Prakashsingh04](https://github.com/Prakashsingh04)
- Email: imprakash.work04@gmail.com
