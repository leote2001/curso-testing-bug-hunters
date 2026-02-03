import Card1 from "./HU-3Y5-Cards/Card1";
import Card2 from "./HU-3Y5-Cards/Card2";
import Card3 from "./HU-3Y5-Cards/Card3";
import Card4 from "./HU-3Y5-Cards/Card4";
import Card5 from "./HU-3Y5-Cards/Card5";
import Card6 from "./HU-3Y5-Cards/Card6";
import Card7 from "./HU-3Y5-Cards/Card7";
import Card8 from "./HU-3Y5-Cards/Card8";
interface AllCardsProps {
    currentCard: number;
    }
export default function AllCards({currentCard}: AllCardsProps) {
    return (
        <>
        {currentCard === 1 &&
        <Card1 />
        }
        {currentCard === 2 &&
        <Card2 />
        }
        {currentCard === 3 &&
        <Card3 />
        }
        {currentCard === 4 &&
        <Card4 />
        }
        {currentCard === 5 &&
        <Card5 />
        }
        {currentCard === 6 &&
        <Card6 />
        }
        {currentCard === 7 &&
        <Card7 />
        }
        {currentCard === 8 &&
        <Card8 />
        }
        </>
    );
}