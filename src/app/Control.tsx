'use client'

import React from "react";
import Link from "next/link";
import {useParams} from "next/navigation";

export const Control = () => {
    const params = useParams();

    return (
        <>
            <ul>
                <li><Link href='/create'>Create</Link></li>
                {params.id ? <>
                    <li><Link href={'/update/' + params.id}>Update</Link></li>
                    <li><input type={'button'} value='delete' /></li>
                </> : null}
            </ul>
        </>
    );
}

export default Control;
