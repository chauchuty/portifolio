import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { toggleTheme } from "../../features/theme/themeSlice";
import { Outlet } from "react-router";
import { NavbarCustom } from "../Custom/Navbar";

type LayoutComponentProps = {}

export function LayoutComponent(props: LayoutComponentProps) {
    const theme = useSelector((state: RootState) => state.theme)
    const dispatch = useDispatch();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <>
            <Outlet />
        </>

    )
}