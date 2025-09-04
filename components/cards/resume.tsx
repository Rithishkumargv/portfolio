import Image from "next/image";
import Card from "../ui/card";
import SignatureImg from "@/public/assets/images/me/signature.png";
import Button from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/socials";
export default function ResumeCard() {
  return (
    <Card className="md:h-full ">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
        I’m a passionate video editor with a knack for turning raw footage into
        engaging visual stories. My skills include basic video editing, color
        grading, masking, creative transitions, and green screen effects,
        combined with fresh and innovative ideas to make content stand out. I
        excel at beat synchronization with audio for maximum impact and
        understand the fundamentals of camera composition and angles to enhance
        storytelling. Whether it’s polishing a project or adding a creative
        twist, I aim to deliver videos that connect with audiences and leave a
        lasting impression. 🚀🖥
      </p>
      {/*Signature*/}
      <div>
        <Image src={SignatureImg} alt="mohamed hajji" />
      </div>
      {/*Socials and resume btn*/}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/*Socials*/}
        <Socials />
        <Button>
          <FaDownload />
          Resume
        </Button>
      </div>
    </Card>
  );
}
