# 4.x版本基于tntd2.x

# @tntd/ant3-virtual-select

基于 ant3 实现带悬浮显示的下拉列表

## 安装

```bash
npm i @tntd/tooltip-select
```

## 用法

所有 API 同 ant3 Select

## props 参数：

|   参数    |    类型     | 默认值 | 是否必填 |             说明             |
| :-------: | :---------: | :----: | :------: | :--------------------------: |
| setTitle  | function(e) |   无   |  非必填  | 自定义 tooltip 的 title 节点 |
| isVirtual |   Boolean   | false  |  非必填  |     列表是否采用虚拟滚动     |
| placement |   String   | top  |  非必填  |     tooltip位置     |
| isMemo |   Boolean   | false  |  非必填  |     列表是否采用监听值及children控制渲染     |


## 示例

```javascript
import { useState } from "react";
import TooltipSelect from "@tntd/tooltip-select";
import { Select, Tooltip } from "antd";
const Option = Select.Option;

export default (props) => {
  const [title, setTitle] = useState();
  const aTitle = (title) => {
    return <a>{title}</a>;
  };
  return (
    <TooltipSelect
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
```
