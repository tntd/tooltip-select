import { Select, Tooltip, TntdSelect, Ellipsis } from 'tntd';
import { memo } from 'react';
import { isArray, isEqual } from 'lodash';

const TooltipSelect = memo(
    (props) => {
        const {
            children,
            value,
            isVirtual = false,
            placement = 'top',
            setTitle,
            optionFilterProp,
            filterOption = undefined,
            readOnly = false // 增加 readOnly 属性
        } = props;

        let Option = isVirtual ? TntdSelect.Option : Select.Option;
        let temp = {}; // 将原始的filterOption函数引用保存到一个新的变量

        const filterOptionFunction = (input, option) => {
            // 创建一个新的option对象，其中props.children是由props.originChildren替换的
            const newOption = {
                ...option,
                props: {
                    ...option.props,
                    children: option.props.originChildren || option.props.children
                }
            };
            // 调用原始的filterOption函数
            return filterOption(input, newOption);
        };

        // 获取添加Tooltip的option子项
        let tooltipChildren = [];

        tooltipChildren = children?.map((item) => {
            if (isArray(item)) {
                return item?.map((item1) => {
                    if (item1?.props?.value !== undefined && item1?.props?.value !== null) {
                        return (
                            <Option {...item1?.props} originChildren={item1?.props.children}>
                                <Tooltip title={setTitle ? setTitle(item1?.props?.children) : item1?.props?.children}>
                                    <span style={{ marginRight: '5px' }}>{item1?.props?.children}</span>
                                </Tooltip>
                            </Option>
                        );
                    }
                    return false;
                });
            }
            if (item?.props?.value !== undefined && item?.props?.value !== null) {
                return (
                    <Option {...item?.props} originChildren={item?.props.children}>
                        <Tooltip title={setTitle ? setTitle(item?.props?.children) : item?.props?.children}>
                            <span style={{ marginRight: '5px' }}>{item?.props?.children}</span>
                        </Tooltip>
                    </Option>
                );
            }
            return false;
        });

        if (props.filterOption) {
            temp.filterOption = filterOptionFunction;
        }
        if (props.optionFilterProp) {
            temp.optionFilterProp = props.optionFilterProp === 'children' ? 'originChildren' : props.optionFilterProp;
        }

        if (readOnly) {
            // 如果是只读模式，直接显示选中内容而不渲染Select组件
            const selectedOption = tooltipChildren?.find(
                (option) => option?.props?.value === value
            );
            const dom = selectedOption ? selectedOption.props.originChildren : null
            return (
                <div style={{ display: 'inline-block', lineHeight: "32px", width: "100%" }}>
                    <Ellipsis title={dom}>{dom}</Ellipsis>
                </div>
            );
        }

        return (
            <>
                {isVirtual ? (
                    <TntdSelect {...props} {...temp}>
                        {tooltipChildren}
                    </TntdSelect>
                ) : (
                    <Select {...props} {...temp}>
                        {tooltipChildren}
                    </Select>
                )}
            </>
        );
    },
    (pre, next) => {
        return (
            pre.isMemo &&
            pre?.value === next?.value &&
            isEqual(pre?.children?.length, next?.children?.length)
        );
    }
);

export default TooltipSelect;
