import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigationType } from "react-router";
import { popFromModalIds, prependToStackHistory, removeFirstStackHistory } from "redux/slices/app";
import type { IRootState } from "redux/store";

const userStackListener = () => {
    const dispatch = useDispatch();
    const { key, state } = useLocation();
    const navType = useNavigationType();
    const openedModalIds = useSelector((state: IRootState) => state.app.openedModalIds);

    useEffect(() => {

    }, [])

    useEffect(() => {
        if (navType === "POP" && openedModalIds.length)
            dispatch(popFromModalIds());

        if (navType === "PUSH")
            dispatch(prependToStackHistory(state));
        else
            dispatch(removeFirstStackHistory());
    }, [key, navType])
}

export default userStackListener;