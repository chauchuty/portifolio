import { ReactNode } from "react";
import { Nav, NavProps } from "rsuite";

type NavSharedProps = {
    children: ReactNode
} & NavProps

function NavShared(props: NavSharedProps) {
    return (
        <Nav as='div' {...props}>
            {props.children}
        </Nav>
    )
}

export default NavShared;