'use client'

import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const Update = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const router = useRouter();
    const params = useParams();

    useEffect(() => {
        fetch('http://localhost:9999/topics/' + params.id)
            .then((response) => {
                return response.json();
            })
            .then((topic) => {
                setTitle(topic.title);
                setBody(topic.body);
            });
    }, []);

    return (
        <>
            <form onSubmit={event => {
                event.preventDefault();

                const title = event.target.title.value;
                const body = event.target.body.value;

                fetch(`http://localhost:9999/topics/` + params.id, {
                    method: 'PATCH',
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
                <p>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </p>
                <p>
                    <textarea
                        name="body"
                        placeholder="body"
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                    ></textarea>
                </p>
                <p>
                    <input type="submit" value="update" />
                </p>
            </form>
        </>
    );
};

export default Update;
