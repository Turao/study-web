"use server";

import { notFound } from 'next/navigation';
import { GetUserInfoRequest } from '../../proto/users/v1_pb'
import { UsersClient } from '../../proto/users/V1ServiceClientPb'

export async function FetchUserById(userId: string) {
    const client = new UsersClient('http://localhost:8080');
    const request = new GetUserInfoRequest();
    request.setId(userId);
    return client.getUserInfo(request)
        .then(response => response.getUser())
        .catch(err => {
            return undefined
        })
}

export default async function UserInfo({ userId }: { userId: string }) {
    const user = FetchUserById(userId);
    if (!user) {
        notFound()
    }

    return <>User</>
}