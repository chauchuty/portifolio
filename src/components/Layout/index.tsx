import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Content, CustomProvider, Footer, Header, Sidebar } from "rsuite";
import { RootState } from "../../features/store";
import { toggleTheme } from "../../features/theme/themeSlice";

export function LayoutComponent() {
    const theme = useSelector((state: RootState) => state.theme)
    const dispatch = useDispatch();

    const alterarTema = () => {
      dispatch(toggleTheme());
    };

    return (
        <CustomProvider theme={theme.mode}>
            <Container>
                <Header>Header</Header>
                <Container>
                    <Content>
                        <Button onClick={alterarTema}>Alterar</Button>
                    </Content>
                    <Sidebar>Sidebar</Sidebar>
                </Container>
                <Footer>Footer</Footer>
            </Container>
        </CustomProvider>
    )
}