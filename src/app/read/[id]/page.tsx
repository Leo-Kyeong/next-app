import {FC} from "react";

interface Props {
    params: {
        id: string;
    };
}

const Read: FC<Props> = async (props) => {
    const response  = await fetch(`http://localhost:9999/topics/${props.params.id}`, {cache: "no-store"});
    const topic: {id: number, title: string, body: string} = await response.json();

    return (
      <>
          <h2>{topic.title}</h2>
          {topic.body}
      </>
    );
}

export default Read;
