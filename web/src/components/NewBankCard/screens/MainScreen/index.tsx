import React, { useState, useRef, useCallback } from 'react';
import CForm from './components/form';
import Card from './components/card';
import Hover from 'react-3d-hover';

interface IinitialState {
    cardNumber: string,
    cardHolder: string,
    cardMonth: string,
    cardYear: string,
    cardCvv: string
}

const initialState: IinitialState = {
    cardNumber: '#### #### #### ####',
    cardHolder: 'FULL NAME',
    cardMonth: '',
    cardYear: '',
    cardCvv: ''
};

const MainScreen = () => {
    const [state, setState] = useState<IinitialState>(initialState);
    const [currentFocusedElm, setCurrentFocusedElm] = useState<React.RefObject<HTMLLabelElement> | null>(null);

    const updateStateValues = useCallback(
        (keyName: keyof typeof initialState, value: string) => {
            setState({
                ...state,
                [keyName]: value || initialState[keyName]
            });
        },
        [state]
    );

    // References for the Form Inputs used to focus corresponding inputs.
    let formFieldsRefObj = {
        cardNumber: useRef<HTMLInputElement>(null),
        cardHolder: useRef<HTMLInputElement>(null),
        cardDate: useRef<HTMLSelectElement>(null),
        cardCvv: useRef<HTMLInputElement>(null),
    };

    // This are the references for the Card DIV elements.
    let cardElementsRef = {
        cardNumber: useRef<HTMLLabelElement>(null),
        cardHolder: useRef<HTMLLabelElement>(null),
        cardDate: useRef<HTMLLabelElement>(null),
    };

    let onCardFormInputFocus = (_event: any, inputName: keyof typeof cardElementsRef) => {
        const refByName = cardElementsRef[inputName];
        setCurrentFocusedElm(refByName);
    };

    let onCardInputBlur = useCallback(() => {
        setCurrentFocusedElm(null);
    }, []);

    return (
        <div className="wrapper">
            <CForm
                cardMonth={state.cardMonth}
                cardYear={state.cardYear}
                onUpdateState={updateStateValues}
                cardNumberRef={formFieldsRefObj.cardNumber}
                cardHolderRef={formFieldsRefObj.cardHolder}
                cardDateRef={formFieldsRefObj.cardDate}
                cardCvv={formFieldsRefObj.cardCvv}
                onCardInputFocus={onCardFormInputFocus}
                onCardInputBlur={onCardInputBlur}
            >
                <Hover scale={1.05} speed={1500} perspective={900}>
                    <Card
                        cardNumber={state.cardNumber}
                        cardHolder={state.cardHolder}
                        cardMonth={state.cardMonth}
                        cardYear={state.cardYear}
                        cardCvv={state.cardCvv}
                        currentFocusedElm={currentFocusedElm}
                        cardNumberRef={cardElementsRef.cardNumber}
                        cardHolderRef={cardElementsRef.cardHolder}
                        cardDateRef={cardElementsRef.cardDate}
                    ></Card>
                </Hover>
            </CForm>
        </div>
    );
};

export default MainScreen;
