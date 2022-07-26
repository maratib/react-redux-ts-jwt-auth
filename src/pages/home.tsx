import React, { FC } from 'react';

type Props = {
    name?: string;
};

export const Home: FC<Props> = ({ name }) => {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};