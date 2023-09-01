import { Select, Tooltip, TntdSelect } from 'tntd';
import { memo, useCallback, useMemo, useState } from 'react';
import { isEqual } from 'lodash';

const TooltipSelect = memo(
    (props) => {
        const { children, value, isVirtual = false, placement = 'top', setTitle } = props;

        let Option = isVirtual ? TntdSelect.Option : Select.Option
        // //获取添加Tooltip的option子项
        let tooltipChildren = children?.map(item => {
            return (
                <Option {...item?.props}>
                    <Tooltip title={setTitle ? setTitle(item?.props?.children) : item?.props?.children}>
                        <span style={{ marginRight: "5px" }}>
                            {item?.props?.children}
                        </span>
                    </Tooltip>
                </Option>
            );
        });


        return (
            <>
                {isVirtual ?
                    <TntdSelect {...props} >{tooltipChildren}</TntdSelect>
                    : <Select {...props} >{tooltipChildren}</Select>}
            </>
        );
    },
    (pre, next) => {
        return pre.isMemo && pre?.value === next?.value && isEqual(pre?.children?.length, next?.children?.length);
    }
);
export default TooltipSelect;
