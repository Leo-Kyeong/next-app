import {FC} from "react";

interface Props {
    params: {
        id: string;
    };
}

const Read: FC<Props> = (props) => {
    return (
      <>
          <h2>Read Component!</h2>
          parameters : {props.params.id}
      </>
    );
}

export default Read;
