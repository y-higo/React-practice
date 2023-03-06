import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColofulMessage";

const App = () => {
  console.log("最初");
  //stateの活用（状態を扱うときに使用）※最初に書く
  //第一引数stateの変数名(初期値)、第二引数にstateを更新関数名
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  //ボタンクリック時を関数化
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    //on/off の切り替えはuseState(true)の逆を使いたいので「！」を使用
    setFaceShowFlag(!faceShowFlag);
  };

  //useEffect(変化した値の時だけ処理を使いたい時に使用)
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <ColorfulMessage color="blue">こんちは</ColorfulMessage>
      <ColorfulMessage color="red">どうもこんばんは</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^ ^)</p>}
    </>
  );
};

export default App;
