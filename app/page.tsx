import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import GlareHover from "@/components/GlareHover";
import { Card, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold">PORTFOLIO</h1> */}
      <div className="flex justify-end mr-4 mt-4 gap-5">
        <GlareHover playOnce={false} glareColor="#d3d3d3">
          <a href="/FERNANDOZYMER_RESUME.pdf">
            <Button variant="outline" className="border-2 cursor-pointer">
              Download CV
            </Button>
          </a>
        </GlareHover>
        
        <ModeToggle />
      </div>
      {/* MAIN CONTENT */}
      <div className="mt-20"></div>
      
      {/* <h2 className="text-2xl"></h2> */}
      {/* INTRODUCTION */}
      <div className="flex justify-center gap-20">
        <div>
          <p className="text-3xl">
          Hi, I &apos;am <b>Zymer Fernando</b>
          </p>
          <p className="text-6xl font-bold">
            FULL STACK <br />
            DEVELOPER
          </p>
        </div>
        
        <p className="w-[50%]">
          I&apos;m a full stack web developer with a strong focus on backend
          development. I work primarily with Next.js, NestJS, Node.js, React,
          TypeScript, and PostgreSQL, and I deploy applications using Vercel. I
          use Tailwind CSS for modern, responsive styling and have experience with
          machine learning, data preprocessing, analytics, and data visualization
          using Python libraries such as NumPy, Pandas, scikit-learn, and
          Matplotlib. I&apos;m also familiar with Java and C++ at a beginner level and
          enjoy building scalable, data-driven web applications.
        </p>
      </div>
      
      {/* <marquee direction="up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo, quis nostrum delectus incidunt blanditiis dolore exercitationem tenetur veritatis non quisquam quasi. Natus ipsum, impedit nam sunt est tempore quasi!</marquee> */}
      <Card className="w-[50%] mt-20 text-center">
        <CardTitle>TECH STACK</CardTitle>
      </Card>
      <div className="h-[200vh]"></div> {/* for testing purposes */}
    </div>
  );
}
