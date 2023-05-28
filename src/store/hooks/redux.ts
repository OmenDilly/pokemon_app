import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, AppStore, RootState } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
