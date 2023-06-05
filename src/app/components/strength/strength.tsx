"use client";
import { useState } from "react";
import styles from "./strength.module.scss";
import Image from "next/image";

export default function Strength() {
  const [str, setStr] = useState("Maximizer");
  const getDetail = () => {
    switch (str) {
      case "Maximizer":
        return `
    Maximizer strength often focus on transforming something good into
            something exceptional. They have high standards and an ability to
            identify areas of potential growth and development. They excel at
            providing constructive feedback, helping others refine their skills,
            and enhancing performance.`;
      case "Empathy":
        return `
        Empathy strength possess a heightened sensitivity to the emotions and experiences of others. They can intuitively sense what others are going through and are skilled at offering support, comfort, and understanding. Empathetic individuals excel at listening attentively, providing a safe space for others to express themselves, and demonstrating compassion in their interactions.`;
      case "Activator":
        return `
          Activator strength have a sense of urgency and are often seen as catalysts for change. They are not afraid to take risks, and their enthusiasm and drive inspire others to join in their endeavors. Activators thrive in environments where they can make things happen and bring ideas to life.`;
      case "Communication":
        return `
            Communication strength possess strong verbal and written communication skills. They have a natural talent for finding the right words, engaging others, and expressing themselves clearly and persuasively. They are adept at adapting their communication style to suit different audiences and situations.`;
      case "Positivity":
        return `
              Positivity strength have a genuine belief in the potential for good outcomes and tend to focus on the positive aspects of situations. They are often seen as optimistic, cheerful, and resilient in the face of challenges. Positivity is not about ignoring or denying problems, but rather about maintaining a hopeful and solution-oriented mindset.`;
    }
  };
  return (
    <div className={`${styles.strength_wrapper}`}>
      <div className="container mx-auto pt-24 pb-24">
        <div className="flex flex-col gap-3 p-6">
          <h2 className="text-white text-4xl text-center font-bold">
            My Strength
          </h2>
          <p className="text-white text-center">
            Identify and develop your unique strengths for personal growth.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-3">
            <button
              className={styles.strength_btn}
              onClick={() => setStr("Maximizer")}
            >
              Maximizer
            </button>
            <button
              className={styles.strength_btn}
              onClick={() => setStr("Empathy")}
            >
              Empathy
            </button>
            <button
              className={styles.strength_btn}
              onClick={() => setStr("Activator")}
            >
              Activator
            </button>
            <button
              className={styles.strength_btn}
              onClick={() => setStr("Communication")}
            >
              Communication
            </button>
            <button
              className={styles.strength_btn}
              onClick={() => setStr("Positivity")}
            >
              Positivity
            </button>
          </div>
        </div>

        <div className={`${styles.str_box} mt-6`}>
          <p className="text-white">{getDetail()}</p>
        </div>
      </div>
      <div className={styles.shape_strength}>
        <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
          <g opacity="0.45" filter="url(#filter0_f_39_4214)">
            <circle cx="750" cy="750" r="200"></circle>
          </g>
          <defs>
            <filter
              id="filter0_f_39_4214"
              x="0"
              y="0"
              width="1500"
              height="1500"
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
                stdDeviation="275"
                result="effect1_foregroundBlur_39_4212"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
