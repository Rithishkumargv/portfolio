import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";
import { sub } from "framer-motion/client";

export default function EducationCard() {
  return (
    <Card title="My Education">
      <Timeline>
        {EducationsData.map((ed, i) => (
          <TimelineItem
            key={i}
            date={ed.date}
            title={ed.title}
            subTitle={ed.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}
const EducationsData = [
  {
    date: "2025 — Present",
    title: "MSc Multimedia",
    subTitle: "Chennai Animation College (CAC)",
  },
  {
    date: "2022 — 2025",
    title: "B.Tech Information Technology",
    subTitle: "Sri Sai Ram Engineering College (SEC)",
  },
  {
    date: "2019 — 2022",
    title: "ECE (Diploma)",
    subTitle: "Sri Sai Ram Polytechnic (SSP)",
  },
];
