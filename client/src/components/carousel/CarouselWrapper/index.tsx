import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import Button from "../../common/Button";
import Container from "../../common/Container";
import FlexRow from "../../common/FlexRow";
import styles from "./style.module.css";

type CarouselWrapperProps = {
    children: React.ReactNode;
}

const CarouselWrapper:React.FC<CarouselWrapperProps> = ({ children }) => {

    const [selectedCardIdx, setSelectedCardIdx] = useState(0);
    const [touchStart, setTouchStart] = useState<React.Touch|null>(null);
    const itemLength = Array.isArray(children) ? children.length : 1;
    
    const onClickDot = useCallback((cardIdx: number) => {
        setSelectedCardIdx(cardIdx);
    }, [])

    const onTouchStart = useCallback((evt: React.TouchEvent<HTMLDivElement>) => {
        evt.stopPropagation()
        setTouchStart(evt.changedTouches[0])
    }, [])

    const onTouchEnd = useCallback((evt: React.TouchEvent<HTMLDivElement>) => {
        evt.preventDefault()
        evt.stopPropagation()
        let touchEnd = evt.changedTouches[0]
        if (touchStart!.screenX - touchEnd.screenX > -100 && touchStart!.screenX - touchEnd.screenX < 100) {
            return;
        }
        if (touchStart!.screenX > touchEnd.screenX) { // go to right side
            setSelectedCardIdx((prev) => prev < itemLength - 1 ? prev + 1 : itemLength - 1)
        } else { // go to left side
            setSelectedCardIdx((prev) => prev > 0 ? prev - 1 : 0)
        }
    }, [touchStart])

    useEffect(() => {
        console.log(selectedCardIdx);
        
    }, [selectedCardIdx])

    return (
        <Container style={styles["carousel--container__outer-wrapper"]}>
            <div 
                className={styles["carousel--container__inner-wrapper"]}
                style={{
                    width: `calc(${100 * itemLength}%)`,
                    transform: `translateX(calc(-${selectedCardIdx * (100 / itemLength)}%))`
                }}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                {
                    children
                }
            </div>
            <FlexRow style={styles["carousel--navigation-dot__wrapper"]}>
                {
                    Array(itemLength).fill(0).map((_, idx) => (
                        <Button style={`${styles["carousel--navigation-dot"]} ${idx === selectedCardIdx ? styles["selected"] : ""}`} onClick={() => onClickDot(idx)} text=""/>
                    ))
                }
            </FlexRow>
        </Container>
    )
};

export default CarouselWrapper;