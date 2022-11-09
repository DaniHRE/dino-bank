import Hover from 'react-3d-hover';
import { useState } from 'react';
import './styles.scss';

interface BankCardProps {
    image?: string;
    chipIcon?: string;
    brandIcon?: string;
    costumerName?: string;
    expireDate?: string;
}

const defaultChipIcon = '../../../public/icons/chip.png';
const defaultBrandIcon = '../../public/icons/bank-icon.png';

export function BankCard({ image, chipIcon, brandIcon, costumerName, expireDate }: BankCardProps) {
    chipIcon = !chipIcon ? defaultChipIcon : chipIcon
    brandIcon = !brandIcon ? defaultBrandIcon : brandIcon
    costumerName = !costumerName ? `FULL NAME` : costumerName
    expireDate = !expireDate ? `00/00` : expireDate
    const [isCardFlipped, setIsCardFliped] = useState(false);

    const cardBackgroundName = () => {
        let random = Math.floor(Math.random() * 20 + 1);
        return `${random}.jpeg`;
    };

    const BACKGROUND_IMG = cardBackgroundName();

    return (
        <Hover scale={1.05} speed={1500} perspective={900} >
            <div className={'card-item ' + (isCardFlipped ? '-active' : '')} onClick={() => {setIsCardFliped(!isCardFlipped)}}>
                <div className="card-item__side -front">
                    <div
                        className={`card-item__focus`}
                    />
                    <div className="card-item__cover">
                        <img
                            alt=""
                            src={`../../../public/card-background/${BACKGROUND_IMG}`}
                            className="card-item__bg"
                        />
                    </div>

                    <div className="card-item__wrapper">
                        <div className="card-item__top">
                            <img
                                alt=""
                                src={`${defaultChipIcon}`}
                                className="card-item__chip"
                            />
                            <div className="card-item__type">
                                <img
                                    src={`../../../public/${defaultBrandIcon}`}
                                    className="card-item__typeImg"
                                />
                            </div>
                        </div>

                        <label className="card-item__number">
                            0000 0000 0000 0000
                        </label>
                        <div className="card-item__content">
                            <label className="card-item__info">
                                <div className="card-item__holder">Card Holder</div>
                                <div className="card-item__name">
                                    <div>FULL NAME</div>
                                </div>
                            </label>
                            <div className="card-item__date">
                                <label className="card-item__dateTitle">
                                    Expires
                                </label>
                                <label className="card-item__dateItem">
                                    <span>MM</span>
                                </label>
                                /
                                <label htmlFor="cardYear" className="card-item__dateItem">
                                    <span>YY</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-item__side -back">
                    <div className="card-item__cover">
                        <img
                            alt=""
                            src={`../../../public/card-background/${BACKGROUND_IMG}`}
                            className="card-item__bg"
                        />
                    </div>
                    <div className="card-item__band" />
                    <div className="card-item__cvv">
                        <div className="card-item__cvvTitle">CVV</div>
                        <div className="card-item__cvvBand">
                            <span>000</span>
                        </div>
                        <div className="card-item__type">
                            <img
                                alt="card-type"
                                src={`${defaultBrandIcon}`}
                                className="card-item__typeImg"
                            />
                        </div>
                    </div>
                </div>
            </div >
        </Hover>
    )
}
