import React, { MouseEventHandler, useRef } from "react";

type Prop = {
    formSubmitHandler: (event: React.FormEvent) => {};
    contentRef: React.Ref<HTMLTextAreaElement>;
    contentValue: string;
    textAreaSize: number;
    closeEditForm?: () => void;
    edit?: boolean;
};

const CommentForm: React.FC<Prop> = (props: Prop) => {
    
    return (
        <div>
            <form
                onSubmit={props.formSubmitHandler}
                className="flex flex-col gap-2"
                >
                {props.textAreaSize !== 24 && (
                    <label
                        htmlFor="comment_content"
                        className="font-medium pt-2 pl-2"
                    >
                        New Comment
                    </label>
                )}
                <textarea
                    placeholder="Type your comment here!"
                    name="comment_content"
                    id="comment_content"
                    ref={props.contentRef}
                    defaultValue={props.contentValue}
                    className={`h-${props.textAreaSize} p-4 rounded border-2`}
                    maxLength={400}
                />
                <div className="flex justify-end gap-2">
                    {props.edit && (
                        <button onClick={props.closeEditForm} type="button" className="bg-slate-200 transition py-1 px-4 font-medium rounded hover:bg-slate-300">
                            Cancel
                        </button>
                    )   }
                    <input
                        type="submit"
                        value="Submit"
                        className="bg-blue-400 transition py-1 px-4 font-medium rounded hover:bg-blue-500"
                    />
                </div>
            </form>
        </div>
    );
};

export default CommentForm;
