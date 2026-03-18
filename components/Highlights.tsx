"use client";

import { motion } from "framer-motion";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { TimelineOppositeContent } from "@mui/lab";
import TimelineDot from '@mui/lab/TimelineDot'; import Button from "@mui/material/Button";
import Image from "next/image";
import { div } from "framer-motion/client";

const data = [
    {
    id: 0,
    title: "Full Stack Developer Intern",
    description:
      (<><p>Working as a <span className="">Full Stack Developer Intern</span> at a Canada based startup, <span className="bg-purple-400/40 text-black font-bold px-1 py-1 mt-6 rounded">Legion Automations</span>. Gained hands-on experience in developing and maintaining web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.</p></>),
    link: "https://www.linkedin.com/posts/sundaram-katare5_fullstackdeveloper-internship-codeglo-activity-7369635907231997957-lFa_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAKzyMBwb4eXt9DlvtlgOeMl64COBehWJU",
  },
  {
    id: 1,
    title: "Web Developer Intern",
    description:
      (<><p>Completed a 2 months internship at PHICSIT Infotech Pvt. Ltd. as a Web Developer. Worked with both frontend and backend technologies in a collaborative team environment.</p></>),
    img: "/phicsit.png",
    link: "https://www.linkedin.com/posts/phicsit_welcome-phicsit-intern-activity-7369635907231997957-lFa_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAKzyMBwb4eXt9DlvtlgOeMl64COBehWJU",
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    description: (<><p className="flex"> Solved <span className="bg-green-400/40 font-semibold rounded-2xl mx-2 text-black px-1">360+</span> DSA Problems on Leetcode </p></>),
    img: "/leetcode.png",
    link: "https://leetcode.com/u/SundaramKatare/",
  },
  {
    id: 3,
    title: "Open Source Achievement",
    description:
      (<><p>Ranked <span className="bg-orange-400/40 font-semibold rounded-lg mx-2 text-black px-1">15</span> among <span className="bg-green-400/40 font-semibold rounded-lg mx-2 text-black px-1">10K+</span> contributors in Open Source Connect India 2025. Contributed to more 4+ Projects</p></>),
    img: "/osc.png",
    link: "https://www.linkedin.com/posts/sundaram-katare5_opensource-achievement-collaboration-activity-7373747098367729664-k_6i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAKzyMBwb4eXt9DlvtlgOeMl64COBehWJU",
  },
  {
    id: 4,
    title: "SQL",
    description: "3 ★ on Hackerrank in SQL",
    img: "/sql.png",
    link: "https://www.hackerrank.com/profile/sundaramkatare53",
  },
];

export default function Highlights() {
  return (
    <div className="w-full px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold font-poppins mb-12 text-blue-900">Highlights</h1>

      <Timeline position="alternate">
        {data.map((item) => (
          <TimelineItem key={item.id}>
            <TimelineOppositeContent className="font-bold text-black hidden md:block md:text-black md:font-extrabold ">
              {item.title}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot color="warning" />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative bg-white shadow-xl rounded-2xl p-6 flex flex-col md:flex-row justify-start items-center gap-6"
              >
                {/* <Image src={item.img} alt={item.title} width={80} height={80} className="rounded-xl" /> */}
                <div className="">
                  <h2 className="text-xl font-bold flex-start flex text-orange-600">{item.title}</h2>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <Button
                    variant="contained"
                    sx={{ mt: 2, backgroundColor: "#ff7b07ff", borderRadius: "10px" }}
                    onClick={() => window.open(item.link, "_blank")}
                    className="flex flex-start align-center absolute"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
