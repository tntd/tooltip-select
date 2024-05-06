"use strict";

import React from "react";
import { isEqual } from "lodash";
import Tooltip from "tntd/es/tooltip";
import Select from "tntd/es/select";
import TntdSelect from "tntd/es/tntd-select";

const TooltipSelect = React.memo(
    (props) => {
        const { children, value, isVirtual = false, placement = 'top', setTitle } = props;

        const getTitle = (value) => {
            let label = "";
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
            <Tooltip placement={placement} title={setTitle ? setTitle(value) : getTitle(value)}>
                {isVirtual ? <TntdSelect {...props}>{children}</TntdSelect> : <Select {...props}>{children}</Select>}
            </Tooltip>
        );
    }, (pre, next) => {
        return pre.isMemo && pre?.value === next?.value && isEqual(pre?.children?.length, next?.children?.length);
    });

export default TooltipSelect;
