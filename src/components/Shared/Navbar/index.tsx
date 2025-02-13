import { Navbar, NavbarProps } from "rsuite";

type NavbarSharedProps = {} & NavbarProps

export function NavbarShared(props: NavbarSharedProps) {

    return (
        <Navbar {...props}>
            {props.children}
        </Navbar>
    )
}