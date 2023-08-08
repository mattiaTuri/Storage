import { animated, useSpring } from "react-spring"

function AnimatedNumber({listLength}:{listLength:number}){
    const {number} = useSpring({
        from: {number: 0},
        number:listLength,
        config:{mass:1, tension:20, friction:10}
    })
    return <animated.span>{number.to(n => n.toFixed(0))}</animated.span>
}

export default AnimatedNumber