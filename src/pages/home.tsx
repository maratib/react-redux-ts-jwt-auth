import { ItemForm } from '@/components/ItemForm';
import apiService from '@/services';
import { IItem } from '@/types';
import React, { FC, useEffect, useState } from 'react';

type Props = {
    name?: string;
};

export const Home: FC<Props> = ({ name }) => {

    const imgRootUrl = import.meta.env.VITE_IMAGE_URL;

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<IItem[]>();

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                const response = await apiService.getPosts();
                setItems(response.data);
            } catch (err: any) {
                console.log(err.message);
            }
            setLoading(false);
        }

        fetchItems();


    }, []);

    return (
        <div>
            {loading && <h1 className='dark:text-red-500'>Loading . . .</h1>}

            {!loading && (

                <div>
                    <div><ItemForm /></div>
                    {items?.map(item => (

                        <div key={item.id}>
                            <span>{item.title}</span>
                            <img crossOrigin="anonymous" width="200" height="200" src={imgRootUrl + item.file} />
                            <span>{item.desc}</span>

                        </div>

                    ))}
                </div>

            )}




        </div>
    );
};