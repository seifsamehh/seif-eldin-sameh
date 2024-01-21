"use client";

import { Tabs, Tab, Card, CardBody, Chip, Link } from "@nextui-org/react";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const Creattion = localFont({
  src: "../public/fonts/Creattion Demo.otf",
  display: "swap",
});
const Franchise = localFont({
  src: "../public/fonts/Franchise-Free-Bold.ttf",
  display: "swap",
});

export default function Work() {
  return (
    <section className="work">
      <section className="lg-experience min-[290px]:hidden md:block overflow-hidden py-6">
        <div className="content flex justify-center items-center gap-6">
          <div className="flex w-[50%] items-center flex-col">
            <Tabs aria-label="Options" variant="solid" size="lg">
              <Tab key="2021" title="2021">
                <Card className="bg-[#00b5e7]">
                  <CardBody>
                    <div className="card-title flex justify-between items-center">
                      <h3
                        className={`${Franchise.className} font-black text-4xl`}
                      >
                        front end web developer
                      </h3>
                      <p className={`${Creattion.className} text-5xl`}>
                        Exception Designs
                      </p>
                    </div>
                    <div className="card-body my-6">
                      <p>
                        I assembled and addressed technical and design
                        requirements, integrating user-facing and front-end
                        elements to maintain web presence effectiveness. I also
                        collaborated with stakeholders during the development
                        processes to confirm creative proposals and design best
                        practices. Additionally, I followed SDLC best practices
                        within an Agile environment to produce rapid iterations
                        for clients. Finally, I integrated web applications for
                        mobile platforms into a front-end environment.
                      </p>
                    </div>
                    <div className="card-chips flex gap-2">
                      <Chip>Html</Chip>
                      <Chip>Css</Chip>
                      <Chip>Scss</Chip>
                      <Chip>JavaScript</Chip>
                      <Chip>React</Chip>
                      <Chip>Jest</Chip>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="2022" title="2022">
                <Card className="bg-[#00b5e7]">
                  <CardBody>
                    <div className="card-title flex justify-between items-center">
                      <h3
                        className={`${Franchise.className} font-black text-4xl`}
                      >
                        head web team
                      </h3>
                      <Link
                        isExternal
                        href="https://ieee-community.vercel.app/"
                        color="foreground"
                        className={`${Creattion.className} text-5xl`}
                      >
                        IEEE Community
                      </Link>
                    </div>
                    <div className="card-body my-6">
                      <p>
                        I was responsible for teaching students about web
                        development and mentoring them on their projects. I also
                        help to organize and plan events for the community. I am
                        passionate about teaching and mentoring others, and I
                        was excited to be a part of the IEEE community.
                      </p>
                    </div>
                    <div className="card-chips flex gap-2">
                      <Chip>Html</Chip>
                      <Chip>Css</Chip>
                      <Chip>Scss</Chip>
                      <Chip>Bootstrap</Chip>
                      <Chip>Teaching</Chip>
                      <Chip>Mentoring</Chip>
                      <Chip>Web Development</Chip>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="present" title="present">
                <Card className="bg-[#00b5e7]">
                  <CardBody>
                    <div className="card-title flex justify-between items-center">
                      <h3
                        className={`${Franchise.className} font-black text-4xl`}
                      >
                        chief technology officer ( cto )
                      </h3>
                      <Link
                        isExternal
                        href="https://golden-hornet-software.vercel.app/"
                        color="foreground"
                        className={`${Creattion.className} text-5xl`}
                      >
                        Golden Hornet
                      </Link>
                    </div>
                    <div className="card-body my-6">
                      <p>
                        The Chief Technology Officer (CTO) is a senior-level
                        executive who is responsible for the technical aspects
                        of a company. They oversee the development and
                        implementation of new technologies, ensure that the
                        company&apos;s IT infrastructure is secure and reliable,
                        manage the company&apos;s IT budget, hire and manage the
                        company&apos;s IT staff, align the company&apos;s
                        technology strategy with its business goals, and stay
                        up-to-date on the latest technological trends. They may
                        also develop and implement the company&apos;s
                        cybersecurity strategy, manage the company&apos;s data
                        privacy program, evaluate and select new software and
                        hardware solutions, troubleshoot technical problems,
                        educate employees on new technologies, and represent the
                        company to the technology community.
                      </p>
                    </div>
                    <div className="card-chips flex gap-2 flex-wrap">
                      <Chip>Html</Chip>
                      <Chip>Css</Chip>
                      <Chip>Scss</Chip>
                      <Chip>Bootstrap</Chip>
                      <Chip>TailwindCss</Chip>
                      <Chip>WebPack</Chip>
                      <Chip>Next.js</Chip>
                      <Chip>Node.js</Chip>
                      <Chip>JavaScript</Chip>
                      <Chip>TypeScript</Chip>
                      <Chip>Express.js</Chip>
                      <Chip>Nest.js</Chip>
                      <Chip>Technology</Chip>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
      {/* sm screen */}
      <section className="sm-experience min-[290px]:block md:hidden overflow-hidden py-12">
        <div className="content flex justify-center items-center gap-6">
          <div className="cards flex flex-col gap-6">
            <div className="card bg-[#00b5e7] p-4 m-4 rounded-md">
              <div className="card-title flex justify-center items-center gap-4 flex-wrap">
                <h3 className={`${Franchise.className} font-black text-4xl`}>
                  front end web developer
                </h3>
                <p className={`${Creattion.className} text-5xl text-[#181823]`}>
                  Exception Designs
                </p>
              </div>
              <div className="card-body my-6">
                <p className="text-center">
                  I assembled and addressed technical and design requirements,
                  integrating user-facing and front-end elements to maintain web
                  presence effectiveness. I also collaborated with stakeholders
                  during the development processes to confirm creative proposals
                  and design best practices. Additionally, I followed SDLC best
                  practices within an Agile environment to produce rapid
                  iterations for clients. Finally, I integrated web applications
                  for mobile platforms into a front-end environment.
                </p>
              </div>
              <div className="card-chips flex flex-wrap justify-center gap-2">
                <Chip>Html</Chip>
                <Chip>Css</Chip>
                <Chip>Scss</Chip>
                <Chip>JavaScript</Chip>
                <Chip>React</Chip>
                <Chip>Jest</Chip>
              </div>
            </div>
            <div className="card bg-[#00b5e7] p-4 m-4 rounded-md">
              <div className="card-title flex justify-center items-center gap-4 flex-wrap">
                <h3 className={`${Franchise.className} font-black text-4xl`}>
                  head web team
                </h3>
                <Link
                  isExternal
                  href="https://ieee-community.vercel.app/"
                  color="foreground"
                  className={`${Creattion.className} text-5xl text-center`}
                >
                  IEEE Community
                </Link>
              </div>
              <div className="card-body my-6">
                <p className="text-center">
                  I was responsible for teaching students about web development
                  and mentoring them on their projects. I also help to organize
                  and plan events for the community. I am passionate about
                  teaching and mentoring others, and I was excited to be a part
                  of the IEEE community.
                </p>
              </div>
              <div className="card-chips flex flex-wrap justify-center gap-2">
                <Chip>Html</Chip>
                <Chip>Css</Chip>
                <Chip>Scss</Chip>
                <Chip>Bootstrap</Chip>
                <Chip>Teaching</Chip>
                <Chip>Mentoring</Chip>
                <Chip>Web Development</Chip>
              </div>
            </div>
            <div className="card bg-[#00b5e7] p-4 m-4 rounded-md">
              <div className="card-title flex justify-center items-center gap-4 flex-wrap">
                <h3 className={`${Franchise.className} font-black text-4xl`}>
                  chief technology officer
                </h3>
                <Link
                  isExternal
                  href="https://golden-hornet-software.vercel.app/"
                  color="foreground"
                  className={`${Creattion.className} text-5xl`}
                >
                  Golden Hornet
                </Link>
              </div>
              <div className="card-body my-6">
                <p className="text-center">
                  The Chief Technology Officer (CTO) is a senior-level executive
                  who is responsible for the technical aspects of a company.
                  They oversee the development and implementation of new
                  technologies, ensure that the company&apos;s IT infrastructure
                  is secure and reliable, manage the company&apos;s IT budget,
                  hire and manage the company&apos;s IT staff, align the
                  company&apos;s technology strategy with its business goals,
                  and stay up-to-date on the latest technological trends.
                </p>
              </div>
              <div className="card-chips flex flex-wrap justify-center gap-2">
                <Chip>Html</Chip>
                <Chip>Css</Chip>
                <Chip>Scss</Chip>
                <Chip>Bootstrap</Chip>
                <Chip>TailwindCss</Chip>
                <Chip>WebPack</Chip>
                <Chip>Next.js</Chip>
                <Chip>Node.js</Chip>
                <Chip>JavaScript</Chip>
                <Chip>TypeScript</Chip>
                <Chip>Express.js</Chip>
                <Chip>Nest.js</Chip>
                <Chip>Technology</Chip>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
