import {FC} from "react";

interface Props {
    children: FC;
}

const Layout: FC<Props> = (props) => {
    return (
        <>
            <form>
                <h2>Create Layout</h2>
                {props.children}
            </form>
        </>
    );
}

export default Layout;
