import React, { useEffect } from "react";
import ForumContainer from "../components/forum/ForumContainer";
import Title from "../components/UI/Title";
import { useAppDispatch } from "../helpers/hooks";
import { threadActions } from "../store/thread-slice";
import { categoryServices, threadServices } from "../services/Services";
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
