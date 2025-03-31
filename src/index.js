import { Select, Tooltip, TntdSelect, Ellipsis } from 'tntd';
import { memo } from 'react';
import { isArray, isEqual } from 'lodash';
import "./index.less"
const TooltipSelect = memo((props) => {
    const {
        children,
        value,
        isVirtual = false,
        placement,
        setTitle,
        optionFilterProp,
        filterOption,
        onChange,
        readOnly = false,
    } = props;

    const Option = isVirtual ? TntdSelect.Option : Select.Option;
    const temp = {};

    const filterOptionFunction = (input, option) => {
        if (Array.isArray(option)) {
            // 处理多选情况，option是数组
            const newOption = option.map(opt => ({
                ...opt,
                props: {
                    ...opt.props,
                    children: opt.props.originChildren || opt.props.children,
                },
            }));
            return filterOption(input, newOption);

        } else {
            // 处理单选情况，option是单个对象
            const newOption1 = {
                ...option,
                props: {
                    ...option.props,
                    children: option.props.originChildren || option.props.children,
                },
            };
            return filterOption(input, newOption1);
        };
    }

    const handleChange = (value, option) => {
        if (Array.isArray(option)) {
            // 处理多选情况，option是数组
            const newOptions = option.map(opt => ({
                ...opt,
                props: {
                    ...opt.props,
                    children: opt.props.originChildren || opt.props.children,
                },
            }));
            onChange(value, newOptions);
        } else {
            // 处理单选情况，option是单个对象
            const newOption1 = {
                ...option,
                props: {
                    ...option.props,
                    children: option.props.originChildren || option.props.children,
                },
            };
            onChange(value, newOption1);
        }
    };

    let tooltipChildren = [];
    if (children?.length > 0) {
        tooltipChildren = children.map((item) => {
            if (isArray(item)) {
                return item.map((item1) => {
                    if (item1?.props?.value !== undefined && item1?.props?.value !== null) {
                        return (
                            <Option {...item1.props} originChildren={item1.props.children} key={item1.props.value}>
                                <Tooltip title={setTitle ? setTitle(item1.props.children) : item1.props.children} placement={placement}>
                                    <span style={{ marginRight: '5px' }}>{item1.props.children}</span>
                                </Tooltip>
                            </Option>
                        );
                    }
                    return null;
                });
            }
            if (item?.props?.value !== undefined && item?.props?.value !== null) {
                return (
                    <Option {...item.props} originChildren={item.props.children} key={item.props.value}>
                        <Tooltip title={setTitle ? setTitle(item.props.children) : item.props.children} placement={placement}>
                            <span
                                className="content"
                                style={{
                                    marginRight: '5px',
                                    width: '95%',
                                    display: 'block',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {item.props.children}
                            </span>
                        </Tooltip>
                    </Option>
                );
            }
            return null;
        });
    }

    if (filterOption) {
        temp.filterOption = filterOptionFunction;
    }
    if (optionFilterProp) {
        temp.optionFilterProp = optionFilterProp === 'children' ? 'originChildren' : optionFilterProp;
    }

    if (readOnly) {
        const selectedOption = tooltipChildren.find((option) => option?.props?.value === value);
        const dom = selectedOption ? selectedOption.props.originChildren : '- -';
        return <Ellipsis title={dom}>{dom}</Ellipsis>;
    }

    return (
        <>
            {isVirtual ? (
                <TntdSelect {...props} {...temp} onChange={handleChange} className={`tooltip-select ${props.className || ''}`}>
                    {tooltipChildren}
                </TntdSelect>
            ) : (
                <Select {...props} {...temp} onChange={handleChange} className={`tooltip-select ${props.className || ''}`}>
                    {tooltipChildren}
                </Select>
            )}
        </>
    );
}, (pre, next) => {
    return (
        pre.isMemo &&
        pre?.value === next?.value &&
        isEqual(pre?.children?.length, next?.children?.length)
    );
});


export default TooltipSelect;