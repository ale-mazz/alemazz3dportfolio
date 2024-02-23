"use client";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `TList`.
 */
export type TListProps = SliceComponentProps<Content.TListSlice>;

/**
 * Component for "TList" Slices.
 */
const TList = ({ slice }: TListProps): JSX.Element => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 3,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power3.inOut",
        },
      );
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden"
      ref={component}
    >
      <Bounded as="div">
        <Heading size="xl" className="mb-8" as="h2">
          {slice.primary.heading}
        </Heading>
      </Bounded>
      {slice.items.map(({ tech_color, tech_name }, index) => {
        return (
          <div
            key={index}
            className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
            aria-label={tech_name || undefined}
          >
            {Array.from({ length: 15 }, (_, index) => {
              return (
                <React.Fragment key={index}>
                  <span
                    className="tech-item text-7xl font-extrabold uppercase tracking-tight md:text-8xl"
                    style={{
                      color: index === 7 && tech_color ? tech_color : "inherit",
                    }}
                  >
                    {tech_name}
                  </span>
                  <span className="text-2xl md:text-3xl">
                    <MdCircle />
                  </span>
                </React.Fragment>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default TList;
