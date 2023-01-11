import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { threadServices } from "../../services/Services";
import { useAppDispatch } from "../../helpers/hooks";
import { threadActions } from "../../store/thread-slice";

type Prop = {
    formSubmitHandler: (event: React.FormEvent) => {};
    titleRef: React.Ref<HTMLInputElement>;
    contentRef: React.Ref<HTMLInputElement>;
    titleValue: string;
    contentValue: string;
};

const ThreadForm: React.FC<Prop> = (props: Prop) => {
    return (
        <form onSubmit={props.formSubmitHandler}>
            <label htmlFor="thread_title">Thread Title</label>
            <input
                placeholder="Title"
                type="text"
                name="thread_title"
                id="thread_title"
                ref={props.titleRef}
                defaultValue={props.titleValue}
            />
            <label htmlFor="thread_content">Content</label>
            <input
                placeholder="Content"
                type="text"
                name="thread_content"
                id="thread_content"
                ref={props.contentRef}
                defaultValue={props.contentValue}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default ThreadForm;
