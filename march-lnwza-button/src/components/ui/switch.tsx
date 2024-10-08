"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [checked, setChecked] = React.useState(false);

  const borderVariants = {
    unchecked: { x: 0 },
    checked1: { x: 205 },
    checked2: { x: 150 },
    checked3: { x: 100 },
  };

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer relative overflow-hidden inline-flex h-[155px] w-[400px] shrink-0 cursor-pointer items-center rounded-full",
        " data-[state=checked]:bg-checked-bg  data-[state=checked]:shadow-[inset_0px_4.23px_5.44px_0px_rgba(0,0,0,0.25),inset_0px_0.6px_7.85px_0px_rgba(0,0,0,0.25),2.42px_4.23px_4.83px_0px_rgba(0,0,0,0.25),0px_2.42px_2.42px_0px_rgba(255,255,255,0.25)]",
        "data-[state=unchecked]:bg-unchecked-bg data-[state=unchecked]:shadow-[inset_0px_4.23px_5.44px_0px_rgba(0,0,0,0.25),inset_0px_1.6px_7.85px_0px_rgba(0,0,0,0.25),0px_2.42px_2.42px_0px_rgba(255,255,255,0.94),0px_1.81px_2.42px_0px_rgba(0,0,0,0.25)]",
        className
      )}
      {...props}
      ref={ref}
      checked={checked}
      onCheckedChange={setChecked}
    >
      <>
        <motion.div
          initial="unchecked"
          animate={checked ? "checked3" : "unchecked"}
          variants={borderVariants}
          className="absolute border-[150px]  rounded-full left-0 opacity-20"
        ></motion.div>
        <motion.div
          initial="unchecked"
          variants={borderVariants}
          animate={checked ? "checked2" : "unchecked"}
          className="absolute border-[125px]  rounded-full left-0 opacity-20"
        ></motion.div>
        <motion.div
          initial="unchecked"
          variants={borderVariants}
          animate={checked ? "checked1" : "unchecked"}
          className="absolute border-[100px]  rounded-full left-0 opacity-20"
        ></motion.div>
      </>

      <SwitchPrimitives.Thumb
        className={cn(
          "z-40 pointer-events-none block h-[140px] w-[140px] rounded-full shadow-lg transition-transform duration-400 ",
          "data-[state=checked]:translate-x-[245px]",
          "data-[state=unchecked]:translate-x-3",
          "data-[state=unchecked]:bg-unchecked-moon  data-[state=unchecked]:shadow-[inset_1.81px_2.42px_2.42px_0px_#FEFFED9C,_inset_0px_-5px_2.42px_0px_#B49A2C,_2.42px_4.23px_4.83px_0px_rgba(0,0,0,0.25),_0px_2.42px_2.42px_0px_rgba(0,0,0,0.25)] ",
          "data-[state=checked]:bg-checked-moon data-[state=checked]:shadow-[inset_1.81px_2.42px_2.42px_0px_#FEFFED9C,_inset_0px_-3.02px_2.42px_0px_#373737,_2.42px_4.23px_4.83px_0px_rgba(0,0,0,0.25),_0px_2.42px_2.42px_0px_rgba(0,0,0,0.25)]"
        )}
      >
        {checked && (
          <>
            <div className="absolute bottom-[40px] right-[20px] bg-[#9DA5B5] w-[30px] h-[30px] rounded-full shadow-[inset_0px_0.6px_2.42px_0px_rgba(0,0,0,0.25)]"></div>
            <div className="absolute top-[22px] right-[70px] bg-[#9DA5B5] w-[20px] h-[20px] rounded-full shadow-[inset_0px_0.6px_2.42px_0px_rgba(0,0,0,0.25)]"></div>
            <div className="absolute bottom-[25px] right-[70px] bg-[#9DA5B5] w-[48px] h-[48px] rounded-full shadow-[inset_0px_0.6px_2.42px_0px_rgba(0,0,0,0.25)]"></div>
          </>
        )}
      </SwitchPrimitives.Thumb>

      {!checked && (
        <motion.div
          initial={{ y: 200, opacity: 0 }} // Start off-screen and hidden
          animate={{ y: 0, opacity: 1 }} // Move to its position and fade in
          // Set the duration for the animation
          className="absolute z-0"
        >
          <svg
            width="1000"
            height="174"
            viewBox="0 0 512 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M212.654 44.1957C221.814 38.5644 227.922 28.4503 227.922 16.9096C227.922 -0.767545 213.592 -15.0977 195.914 -15.0977C178.237 -15.0977 163.907 -0.767545 163.907 16.9096C163.907 26.0592 167.746 34.3121 173.901 40.1453C173.074 40.9994 172.308 41.9129 171.609 42.8787C168.571 41.3334 165.133 40.4622 161.491 40.4622C150.54 40.4622 141.428 48.341 139.516 58.7397C135.639 54.2062 129.878 51.3326 123.445 51.3326C113.762 51.3326 105.599 57.8443 103.097 66.7278C100.144 64.6385 96.5382 63.4108 92.6455 63.4108C89.0178 63.4108 85.6391 64.477 82.8058 66.3132C79.0895 63.7223 74.5706 62.203 69.6968 62.203C57.0226 62.203 46.7482 72.4775 46.7482 85.1517C46.7482 97.8259 57.0226 108.1 69.6968 108.1C77.1527 108.1 83.7782 104.545 87.97 99.0365C89.4616 99.4338 91.0288 99.6456 92.6455 99.6456C100.253 99.6456 106.766 94.9563 109.451 88.3105C110.435 89.1809 111.501 89.9609 112.636 90.6376C112.595 91.2193 112.575 91.8065 112.575 92.3986C112.575 106.073 123.66 117.159 137.335 117.159C151.01 117.159 162.095 106.073 162.095 92.3986C162.095 89.8754 161.718 87.4403 161.016 85.1467C161.174 85.15 161.333 85.1517 161.491 85.1517C167.987 85.1517 173.836 82.3797 177.919 77.9542C181.856 80.5929 186.592 82.1321 191.687 82.1321C205.362 82.1321 216.447 71.0465 216.447 57.3717C216.447 52.5293 215.057 48.0115 212.654 44.1957ZM23.7995 103.269C36.4737 103.269 46.7482 92.9946 46.7482 80.3204C46.7482 67.6462 36.4737 57.3717 23.7995 57.3717C11.1253 57.3717 0.850861 67.6462 0.850861 80.3204C0.850861 92.9946 11.1253 103.269 23.7995 103.269Z"
              fill="#F3FDFF"
            />
          </svg>
        </motion.div>
      )}
      {!checked && (
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          className="absolute z-0"
        >
          <svg
            width="1000"
            height="174"
            viewBox="0 0 500 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M217.639 46.5374C225.719 40.7275 230.98 31.2448 230.98 20.5331C230.98 2.85593 216.65 -11.4742 198.973 -11.4742C181.296 -11.4742 166.966 2.85593 166.966 20.5331C166.966 31.2448 172.228 40.7275 180.308 46.5374C177.893 49.3052 176.084 52.6149 175.087 56.26C171.55 53.9097 167.304 52.5404 162.738 52.5404C151.631 52.5404 142.416 60.6451 140.686 71.2634C140.588 71.2623 140.491 71.2617 140.394 71.2617C139.101 71.2617 137.831 71.3608 136.592 71.5518C132.858 65.5751 126.219 61.5991 118.653 61.5991C109.687 61.5991 102.026 67.181 98.9532 75.0591C95.8869 72.6788 92.0356 71.2617 87.8533 71.2617C83.2689 71.2617 79.0821 72.9644 75.891 75.772C71.7745 71.8545 66.2047 69.45 60.0734 69.45C53.7218 69.45 47.9729 72.0303 43.8177 76.2C40.0702 68.6221 32.261 63.4108 23.2347 63.4108C10.5605 63.4108 0.286072 73.6853 0.286072 86.3595C0.286072 99.0337 10.5605 109.308 23.2347 109.308C29.5863 109.308 35.3352 106.728 39.4904 102.558C43.2379 110.136 51.047 115.347 60.0734 115.347C67.9892 115.347 74.969 111.339 79.0942 105.242C81.6902 106.679 84.6763 107.496 87.8533 107.496C94.8002 107.496 100.834 103.587 103.874 97.8474C107.289 101.188 111.833 103.38 116.879 103.8C120.14 113.664 129.436 120.782 140.394 120.782C153.706 120.782 164.565 110.276 165.131 97.1033C173.792 96.1814 180.975 90.3107 183.798 82.3732C187.989 85.6288 193.255 87.5673 198.973 87.5673C212.648 87.5673 223.734 76.4817 223.734 62.8069C223.734 56.5793 221.434 50.8886 217.639 46.5374Z"
              fill="#F3FDFF"
            />
          </svg>
        </motion.div>
      )}
      {checked && (
        <>
          <div className="absolute top-[55px] left-10">
            <svg
              width="7"
              height="7"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.37013 3.68995C3.43367 4.62373 2.28437 5.12445 0.936432 5.17859C2.28437 5.24625 3.41948 5.73344 4.37013 6.66722C5.30659 7.601 5.77482 8.71071 5.77482 10.0099C5.77482 8.71071 6.24305 7.601 7.17952 6.66722C8.11598 5.73344 9.25109 5.23272 10.599 5.17859C9.25109 5.12445 8.11598 4.62373 7.17952 3.68995C6.24305 2.75617 5.77482 1.64646 5.77482 0.34729C5.77482 1.64646 5.30659 2.75617 4.37013 3.68995Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="absolute left-[78px] top-[28px]">
            <svg
              width="13"
              height="13"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.37013 3.68995C3.43367 4.62373 2.28437 5.12445 0.936432 5.17859C2.28437 5.24625 3.41948 5.73344 4.37013 6.66722C5.30659 7.601 5.77482 8.71071 5.77482 10.0099C5.77482 8.71071 6.24305 7.601 7.17952 6.66722C8.11598 5.73344 9.25109 5.23272 10.599 5.17859C9.25109 5.12445 8.11598 4.62373 7.17952 3.68995C6.24305 2.75617 5.77482 1.64646 5.77482 0.34729C5.77482 1.64646 5.30659 2.75617 4.37013 3.68995Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="absolute left-[125px] top-[50px]">
            <svg
              width="5"
              height="5"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.37013 3.68995C3.43367 4.62373 2.28437 5.12445 0.936432 5.17859C2.28437 5.24625 3.41948 5.73344 4.37013 6.66722C5.30659 7.601 5.77482 8.71071 5.77482 10.0099C5.77482 8.71071 6.24305 7.601 7.17952 6.66722C8.11598 5.73344 9.25109 5.23272 10.599 5.17859C9.25109 5.12445 8.11598 4.62373 7.17952 3.68995C6.24305 2.75617 5.77482 1.64646 5.77482 0.34729C5.77482 1.64646 5.30659 2.75617 4.37013 3.68995Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="absolute left-[63px] bottom-[38px]">
            <svg
              width="4"
              height="4"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.37013 3.68995C3.43367 4.62373 2.28437 5.12445 0.936432 5.17859C2.28437 5.24625 3.41948 5.73344 4.37013 6.66722C5.30659 7.601 5.77482 8.71071 5.77482 10.0099C5.77482 8.71071 6.24305 7.601 7.17952 6.66722C8.11598 5.73344 9.25109 5.23272 10.599 5.17859C9.25109 5.12445 8.11598 4.62373 7.17952 3.68995C6.24305 2.75617 5.77482 1.64646 5.77482 0.34729C5.77482 1.64646 5.30659 2.75617 4.37013 3.68995Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="absolute left-[83px] bottom-[53px]">
            <svg
              width="4"
              height="4"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.37013 3.68995C3.43367 4.62373 2.28437 5.12445 0.936432 5.17859C2.28437 5.24625 3.41948 5.73344 4.37013 6.66722C5.30659 7.601 5.77482 8.71071 5.77482 10.0099C5.77482 8.71071 6.24305 7.601 7.17952 6.66722C8.11598 5.73344 9.25109 5.23272 10.599 5.17859C9.25109 5.12445 8.11598 4.62373 7.17952 3.68995C6.24305 2.75617 5.77482 1.64646 5.77482 0.34729C5.77482 1.64646 5.30659 2.75617 4.37013 3.68995Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="absolute left-[194px] bottom-[45px]">
            <svg
              width="13"
              height="13"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.37013 3.68995C3.43367 4.62373 2.28437 5.12445 0.936432 5.17859C2.28437 5.24625 3.41948 5.73344 4.37013 6.66722C5.30659 7.601 5.77482 8.71071 5.77482 10.0099C5.77482 8.71071 6.24305 7.601 7.17952 6.66722C8.11598 5.73344 9.25109 5.23272 10.599 5.17859C9.25109 5.12445 8.11598 4.62373 7.17952 3.68995C6.24305 2.75617 5.77482 1.64646 5.77482 0.34729C5.77482 1.64646 5.30659 2.75617 4.37013 3.68995Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="absolute left-[144px] bottom-[48px]">
            <svg
              width="4"
              height="4"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.37013 3.68995C3.43367 4.62373 2.28437 5.12445 0.936432 5.17859C2.28437 5.24625 3.41948 5.73344 4.37013 6.66722C5.30659 7.601 5.77482 8.71071 5.77482 10.0099C5.77482 8.71071 6.24305 7.601 7.17952 6.66722C8.11598 5.73344 9.25109 5.23272 10.599 5.17859C9.25109 5.12445 8.11598 4.62373 7.17952 3.68995C6.24305 2.75617 5.77482 1.64646 5.77482 0.34729C5.77482 1.64646 5.30659 2.75617 4.37013 3.68995Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="absolute left-[180px] bottom-[78px]">
            <svg
              width="3"
              height="3"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.37013 3.68995C3.43367 4.62373 2.28437 5.12445 0.936432 5.17859C2.28437 5.24625 3.41948 5.73344 4.37013 6.66722C5.30659 7.601 5.77482 8.71071 5.77482 10.0099C5.77482 8.71071 6.24305 7.601 7.17952 6.66722C8.11598 5.73344 9.25109 5.23272 10.599 5.17859C9.25109 5.12445 8.11598 4.62373 7.17952 3.68995C6.24305 2.75617 5.77482 1.64646 5.77482 0.34729C5.77482 1.64646 5.30659 2.75617 4.37013 3.68995Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="absolute left-[224px] top-[63px]">
            <svg
              width="7"
              height="7"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.37013 3.68995C3.43367 4.62373 2.28437 5.12445 0.936432 5.17859C2.28437 5.24625 3.41948 5.73344 4.37013 6.66722C5.30659 7.601 5.77482 8.71071 5.77482 10.0099C5.77482 8.71071 6.24305 7.601 7.17952 6.66722C8.11598 5.73344 9.25109 5.23272 10.599 5.17859C9.25109 5.12445 8.11598 4.62373 7.17952 3.68995C6.24305 2.75617 5.77482 1.64646 5.77482 0.34729C5.77482 1.64646 5.30659 2.75617 4.37013 3.68995Z"
                fill="white"
              />
            </svg>
          </div>
        </>
      )}
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
