import Image from "next/image";
import Skill from "../components/skill/skill";
import styles from "./home.module.scss";

export default function HomePage() {
  return (
    <>
      <section className={`${styles.home} `}>
        <div className="container mx-auto ">
          <div className="flex flex-col lg:flex-row p-6 justify-between items-center z-10 relative ">
            <div className="basis-7/12 flex flex-col justify-center">
              <h4 className="text-6xl font-bold text-yellow-400">Hello,</h4>
              <h1 className="text-8xl mt-6 font-bold text-white">I Am Ham.</h1>
              <h5 className="text-4xl mt-3 font-semibold color-primary">
                Web Developer
              </h5>
              <p className="text-2xl mt-3 text-white">
                Empowering businesses, amplifying brands, and connecting people
                through the art of web development.
              </p>
              <div>
                <button className="btn-primary flex flex-wrap justify-between items-center mt-6">
                  Hire Me
                  <i className="ic ic-arrow_right"></i>
                </button>
              </div>
            </div>
            <div className="flex-1 p-6" style={{ maxWidth: "600px" }}>
              <div className="flex justify-center relative">
                <Image
                  src="/images/me.jpg"
                  width={700}
                  height={600}
                  alt="thitipat na nakorn"
                  className="rounded-full"
                ></Image>
                <div className={styles.float_icon_1}>
                  <Image
                    src="/images/react.png"
                    width={100}
                    height={100}
                    alt="react"
                    className="rounded-full"
                  ></Image>
                </div>
                <div className={styles.float_icon_2}>
                  <div className="flex flex-row justify-center items-center mt-1">
                    <Image
                      src="/images/html5-color.svg"
                      width={40}
                      height={40}
                      alt="html"
                    ></Image>
                  </div>
                </div>
                <div className={styles.float_icon_3}>
                  <div className="flex flex-row justify-center items-center mt-1">
                    <Image
                      src="/images/css3-color.svg"
                      width={40}
                      height={40}
                      alt="css"
                    ></Image>
                  </div>
                </div>
                <div className={styles.flot_message}>
                  <div className="flex gap-3 items-center">
                    <Image
                      src="/images/vaccinated.png"
                      width={40}
                      height={40}
                      alt="vaccinated"
                      className=""
                    ></Image>
                    <div className="flex flex-col flex-1">
                      <h2 className="font-bold text-xl">4 times</h2>
                      <p>Vaccinated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.shape_1}>
          <svg width="1038" height="938" viewBox="0 0 1038 938" fill="none">
            <g opacity="0.5" filter="url(#filter0_f_39_4392)">
              <circle cx="290.5" cy="282.5" r="247.5"></circle>
            </g>
            <defs>
              <filter
                id="filter0_f_39_4392"
                x="-457"
                y="-465"
                width="1495"
                height="1495"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_39_4392"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
        <div className={styles.shape_2}>
          <svg width="1295" height="938" viewBox="0 0 1295 938" fill="none">
            <g opacity="0.4" filter="url(#filter0_f_39_4393)">
              <circle cx="647.5" cy="561.5" r="247.5"></circle>
            </g>
            <defs>
              <filter
                id="filter0_f_39_4393"
                x="0"
                y="-86"
                width="1295"
                height="1295"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="200"
                  result="effect1_foregroundBlur_39_4393"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
        <div className={styles.shape_3}>
          <svg width="752" height="747" viewBox="0 0 752 747" fill="none">
            <g opacity="0.45" filter="url(#filter0_f_39_4394)">
              <circle cx="647.5" cy="99.5" r="247.5"></circle>
            </g>
            <defs>
              <filter
                id="filter0_f_39_4394"
                x="0"
                y="-548"
                width="1295"
                height="1295"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="200"
                  result="effect1_foregroundBlur_39_4394"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
        <div className={styles.line_shape_1}>
          <Image
            src="/images/line-1.png"
            width={860}
            height={860}
            alt="vaccinated"
            className=""
          ></Image>
        </div>
        <div className={styles.line_shape_2}>
          <Image
            src="/images/line-2.png"
            width={1240}
            height={860}
            alt="vaccinated"
            className=""
          ></Image>
        </div>
      </section>
      <section>
        <Skill />
      </section>
    </>
  );
}
