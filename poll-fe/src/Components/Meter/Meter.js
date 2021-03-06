import React, { PureComponent, useEffect, useState } from 'react';
import s from './Meter.scss';

class Meter extends PureComponent {

  getFinalStrokeDashOffset = (cs) => {
    /*
      (680-340)=340
      (900-300)=600
      (340/600)=0.5666
      if(CS < 300) CS = 300;
      else if(CS > 900) = CS = 900;
      now then y = 0.5666 * (CS - 300);
      340 + y will be the final value;
    */
    const strokeRange = 340,
      lowerCS = 300,
      upperCS = 900,
      csRange = upperCS - lowerCS,
      unitStroke = strokeRange / csRange;

    if (cs < lowerCS) cs = lowerCS;
    else if (cs > upperCS) cs = upperCS;

    return (unitStroke * (cs - lowerCS)) + strokeRange;
  }
  /* 
    red = #FF4B03
    amber = #FCAF1B
    yellow = #FFDF0B
    green = #7AC90D
  */
  getColor = (cs) => {

    const lowerCS = 300,
      upperCS = 900,
      csRange = upperCS - lowerCS;

    if (cs < lowerCS) cs = lowerCS;
    else if (cs > upperCS) cs = upperCS;

    if (cs <= 599) return {
      colors1: ["white;", "lightred"],
      colors2: ["white;", "red"],
      keyTimes: ["0;", "1"],
      // categoryText: false,
    };
    else if (cs <= 699) return {
      colors1: ["white;", "lightred;", "lightyellow"],
      colors2: ["white;", "red;", "yellow"],
      keyTimes: [`0;`, `${(599 - lowerCS) / csRange};`, `1`],
      // categoryText: false,
    };
    else if (cs <= 779) return {
      colors1: ["white;", "lightred;", "lightyellow;", "#FFAD00"],
      colors2: ["white;", "red;", "yellow;", "#FFAD00"],
      keyTimes: [`0;`, `${(599 - lowerCS) / csRange};`, `${(699 - lowerCS) / csRange};`, `1`],
      // categoryText: false,
    };
    else if (cs <= 900) return {
      colors1: ["white;", "lightred;", "lightyellow;", "#FFAD00;", "11BF80"],
      colors2: ["white;", "red;", "yellow;", "#FFAD00;", "#006C45"],
      keyTimes: [
        `0;`,
        `${(599 - lowerCS) / csRange};`,
        `${(699 - lowerCS) / csRange};`,
        `${(779 - lowerCS) / csRange};`,
        `1`
      ],
      // categoryText: false,
    }
  }

  render() {

    const { credit_score = 900 } = this.props;

    const finalDashoffset = this.getFinalStrokeDashOffset(credit_score);

    const { colors1, colors2, keyTimes, categoryText = "Excellent" } = this.getColor(credit_score);

    const animDuration = 10;

    return (
      <svg viewBox="0 0 150 150" >
        <defs>
          <linearGradient x1="91.5640952%" y1="34.1513878%" x2="2.5693965%" y2="43.5474857%" id="linearGradient">
            <stop
              id="color1"
              stopColor="#11BF80"
              offset="0%"
            />
            <stop
              id="color2"
              stopColor="#006C45"
              offset="100%"
            />
          </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
          <g id="white" transform="translate(-112.000000, -234.000000)" stroke="#F5F8FA" strokeWidth="6">
            <path id="whiteOval" d="M237.911688,359.911688 C250.941125,346.882251 259,328.882251 259,309 C259,269.235498 226.764502,237 187,237 C147.235498,237 115,269.235498 115,309 C115,328.882251 123.058875,346.882251 136.088312,359.911688" />
          </g>
          <g id="colored" transform="translate(-112.000000, -234.000000)" stroke="url(#linearGradient)" strokeWidth="6">
            <path id="coloredOval" strokeDasharray="340" strokeDashoffset="340" d="M237.911688,359.911688 C250.941125,346.882251 259,328.882251 259,309 C259,269.235498 226.764502,237 187,237 C147.235498,237 115,269.235498 115,309 C115,328.882251 123.058875,346.882251 136.088312,359.911688" />
          </g>
        </g>

        <text x="12%" y="98%" >300</text>
        <text x="70%" y="98%" >900</text>

        <Counter credit_score={credit_score} animDuration={animDuration} categoryText={categoryText} />

        <animate
          xlinkHref="#coloredOval"
          attributeName="stroke-dashoffset"
          from="340"
          to={finalDashoffset}
          dur={animDuration}
          begin="0s;click"
          // values="340; 510; 600"
          // keyTimes="0; 0.5; 1"
          fill="freeze"
          id="stroke-anim"
        // calcMode="linear"
        />

        <animate
          xlinkHref="#color1"
          attributeType="XML"
          attributeName="stop-color"
          dur={animDuration}
          begin="0s"
          // values="lightred; amber; lightyellow; #11BF80"
          // keyTimes="0; 0.33; 0.66; 1"
          values={colors1.join(' ')}
          keyTimes={keyTimes.join(' ')}
          // from="red"
          // to="yellow"
          fill="freeze"
        // calcMode="linear"
        />

        <animate
          xlinkHref="#color2"
          attributeType="XML"
          attributeName="stop-color"
          dur={animDuration}
          begin="0s"
          // values="red; amber; yellow; #006C45"
          // keyTimes="0; 0.60; 0.66; 1"
          values={colors2.join(' ')}
          keyTimes={keyTimes.join(' ')}
          // from="red"
          // to="yellow"
          fill="freeze"
        // calcMode="linear"
        />

        <animate
          xlinkHref="#scoreContent"
          attributeType="XML"
          attributeName="fill"
          dur={animDuration}
          begin="0s"
          // values="red; amber; yellow; #006C45"
          // keyTimes="0; 0.60; 0.66; 1"
          values={colors1.join(' ')}
          keyTimes={keyTimes.join(' ')}
          // from="red"
          // to="yellow"
          fill="freeze"
        // calcMode="linear"
        />

      </svg>
    );
  }
}

function Counter(props) {
  const { credit_score, animDuration, categoryText } = props;

  // const interval = Math.floor((animDuration/credit_score)*1000);
  const interval = Math.floor((animDuration / credit_score) * 1000);
  console.log(interval);
  const [cs, setCs] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (cs < credit_score) setCs(cs + 1);
    }, interval - 8);

    return () => {
      clearTimeout(timeout);
    };
  }, [cs]);

  return (
    <>
      <text id="scoreContent" x="35%" y="40%" >
        <tspan style={{ fontSize: '30px', fontWeight: '900' }} >{cs}</tspan>
        <tspan x="30%" y="55%" style={{ fontSize: '14px' }} >{categoryText}</tspan>
      </text>
    </>
  );
}

export default Meter;
