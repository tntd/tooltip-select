
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
  let words = ["22", "苹果", "橙子", "香蕉", "柠檬", "蓝莓", "草莓", "樱桃", "葡萄", "番石榴", "西瓜", "杏子", "李子", "桃子", "梨", "芒果", "木瓜", "红枣", "桑葚", "猕猴桃", "柿子"]

  return (
    <Select
      dropdownMatchSelectWidth={false}
      isVirtual
      value={title}
      optionFilterProp="children"
      setTitle={(value) => {
        return <a><div style={{ width: "5px", height: "5px", background: "red", display: "inline-block" }}></div>{value}</a>
      }}
      // filterOption={(input, option) =>
      //   (Array.isArray(option.props.children) ? option.props.children.join("") : option.props.children).toLowerCase().indexOf(input.toLowerCase()) >= 0}

      onChange={(value) => {
        setTitle(value);
      }}
      style={{ width: "100px" }}
      allowClear
      showSearch
    >
      {/* {true && new Array(1000).fill(0)?.map((item, index) => (
        <Option key={index} value={index}>
          {false && 1}
          {true && <div>{index}</div>}
          {true && <div>{Math.random(10) + Math.random(1) * 0.00001}</div>}

        </Option>
      ))}
      {false && new Array(1000).fill(0)?.map((item, index) => (
        <Option key={index} value={index}>
          {false && 1}
          {true && <div>{index}</div>}
          {true && <div>{Math.random(10) + Math.random(1) * 0.00001}</div>}

        </Option>
      ))} */}
      {words?.map((item, index) => (
        <Option key={index} value={index}>
          <sup >111</sup>
          {item}
        </Option>
      ))}
    </Select>
  );
};



ReactDOM.render(<Demo />, document.getElementById("app"));
