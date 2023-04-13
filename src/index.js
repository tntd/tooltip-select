import { Select, Tooltip } from 'antd';
import VirtualSelect from '@tntd/ant3-virtual-select';
import { memo } from 'react';
import { isEqual } from 'lodash';
const TooltipSelect = memo(
    (props) => {
        const { children, value, isVirtual = false, placement = 'top' } = props;
        const getTitle = (value) => {
            let label = '';
            let arr = [];
            if (!children?.length) {
                arr.push(children);
            } else {
                arr = children;
            }
            arr?.forEach((item) => {
                if (item?.props?.value === value) {
                    label = item?.props?.children;
                }
            });
            return label;
        };
        return (
            <>
                <Tooltip placement={placement} title={getTitle(value)}>
                    {isVirtual ? <VirtualSelect {...props}>{children}</VirtualSelect> : <Select {...props}>{children}</Select>}
                </Tooltip>
            </>
        );
    },
    (pre, next) => {
        return pre.isMemo && pre?.value === next?.value && isEqual(pre?.children?.length, next?.children?.length);
    }
);
export default TooltipSelect;
