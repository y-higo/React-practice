import React from "react";

//共通のコンポーネントを作成
export const ColorfulMessage = (props) => {
  //分割代入
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: `40px`
  };
  //props.children=タグの中身を表示される
  return <h1 style={contentStyle}>{children}</h1>;
};

//exportの技法1※ミスに気づかない可能性あり（文末に記載）
// export default ColorfulMessage→import ColorfulMessage from

//exportの技法2※ミスに気づける
//export const ColorfulMessag→import { ColorfulMessage } 〜（export先）
