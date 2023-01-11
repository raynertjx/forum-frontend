import React, { useRef } from "react";

type Prop = {
    formSubmitHandler: (event: React.FormEvent) => {};
    contentRef: React.Ref<HTMLInputElement>;
    contentValue: string;
};

const CommentForm: React.FC<Prop> = (props: Prop) => {
    return (
        <form onSubmit={props.formSubmitHandler}>
            <label htmlFor="comment_content">Thread Title</label>
            <input
                placeholder="Type your comment here!"
                type="text"
                name="comment_content"
                id="comment_content"
                ref={props.contentRef}
                defaultValue={props.contentValue}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default CommentForm;
