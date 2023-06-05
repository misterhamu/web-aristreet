import styles from "./working.module.scss";
import Image from "next/image";

export default function Working() {
  return (
    <div className={styles.working_wrapper}>
      <div className="container mx-auto pt-24">
        <div className="flex flex-col gap-3 p-6">
          <h2 className="text-white text-4xl text-center font-bold">Working Process</h2>
          <p className="text-white text-center">
            The initial stage where project requirements are understood, goals
            are set, and scope is defined.
          </p>
          <div className="flex mt-6 gap-3 flex-col md:flex-row justify-center">
            <div className={styles.working_box}>
              <div className={styles.icons}>
                <Image src="/images/icons/conversation.png"
                width={80}
                height={80}
                alt="Discuss"></Image>
              </div>
              <h4 className="text-3xl text-white font-bold">Discuss</h4>
              <p className="text-white mt-3">
                Engaging in detailed conversations to gather specific
                requirements, preferences, and align expectations.
              </p>
            </div>

            <div className={styles.working_box}>
            <div className={styles.icons}>
                <Image src="/images/icons/design.png"
                width={80}
                height={80}
                alt="Design"></Image>
              </div>
              <h4 className="text-3xl text-white font-bold">Design</h4>
              <p className="text-white mt-3">
                Creating visually appealing and user-friendly interfaces through
                wireframing, mockups, and graphical elements.
              </p>
            </div>

            <div className={styles.working_box}>
            <div className={styles.icons}>
                <Image src="/images/icons/code.png"
                width={80}
                height={80}
                alt="Code"></Image>
              </div>
              <h4 className="text-3xl text-white font-bold">Code</h4>
              <p className="text-white mt-3">
                Translating design concepts into functional code using
                programming languages, frameworks, and libraries.
              </p>
            </div>

            <div className={styles.working_box}>
            <div className={styles.icons}>
                <Image src="/images/icons/deploy.png"
                width={80}
                height={80}
                alt="Deploy"></Image>
              </div>
              <h4 className="text-3xl text-white font-bold">Deploy</h4>
              <p className="text-white mt-3">
                Making the website accessible on the internet after thorough
                testing, optimization, and configuration of necessary
                infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ab_shape}>
        <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
          <g opacity="0.3" filter="url(#filter0_f_39_4268)">
            <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500"></circle>
          </g>
          <defs>
            <filter
              id="filter0_f_39_4268"
              x="-500"
              y="0"
              width="1495"
              height="1495"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="250"
                result="effect1_foregroundBlur_39_4267"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
