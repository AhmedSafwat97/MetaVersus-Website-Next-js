import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, textVariant2, staggerContainer } from "@/utils/motion";
import { insights } from "@/pages/api";
import Image from "next/image";

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex flex-[0.75] justify-center flex-col font-normal text-[14px] text-secondary-white text-center"
        >
          <motion.span>| Insight</motion.span>
          <motion.h3
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className="mt-[8px] font-bold md:text-[30px] text-[30px] text-white"
          >
            Insight about metaverse
          </motion.h3>
          <div className="mt-[50px] flex flex-col gap-[30px]">
            {insights.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeIn("up", "spring", index * 0.5, 1)}
                className="flex md:flex-row flex-col gap-4"
              >
                <Image
                  width={100}
                  height={100}
                  src={item.imgUrl}
                  alt="planet-01"
                  className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
                />
                <div className="w-full flex justify-between items-center">
                  <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                    <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                      {item.title}
                    </h4>
                    <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
                    <Image
                      width={1080}
                      height={1920}
                      src="/arrow.svg"
                      alt="arrow"
                      className="w-[40%] h-[40%] object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Insights;
