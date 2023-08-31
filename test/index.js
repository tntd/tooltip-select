
import { useState } from "react";
import TooltipSelect from "../src/index";
import ReactDOM from "react-dom";
import { Select, Tooltip } from "tntd";
const Option = Select.Option;

const Demo = (props) => {
  const [title, setTitle] = useState();
  const aTitle = (title) => {
    return <a>{title}</a>;
  };
  return (
    <TooltipSelect
      dropdownMatchSelectWidth={false}
      isVirtual
      value={title}
      onChange={(value) => {
        setTitle(value);
      }}
      style={{ width: "100px" }}
      allowClear
      showSearch
    >
      {new Array(100).fill(0)?.map((item, index) => (
        <Option key={index} value={index}>
          {index === 2 && 22222222}
          {index !== 2 && (index % 2 === 0 ? Math.random(10) + Math.random(1) * 0.00001 : index)}
        </Option>
      ))}
    </TooltipSelect>
  );
};



ReactDOM.render(<Demo />, document.getElementById("app"));
