import { Select, Tooltip } from 'antd';
import VirtualSelect from '@tntd/ant3-virtual-select';
import { memo } from 'react';
import { isEqual } from 'lodash';
const Option=Select.Option;
const TooltipSelect = memo(
    (props) => {
        debugger
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
        let tooltipChildren = children?.map(item=>{
            return item=<Option {...item?.props}><Tooltip title={getTitle(item?.props?.value)}>{item?.props?.children}</Tooltip></Option>
            // return item
        });
        return (
            <>
                {/* <Tooltip placement={placement} title={getTitle(value)}> */}
                    {isVirtual ? <VirtualSelect {...props}>{tooltipChildren}</VirtualSelect> : <Select {...props}>{tooltipChildren}</Select>}
                {/* </Tooltip> */}
            </>
        );
    },
    (pre, next) => {
        return pre.isMemo && pre?.value === next?.value && isEqual(pre?.children?.length, next?.children?.length);
    }
);
export default TooltipSelect;
