// import React, { Component } from "react";
// import { CreatableSelect, OptionType, ValueType } from "@atlaskit/select";
// import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
// // import { categoryState } from "../recoil/calendarAtom";

// // import useGetCategoryTitie from "../hooks/calendar/useGetCategory";

// // const { data: categoryTitie, refetch: categoryRefetch } =
// // useGetCategoryTitie();

// let data = [
//   {
//     label: "snow",
//     value: "snow",
//   },
//   {
//     label: "hello",
//     value: "hello",
//   },
//   {
//     label: "루피",
//     value: "루피",
//   },
//   {
//     label: "잔망루피",
//     value: "잔망루피",
//   },
// ];

// const defaultOptions = data;

// const createOption = (label: string) => ({
//   label,
//   value: label.toLowerCase().replace(/\W/g, ""),
// });

// interface State {
//   isLoading: boolean;
//   options: Array<{ label: string; value: string }>;
//   value?: ValueType<OptionType>;
// }

// // const [newCategory, setNewCategory] = useRecoilState(categoryState);
// export default class CreatableAdvanced extends Component<{}, State> {
//   state: State = {
//     isLoading: false,
//     options: defaultOptions,
//     value: undefined,
//   };

//   handleChange = (newValue: any, actionMeta: any) => {
//     // console.group("Value Changed");
//     console.log(newValue);
//     // setNewCategory(newValue.target);
//     console.log(`action: ${actionMeta.action}`);
//     // console.groupEnd();
//     this.setState({ value: newValue });
//   };

//   handleCreate = (inputValue: any) => {
//     // We do not assume how users would like to add newly created options to the existing options list.
//     // Instead we pass users through the new value in the onCreate prop
//     this.setState({ isLoading: true });
//     // console.group("Option created");
//     // console.log("Wait a moment...");
//     const { options } = this.state;
//     const newOption = createOption(inputValue);
//     // console.log(newOption);
//     // console.groupEnd();
//     this.setState({
//       isLoading: false,
//       options: [...options, newOption],
//       value: newOption,
//     });
//   };

//   render() {
//     const { isLoading, options, value } = this.state;
//     console.log(value);
//     return (
//       <>
//         <label htmlFor="createable-select-example"></label>
//         <CreatableSelect
//           className="z-50 w-4/6 text-sm text-right text-gray-700 outline-none bg-none hover:bg-noen h-fit font-SCDream3 lg:text-sm rounded-xl"
//           inputId="createable-select-example"
//           isClearable
//           isDisabled={isLoading}
//           isLoading={isLoading}
//           onChange={this.handleChange}
//           onCreateOption={this.handleCreate}
//           options={options}
//           value={value}
//           theme={theme => ({
//             ...theme,
//             borderRadius: 0,
//             colors: {
//               ...theme.colors,
//               primary25: "dangerLight",
//               primary: "black",
//             },
//           })}
//         />
//       </>
//     );
//   }
// }
