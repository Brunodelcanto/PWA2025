// import type { Dispatch, SetStateAction } from "react";
// import "./Tab.css";
// import type { setListKeys } from "../App";

// interface TabProps {
//     label: setListKeys;
//     handleClick: Dispatch<SetStateAction<setListKeys>>;
//     selectedTab: setListKeys;
// }

// export const Tab = (props: TabProps) => {
//     const { label, handleClick, selectedTab } = props;
//     const isTabSelected = selectedTab === label;
//     return (
//         <div className={`tab ${isTabSelected ? "selected" : ""}`}
//             onClick={() => handleClick(label)}
//             >
//             {label}
//         </div>
//     );
// };