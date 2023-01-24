import React, { useEffect } from "react";

import Title from "../components/UI/Title";
import ForumContainer from "../components/forum/ForumContainer";
import { useAppDispatch } from "../helpers/hooks";
import { categoryServices } from "../services/Services";
import { categoryActions } from "../store/category-slice";

const Forum: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(categoryActions.removeAllCategories());
        const fetchCategories = async () => {
            await categoryServices.get_categories().then((res) => {
                dispatch(categoryActions.getAllCategories(res.data));
            });
        };
        fetchCategories();
    }, []);

    return (
        <>
            <Title
                title="The Soccat Forum"
                desc="A place for wholesome banter!"
            />
            <ForumContainer />
        </>
    );
};

export default Forum;
