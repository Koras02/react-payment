import React from 'react';
import * as S from './HomeStyle';
import girl from '../Image/minion.png';
import chopa from '../Image/chopa.png';
import { useHistory, withRouter } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    const handleChopa = () => {
        history.push('/payment');
    };
    const handleMinion = () => {
        history.push('/payment');
    };

    return (
        <S.Wrapper>
            <div>
                <h2> Voice Story AI</h2>
                <h4>음성을 보여주는 음성변환 웹서비스 입니다.</h4>
                <h4>아래 캐릭터 버튼을 눌러 테스트 또는 결제를 진행해주세요</h4>
            </div>
            <div></div>
            <S.ButtonContainer>
                <S.Button onClick={handleMinion}>
                    <img src={girl} width="60px" height="60px" alt="girl" />
                    미니언즈
                </S.Button>
                <S.Button onClick={handleChopa}>
                    <img src={chopa} width="60px" height="60px" alt="girl" />
                    쵸파
                </S.Button>
            </S.ButtonContainer>
        </S.Wrapper>
    );
};

export default withRouter(Home);
