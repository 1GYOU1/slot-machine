import React, { useRef } from 'react';
import slotBoxImg from '../img/slot_box.png';
import handleImg from '../img/handle.png';
import slotArrowImg from '../img/slot_arrow.png';
import previewBoxImg from '../img/preview_box.png';
import resultCurtainImg from '../img/result_curtain.png';
import btnClsBlackImg from '../img/btn_cls_black.png';
    /*
        1. 시작 화면 
            - start 버튼 클릭 시 게임 화면 진입 (✔)
            - 게임 방법 
                ㄴ 게임 방법 버튼 클릭 시 게임 방법 팝업 노출 (✔)
                ㄴ 팝업 배경 클릭 시 팝업 닫기 (✔)
                ㄴ 팝업 닫기 버튼 클릭 시 팝업 닫기 (✔)

        2. 게임 화면
            - 화살표 좌우로 움직이는 기능 ()

            - stop 버튼 클릭 이벤트
                ㄴ 화살표 멈추기 ()
                ㄴ class="round_1" roundCount++ 반영 ()

            - 멈춘 위치에 따른 선택 결과 값(percent 기준) 저장 ()

            - preview 영역에 저장한 선택 값 노출 ()

        ------------------------------------------------

        3. 결과 화면

            - 커튼 애니메이션 추가 ()

            - 결과 노출 ()

            - 결과 저장 하기
                ㄴ 원하는 부분만 캡처 후 저장 ()

            - 처음부터 다시 하기
                ㄴ 버튼 클릭 이벤트 생성 ()
                ㄴ 값 reset ()

            - 처음 화면으로 돌아가기
                ㄴ 버튼 클릭 이벤트 생성 ()
                ㄴ 값 reset ()
    */
const Game = () => {

const startZoneRef = useRef<HTMLDivElement>(null);
const gameZoneRef = useRef<HTMLDivElement>(null);
const howToPopUpRef = useRef<HTMLDivElement>(null);

// 게임 시작
const gameStartBtnEvent = () => {
    if(startZoneRef.current){
        startZoneRef.current.classList.remove('on');
    }
    if(gameZoneRef.current){
        gameZoneRef.current.classList.add('on');
    }
}
// 게임 방법 팝업 열기
const howToBtnBtnEvent = () => {
    if(howToPopUpRef.current){
        howToPopUpRef.current.classList.add('on');
    }
}
// 게임 방법 팝업 닫기
const popUpCloseEvent = () => {
    if(howToPopUpRef.current){
        howToPopUpRef.current.classList.remove('on');
    }
}

    return (
        <>
            {/* 시작 화면 */}
            <div ref={startZoneRef} className="start_zone on">
                <div className="inner">
                    <h2 className="tit">규의 슬롯머신</h2>
                    <div className="btn_area">
                        <button className="custom_btn start_btn" onClick={gameStartBtnEvent}>게임 시작</button>
                        <button className="custom_btn howto_btn" onClick={howToBtnBtnEvent}>게임 방법</button>
                    </div>
                </div>
            </div>
            {/* //시작 화면 */}
            {/* 게임 화면 */}
            <div ref={gameZoneRef} className="game_zone">
                <div className="inner">
                    <div className="round_1">
                        <h3 className="tit">규의 슬롯머신</h3>
                        {/* <!--배경색, 머리, 눈, 코, 입, 악세사리--> */}
                        <div className="slot_area">
                            <img className="slot_mask" src={slotBoxImg} alt="슬롯 머신"/>
                            <ul className="slot_box">
                                <li><span></span></li>
                                <li><span></span></li>
                                <li><span></span></li>
                                <li><span></span></li>
                                <li><span></span></li>
                            </ul>
                            <button className="handle">
                                <img src={handleImg} alt="슬롯 핸들"/>
                            </button>
                        </div>
                    </div>  
                    <div className="arrow_area">
                        <span>
                            <img src={slotArrowImg} alt="슬롯 화살표"/>
                        </span>
                    </div>
                    <div className="preview">
                        <img className="preview_box" src={previewBoxImg} alt="슬롯 미리보기"/>
                        <div className="result_1"></div>
                        <div className="result_2"></div>
                        <div className="result_3"></div>
                        <div className="result_4"></div>
                        <div className="result_5"></div>
                    </div>
                </div>
            </div>
            {/* //게임 화면 */}
            {/* 결과 화면 */}
            <div className="result_zone">
                <img className="curtain" src={resultCurtainImg} alt="커튼"/>
                <div className="inner">
                    <h2 className="tit">결과는 ?</h2>
                    <div id="capture" className="result_view">
                        <div className="result_1"></div>
                        <div className="result_2"></div>
                        <div className="result_3"></div>
                        <div className="result_4"></div>
                        <div className="result_5"></div>
                    </div>
                    <div className="btn_area">
                        <button className="custom_btn capture_btn">저장하기</button>
                        <button className="custom_btn reset_btn">다시하기</button>
                        <button className="custom_btn start_show_btn">처음으로</button>
                    </div>
                </div>
            </div>
            {/* //결과 화면 */}
            <div ref={howToPopUpRef} className="howto_pop">
                <div className="bg" onClick={popUpCloseEvent}></div>
                <div className="cont">
                    <button className="close" onClick={popUpCloseEvent}>
                        <img src={btnClsBlackImg} alt="닫기" />
                    </button>
                    게임 시작을 누른 후 
                    <br /> 슬롯 핸들을 클릭해서 캐릭터를 만들어주세요 !
                    <br />
                    <br /><span>※ 본 게임은 PC chrome 브라우저에 최적화 되어있습니다.</span>
                </div>
            </div>
        </>
    );
};

export default Game;
