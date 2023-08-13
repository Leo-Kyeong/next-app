'use client'

import {FC} from "react";
import {useRouter} from "next/navigation";

interface Props {

}

const Create: FC<Props> = (props) => {
    const router = useRouter();

    return (
      <>
          <form onSubmit={event => {
                event.preventDefault();

                const title = event.target.title.value;
                const body = event.target.body.value;

                fetch(process.env.NEXT_PUBLIC_API_URL + `topics/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({title, body})
                }).then((response) => {
                    return response.json();
                }).then((topic) => {
                    router.push(`/read/${topic.id}`);
                    router.refresh();
                });
          }}>
              <h2>Create</h2>
              <p>
                  <input type="text" name="title" placeholder="title" />
              </p>
              <p>
                  <textarea name="body" placeholder="body"></textarea>
              </p>
              <p>
                  <input type="submit" value="create" />
              </p>
          </form>
      </>
    );
}

export default Create;
