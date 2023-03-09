
import { useState } from "react";
import TooltipSelect from "../src/index";
import ReactDOM from "react-dom";
import { Select, Tooltip } from "antd";
const Option = Select.Option;

const Demo=(props) => {
  const [title, setTitle] = useState();
  const aTitle = (title) => {
    return <a>{title}</a>;
  };
  return (
    <TooltipSelect
    isMemo={true}
      setTitle={(value) => {
        return aTitle(value);
      }}
      placeholder="66"
      value={title}
      onChange={(value) => {
        setTitle(value);
      }}
      dropdownMatchSelectWidth={false}
    >
      <Option value={1}>1+1</Option>
      <Option value={2}>2+2</Option>
    </TooltipSelect>
  );
};



ReactDOM.render(<Demo />, document.getElementById("app"));
