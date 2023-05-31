import styles from "./skill.module.scss";
import Image from "next/image";

const skills = [
  {
    id: 0,
    color: "lightblue",
    name: "React",
    icons: "/images/skills/react.png",
  },
  { id: 0, color: "red", name: "Angular", icons: "/images/skills/angular.png" },
  {
    id: 0,
    color: "darkblue",
    name: "Typescript",
    icons: "/images/skills/typescript.png",
  },
  {
    id: 1,
    color: "yellow",
    name: "Javascript",
    icons: "/images/skills/js.png",
  },
  { id: 2, color: "orange", name: "HTML5", icons: "/images/skills/html5_.png" },
  { id: 3, color: "darkblue", name: "CSS3", icons: "/images/skills/css3.png" },
  { id: 3, color: "lightblue", name: "Go", icons: "/images/skills/go.png" },
  { id: 3, color: "green", name: "NodeJs", icons: "/images/skills/nodejs.png" },
  {
    id: 3,
    color: "lightblue",
    name: "Wordpress",
    icons: "/images/skills/wordpress.png",
  },
  {
    id: 3,
    color: "orange",
    name: "Firebase",
    icons: "/images/skills/firebase.png",
  },
  {
    id: 3,
    color: "green",
    name: "MongoDB",
    icons: "/images/skills/mongodb.png",
  },
  {
    id: 3,
    color: "darkblue",
    name: "PostgresSQL",
    icons: "/images/skills/postgresql-icon.png",
  },
  {
    id: 3,
    color: "darkblue",
    name: "Docker",
    icons: "/images/skills/docker.png",
  },
  {
    id: 3,
    color: "purple",
    name: "Kubernetes",
    icons: "/images/skills/kube.png",
  },
  { id: 3, color: "red", name: "GCP", icons: "/images/skills/gcp.png" },
];
export default function Skill() {
  const getYearExp = () => {
    const yearNow = new Date();
    yearNow.getFullYear();
    const exp = yearNow.getFullYear() - 2015;
    return exp.toString().padStart(2, "0");
  };

  const getColor = (color: string) => {
    switch (color) {
      case "red":
        return "255, 50, 50, 0.6";
      case "lightblue":
        return "9, 202, 251, 0.6";
      case "darkblue":
        return "48, 120, 200, 0.6";
      case "yellow":
        return "216, 190, 2, 0.6";
      case "orange":
        return "253, 87, 32, 0.6";
      case "green":
        return "140, 200, 1, 0.6";
      case "purple":
        return "40, 84, 243, 0.6";
    }
  };

  const getColorText = (color: string) => {
    switch (color) {
      case "red":
        return "text-red-400";
      case "lightblue":
        return "text-blue-200";
      case "darkblue":
        return "text-blue-400";
      case "yellow":
        return "text-yellow-400";
      case "orange":
        return "text-orange-400";
      case "green":
        return "text-green-200";
      case "purple":
        return "text-blue-500";
    }
  };

  return (
    <div className={`${styles.skill_wrapper} pt-24`}>
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row p-6 justify-between  z-10 relative ">
          <div className="basis-1/2 flex flex-col">
            <div className={styles.exp_wrapper}>
              <div className={styles.exp}>
                <h2>{getYearExp()}</h2>
                <p className="text-xl text-white">Years of Experience</p>
              </div>
              <div className={styles.web_devlop}>
                <h3>Web Development</h3>
                {/* <p>Clients Satisfections</p> */}
              </div>
            </div>
          </div>
          <div className="basis-1/2 p-6 text-white">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="mt-3">
              {`
            I am a web designer and web developer. My name is Thitipat Na
            Nakorn, but you can call me Ham. I graduated from Chulalongkorn
            University with a degree in Computer Science in 2014. My journey
            began when I was still a junior in university, working as a
            freelance graphic designer. Eventually, I transitioned into web
            development. 
        `}
            </p>
            <p className="mt-3">
              {`
             Currently, I hold the position of Senior Front-end
             Developer at a leading innovation organization, where I have gained
             valuable experience in various front-end technologies. One area that
             particularly excites me is React, as I am incredibly passionate
             about it. `}
            </p>
            <p className="mt-3">{` Now, you may be wondering why AriStreet? Well, the answer
            is quite simple: I currently reside in Ari, Bangkok. That's all
            there is to it!`}</p>
          </div>
        </div>
        <div className="flex mt-12 flex-wrap">
          {skills.map((s, k) => {
            return (
              <div
                className={styles.skill_box}
                key={k}
                style={{
                  background: `linear-gradient(180deg,rgba(${getColor(
                    s.color
                  )}),rgba(31, 30, 28, 0.6) 67.59%)`,
                }}
              >
                <div className={styles.skill_box_inner}>
                  <Image
                    src={s.icons}
                    width={60}
                    height={60}
                    alt={s.name}
                  ></Image>
                  <p className={`${getColorText(s.color)}`}>{s.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
