import Card from "../ui/card";

export default function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My Background">
      <div>
        <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
          From the beginning, I pursued a diploma in &nbsp;
          <span className="text-white underline">
            Electronics and Communication Engineering (ECE),
          </span>
          but I couldn’t find genuine interest in that field. That led me to
          shift into &nbsp;
          <span className="text-white underline">
            Information Technology (IT) for my engineering studies,
          </span>
          hoping it would better suit my goals and interests
          <br />
          <span className="text-white underline">
            During my time studying IT, I became highly fascinated by video
            editing.
          </span>
          &nbsp; This passion intensified when I &nbsp;
          <span className="text-white underline">
            won first prize in a video
          </span>
          &nbsp; editing competition, which made me realize how much I enjoyed
          the creative process and storytelling through videos. That achievement
          sparked a deeper curiosity and motivation in the field of multimedia.{" "}
          <br />
          Because of this newfound passion, I decided to &nbsp;
          <span className="text-white underline">
            pursue a master’s degree in Multimedia (MSC Multimedia).
          </span>
          &nbsp; I am now committed to building expertise in digital media,
          aiming to combine my technical background with my love for &nbsp;
          <span className="text-white underline">
            creative content creation.
          </span>{" "}
          &nbsp; Through continuous learning and hands-on experience in
          multimedia, I am excited for the opportunities ahead and determined to
          make a meaningful impact in the world of digital media.
        </p>
      </div>
    </Card>
  );
}
