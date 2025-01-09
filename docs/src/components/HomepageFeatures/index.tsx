import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { FeatureItem } from "@site/src/lib/types/home";
import NodeSvg from "@site/static/img/node.svg";
import ClickSvg from "@site/static/img/click-icon.svg";
import FocusSvg from "@site/static/img/focus.svg";

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: ClickSvg,
    description: (
      <>
        Nodelpers is designed to be intuitive and easy to integrate into your
        projects. Import and start using the helpers right away!
      </>
    ),
  },
  {
    title: "Focus on Productivity",
    Svg: FocusSvg,
    description: (
      <>
        With Nodelpers, you can focus on building features instead of
        re-implementing common utilities. We've got your back with reusable
        helper functions.
      </>
    ),
  },
  {
    title: "Optimized for Node.js",
    Svg: NodeSvg,
    description: (
      <>
        Built with Node.js in mind, Nodelpers ensures compatibility and
        performance for your server-side applications.
      </>
    ),
  },
];

const Feature = ({ title, Svg, description }: FeatureItem) => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HomepageFeatures = (): ReactNode => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
