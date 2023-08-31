import { Select, Tooltip } from 'antd';
import VirtualSelect from '@tntd/ant3-virtual-select';
import { memo, useCallback, useMemo, useState } from 'react';
import { isEqual } from 'lodash';

const TooltipSelect = memo(
    (props) => {
        const { children, value, isVirtual = false, placement = 'top', } = props;

        let Option = isVirtual ? VirtualSelect.Option : Select.Option
        // //获取添加Tooltip的option子项
        let tooltipChildren = children?.map(item => {
            return (
                <Option {...item?.props}>
                    <Tooltip title={item?.props?.children}>
                        {item?.props?.children}
                    </Tooltip>
                </Option>
            );
        });


        return (
            <>
                {isVirtual ?
                    <VirtualSelect {...props} >{tooltipChildren}</VirtualSelect>
                    : <Select {...props} >{tooltipChildren}</Select>}
            </>
        );
    },
    (pre, next) => {
        return pre.isMemo && pre?.value === next?.value && isEqual(pre?.children?.length, next?.children?.length);
    }
);
export default TooltipSelect;
