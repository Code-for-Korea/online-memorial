import React from "react";
import Container from "../../common/Container";
import AnimatedImage from "../AnimatedImage";
import HazyLight from "../HazyLight";
import styles from "./style.module.css";


const MemorialTable: React.FC = () => {

    const staticValues = [
        { "x": 41.122405800007854, "y": 38.44148375963569, "scale": 0.315152797628208 },
        { "x": 95.77105507921, "y": 33.36777853713371, "scale": 0.34862984863610424 },
        { "x": 77.00021154342993, "y": 19.884096095559478, "scale": 0.1365466899028398 },
        { "x": 10.673361885580457, "y": 33.890460852805546, "scale": 0.318314233450372 },
        { "x": 60.225234243447545, "y": 43.51213520160532, "scale": 0.3723397619847816 },
        { "x": 55.952547070072825, "y": 32.6124622688244, "scale": 0.12243867980294453 },
        { "x": 54.43688912793392, "y": 19.070736293898392, "scale": 0.11230658903240248 },
        { "x": 74.59014455941602, "y": 40.37821248605219, "scale": 0.37339572715529634 },
        { "x": 12.600331523169949, "y": 6.756890376703132, "scale": 0.48877415636192556 },
        { "x": 28.6476802063212, "y": 30.92163268919336, "scale": 0.11111540228828752 }
    ];

    return (
        <Container style={styles["memorial-animation--wrapper"]}>
            {
                staticValues.map((value, idx) => {
                    return <HazyLight
                        key={`random-generated-hazy-light-${idx}`}
                        styleWithPosition={styles["memorial-animation--snowflake"]}
                        top={Number(value.y.toFixed(0))}
                        left={Number(value.x.toFixed(0))}
                        scale={Number(value.scale.toFixed(2))}
                    />
                })
            }
            <AnimatedImage src={`${process.env.PUBLIC_URL}/assets/image/flower-left.svg`} styleWithAnimation={styles["memorial-animation--flower__right"]} />
            <AnimatedImage src={`${process.env.PUBLIC_URL}/assets/image/flower-left.svg`} styleWithAnimation={styles["memorial-animation--flower__left"]} />
            <HazyLight styleWithPosition={styles["memorial-animation--candle__light"]} />
            <AnimatedImage src={`${process.env.PUBLIC_URL}/assets/image/table.svg`} styleWithAnimation={styles["memorial-animation--table"]} />
        </Container>
    )
};

export default MemorialTable;
