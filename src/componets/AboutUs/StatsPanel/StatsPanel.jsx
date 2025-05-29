import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./StatsPanel.css";

function CounterPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="countup-container">
      <div ref={ref}>
        <h1>
          {" "}
          {inView ? <CountUp start={0} end={25} duration={2} delay={0} /> : 0}+
        </h1>
        <h3>HAMKORLAR</h3>
      </div>

      <div ref={ref}>
        <h1>
          {" "}
          {inView ? <CountUp start={0} end={50} duration={2} delay={0} /> : 0}+
        </h1>
        <h3>MEHMONLAR</h3>
      </div>

      <div ref={ref}>
        <h1>
          {" "}
          {inView ? <CountUp start={0} end={5000} duration={2} delay={0} /> : 0}
          +
        </h1>
        <h3>BAXTLI ZIYORATCHILAR</h3>
      </div>

      <div ref={ref}>
        <h1>
          {" "}
          {inView ? (
            <CountUp start={0} end={10000} duration={2} delay={0} />
          ) : (
            0
          )}
          +
        </h1>
        <h3>OBUNALAR</h3>
      </div>
    </div>
  );
}

export default CounterPage;
