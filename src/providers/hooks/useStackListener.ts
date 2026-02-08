import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigationType } from "react-router";
import { popFromModalIds } from "redux/slices/app";
import type { IRootState } from "redux/store";

const userStackListener = () => {
    const dispatch = useDispatch();
    const { key } = useLocation();
    const navType = useNavigationType();
    const openedModalIds = useSelector((state: IRootState) => state.app.openedModalIds);

    useEffect(() => {
        if (navType === "POP" && openedModalIds.length)
            dispatch(popFromModalIds());
    }, [key, navType])
}

export default userStackListener;