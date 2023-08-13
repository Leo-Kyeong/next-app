'use client'

import React from "react";
import Link from "next/link";
import {useParams, useRouter} from "next/navigation";

export const Control = () => {
    const params = useParams();
    const router = useRouter();

    const deleteButtonHandle = () => {
          fetch('http://localhost:9999/topics/' + params.id, {
              method: 'DELETE'
          }).then((response) => {
              return response.json();
          }).then((topic) => {
              router.push('/');
              router.refresh();
          });
    };

    return (
        <>
            <ul>
                <li><Link href='/create'>Create</Link></li>
                {params.id ? <>
                    <li><Link href={'/update/' + params.id}>Update</Link></li>
                    <li><input type={'button'} value='delete' onClick={deleteButtonHandle}/></li>
                </> : null}
            </ul>
        </>
    );
}

export default Control;
