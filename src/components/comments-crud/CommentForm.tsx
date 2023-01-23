import React, { useRef } from "react";

type Prop = {
    formSubmitHandler: (event: React.FormEvent) => {};
    contentRef: React.Ref<HTMLTextAreaElement>;
    contentValue: string;
};

const CommentForm: React.FC<Prop> = (props: Prop) => {
    return (
        <div>
            <form onSubmit={props.formSubmitHandler} className="flex flex-col gap-2">
                <label htmlFor="comment_content" className="font-medium pt-2 pl-2">New Comment</label>
                <textarea
                    placeholder="Type your comment here!"
                    name="comment_content"
                    id="comment_content"
                    ref={props.contentRef}
                    defaultValue={props.contentValue}
                    className="h-40 p-4 rounded border-2"
                    maxLength={450}
                />
                <div className="flex justify-end"><input type="submit" value="Submit" className="bg-blue-400 transition py-1 px-4 font-medium rounded hover:bg-blue-500" /></div>
            </form>
        </div>
    );
};

export default CommentForm;
