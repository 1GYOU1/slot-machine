import React from 'react';
import slotBoxImg from '../img/slot_box.png';
import handleImg from '../img/handle.png';
import slotArrowImg from '../img/slot_arrow.png';
import previewBoxImg from '../img/preview_box.png';
import resultCurtainImg from '../img/result_curtain.png';
import btnClsBlackImg from '../img/btn_cls_black.png';

const Game = () => {

    return (
        <>
            {/* 시작 화면 */}
            <div className="start_zone on">
                <div className="inner">
                    <h2 className="tit">규의 슬롯머신</h2>
                    <div className="btn_area">
                        <a className="custom_btn start_btn" href="javascript:void(0);">게임 시작</a>
                        <a className="custom_btn howto_btn" href="javascript:void(0);">게임 방법</a>
                    </div>
                </div>
            </div>
            {/* //시작 화면 */}
            {/* 게임 화면 */}
            <div className="game_zone">
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
                            <a className="handle" href="javascript:void(0);">
                                <img src={handleImg} alt="슬롯 핸들"/>
                            </a>
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
                        <a className="custom_btn capture_btn" href="javascript:void(0);">저장하기</a>
                        <a className="custom_btn reset_btn" href="javascript:void(0);">다시하기</a>
                        <a className="custom_btn start_show_btn" href="javascript:void(0);">처음으로</a>
                    </div>
                </div>
            </div>
            {/* //결과 화면 */}
            <div className="howto_pop">
                <div className="bg" /*onClick={popUpCloseEvent}*/></div>
                <div className="cont">
                    <a className="close" /*href="javascript:popUpCloseEvent();"*/>
                        <img src={btnClsBlackImg} alt="닫기" />
                    </a>
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
