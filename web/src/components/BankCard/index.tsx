import { useStyles } from './style';
import { Group, Text } from '@mantine/core';
import Card from 'react-animated-3d-card';
import './style.scss'

import defaultCardBackground from '../../assets/svg/card-background.svg';
import defaultChipIcon from '../../assets/icons/chip.png';
import defaultBrandIcon from '../../assets/icons/bank-icon.png';

interface BankCardProps {
    image?: string;
    chipIcon?: string;
    brandIcon?: string;
    costumerName?: string;
    expireDate?: string;
}

export function BankCard({ image, chipIcon, brandIcon, costumerName, expireDate }: BankCardProps) {
    image = !image ? `url(${defaultCardBackground})` : `url(${image})`
    chipIcon = !chipIcon ? defaultChipIcon : chipIcon
    brandIcon = !brandIcon ? defaultBrandIcon : brandIcon
    costumerName = !costumerName ? `FULL NAME` : costumerName
    expireDate = !expireDate ? `00/00` : expireDate

    return (
        <Card
            style={{
                backgroundImage: image,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '400px',
                height: '250px',
                cursor: 'pointer'
            }}
        >
            <div className='card-item__wrapper'>
                <div className='card-item__top'>
                    <img
                        src={chipIcon}
                        className='card-item__chip'
                        alt='credit card chip' ></img>
                    <div className='card-item__type'>
                        <img style={{ position: 'absolute', right: '25px', top: '25px', height: '50px' }}
                            src={brandIcon}
                            className='card-item__typeImg'
                            alt='credit card chip' ></img>
                    </div>
                </div>
                
                <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                    <div style={{ fontSize: '30px', fontFamily: 'Fira Code', color: 'white' }}>
                        <Group ml="xl" spacing="xs">
                            <Text> 1234 </Text>
                            <Text> 1434 </Text>
                            <Text> 1234 </Text>
                            <Text> 1234 </Text>
                        </Group>
                    </div>
                </div>
                <div>
                    <label style={{ color: 'white', position: 'absolute', bottom: '60px', left: '25px', opacity: 0.5 }}>
                        Card holder
                    </label>
                    <label style={{ color: 'white', position: 'absolute', bottom: '60px', right: '25px', opacity: 0.5 }}>
                        Expires
                    </label>
                </div>

                <div>
                    <label style={{ position: 'absolute', bottom: '25px', left: '25px' }}>
                        {costumerName}
                    </label>
                    <label style={{ position: 'absolute', bottom: '25px', right: '25px' }}>
                        {expireDate}
                    </label>
                </div>
            </div>
        </Card>
    )
}