import React from 'react';
import { Container, GaugeBody, GaugeFill, GaugeCover } from './styles';

interface GaugeProps {
    value: number;
    result: string;
}

const Gauge: React.FC<GaugeProps> = ({value, result}) => {

    const examResult = result === 'normal' ? 'Normal' : 'Catarata';

    return(
        <Container>
            <GaugeBody>
                <GaugeFill value={value} />
                <GaugeCover>
                    {Math.round(value * 100) }% <br/> 
                    {examResult}
                </GaugeCover>
            </GaugeBody>
        </Container>
    )
}

export default Gauge;