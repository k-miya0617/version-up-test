import type { NextPage } from "next";
import { useState } from "react";
import Button from "../../components/common/button";

interface PageState {
  sidebars: {
    left: {
      isView: boolean;
    };
    right: {
      isView: boolean;
    };
  };
}

const ContainerQueryTestPage: NextPage = () => {
  // ページの状態を格納
  const [pageState, setPageState] = useState<PageState>({
    sidebars: {
      left: { isView: true },
      right: { isView: true },
    },
  });

  return (
    <div className="w-screen h-screen bg-stone-100">
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-12 bg-amber-500 text-white flex flex-row items-center space-x-4 p-4">
          <h2>コンテナクエリの実装のテスト</h2>
          <Button
            onClick={() =>
              setPageState((prevState) => ({
                ...prevState,
                sidebars: {
                  ...prevState.sidebars,
                  left: {
                    ...prevState.sidebars.left,
                    isView: !prevState.sidebars.left.isView,
                  },
                },
              }))
            }
          >
            左サイドバーToggle
          </Button>
          <Button
            onClick={() =>
              setPageState((prevState) => ({
                ...prevState,
                sidebars: {
                  ...prevState.sidebars,
                  right: {
                    ...prevState.sidebars.right,
                    isView: !prevState.sidebars.right.isView,
                  },
                },
              }))
            }
          >
            右サイドバーToggle
          </Button>
        </div>
        <div className="flex-1 w-full h-0 flex flex-row items-cetner">
          <LeftSideBar isView={pageState.sidebars.left.isView} />
          <div className="flex-1 w-0 h-full p-4 shadow-inner shadow-stone-300">
            <div className="flex flex-col gap-4 p-4">
              <div className="@container w-full">
                <div className="border bg-blue-50 border-blue-300 @[600px]:bg-red-50 @[600px]:border-red-300 p-8">
                  Sample
                </div>
              </div>
              <div className="@container w-full">
                <div className="border bg-blue-50 border-blue-300 @[600px]:bg-red-50 @[600px]:border-red-300 p-8">
                  Sample
                </div>
              </div>
              <div className="@container w-full">
                <div className="border bg-blue-50 border-blue-300 @[600px]:bg-red-50 @[600px]:border-red-300 p-8">
                  Sample
                </div>
              </div>
            </div>
          </div>
          <RightSideBar isView={pageState.sidebars.right.isView} />
        </div>
      </div>
    </div>
  );
};

export default ContainerQueryTestPage;

// サイドバー共通インタフェース
interface SideBarProps {
  isView: boolean;
  setView?: ((isView: boolean) => void) | undefined;
}

interface LeftSideBarProps extends SideBarProps {}
const LeftSideBar = (props: LeftSideBarProps) => {
  if (!props.isView) return <></>;

  return (
    <div className="w-96 h-full bg-stone-50 text-stone-900 p-4 overflow-y-scroll space-y-4 scrollbar-thin scrollbar-thumb-stone-500">
      <h3 className="text-xl text-amber-500">Hoge list</h3>
      <ul>
        {[...Array(100)].map((_, i) => (
          <li key={`leftSideBar_list_${i}`}>LEFT_SIDE_BAR CONTENT #{i}</li>
        ))}
      </ul>
    </div>
  );
};

interface RightSideBarProps extends SideBarProps {}
const RightSideBar = (props: RightSideBarProps) => {
  if (!props.isView) return <></>;

  return (
    <div className="w-96 h-full bg-stone-50 text-stone-900 p-4 overflow-y-scroll space-y-4 scrollbar-thin scrollbar-thumb-stone-500">
      <h3 className="text-xl text-amber-500">Hoge list</h3>
      <ul>
        {[...Array(100)].map((_, i) => (
          <li key={`rightSideBar_list_${i}`}>RIGHT_SIDE_BAR CONTENT #{i}</li>
        ))}
      </ul>
    </div>
  );
};
