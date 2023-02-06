import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootType } from "../redux/store";

export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;
