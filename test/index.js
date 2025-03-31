
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
  let words = ["22111", "苹果", "橙子", "香蕉", "柠檬", "蓝莓12312312321312321321312321312312312312", "草莓", "樱桃", "葡萄", "番石榴", "西瓜", "杏子", "李子", "桃子", "梨", "芒果", "木瓜", "红枣", "桑葚", "猕猴桃", "柿子"]

  return (
    <div
      style={{ marginTop: "200px" }}>
      <TooltipSelect
        dropdownMatchSelectWidth={false}
        isVirtual
        value={title}
        placement="left"
        optionFilterProp="children"
        setTitle={(value) => {
          return <a><div style={{ width: "5px", height: "5px", background: "red" }}></div>{value}</a>
        }}
        filterOption={(input, option) =>
          (Array.isArray(option.props.children) ? option.props.children.join("") : option.props.children).toLowerCase().indexOf(input.toLowerCase()) >= 0}

        onChange={(value, option) => {
          debugger
          setTitle(value);
        }}
        style={{ width: "150px" }}
        allowClear
        showSearch
      >

        {words?.map((item, index) => (
          <Option key={index} value={index} data={index + "666"}>
            <sup >{index}</sup>
            {item}
          </Option>
        ))}

      </TooltipSelect>
      <TooltipSelect
        mode="multiple"
        dropdownMatchSelectWidth={false}
        isVirtual
        value={title}
        placement="left"
        optionFilterProp="children"
        setTitle={(value) => {
          return <a><div style={{ width: "5px", height: "5px", background: "red" }}></div>{value}</a>
        }}
        filterOption={(input, option) =>
          (Array.isArray(option.props.children) ? option.props.children.join("") : option.props.children).toLowerCase().indexOf(input.toLowerCase()) >= 0}

        onChange={(value, option) => {
          debugger
          setTitle(value);
        }}
        style={{ width: "150px" }}
        allowClear
        showSearch
      >

        {words?.map((item, index) => (
          <Option key={index} value={index} data={index + "666"}>
            <sup >{index}</sup>
            {item}
          </Option>
        ))}

      </TooltipSelect>
      <Select
        dropdownMatchSelectWidth={false}
        isVirtual
        value={title}
        placement="left"
        optionFilterProp="children"
        setTitle={(value) => {
          return <a><div style={{ width: "5px", height: "5px", background: "red" }}></div>{value}</a>
        }}
        filterOption={(input, option) =>
          (Array.isArray(option.props.children) ? option.props.children.join("") : option.props.children).toLowerCase().indexOf(input.toLowerCase()) >= 0}

        onChange={(value, option) => {
          debugger
          setTitle(value);
        }}
        style={{ width: "150px" }}
        allowClear
        showSearch
      >

        {words?.map((item, index) => (
          <Option key={index} value={index} data={index + "666"}>
            <sup >{index}</sup>
            {item}
          </Option>
        ))}

      </Select>
      <Select
        mode="multiple"
        dropdownMatchSelectWidth={false}
        isVirtual
        value={title}
        placement="left"
        optionFilterProp="children"
        setTitle={(value) => {
          return <a><div style={{ width: "5px", height: "5px", background: "red" }}></div>{value}</a>
        }}
        filterOption={(input, option) =>
          (Array.isArray(option.props.children) ? option.props.children.join("") : option.props.children).toLowerCase().indexOf(input.toLowerCase()) >= 0}

        onChange={(value, option) => {
          debugger
          setTitle(value);
        }}
        style={{ width: "150px" }}
        allowClear
        showSearch
      >

        {words?.map((item, index) => (
          <Option key={index} value={index} data={index + "666"}>
            <sup >{index}</sup>
            {item}
          </Option>
        ))}

      </Select>
    </div>


  );
};



ReactDOM.render(<Demo />, document.getElementById("app"));
