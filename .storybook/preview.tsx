import { Preview } from "@storybook/react";
import React from "react";
import '../src/index.css';

const preview: Preview = {
  parameters: {
    layout: "fullscreen", // 모바일 테스트를 위해 전체 화면으로 설정
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "375px", // 모바일 기본 해상도 (iPhone X 등)
          height: "812px", // 모바일 기본 해상도
          margin: "0 auto", // 중앙 정렬
          border: "1px solid #ddd", // 모바일 뷰 시각적 구분용
          overflow: "hidden", // 모바일 스크린과 동일한 효과
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
