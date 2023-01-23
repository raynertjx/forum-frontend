import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { threadServices } from "../../services/Services";
import { useAppDispatch } from "../../helpers/hooks";
import { threadActions } from "../../store/thread-slice";

type Prop = {
    formSubmitHandler: (event: React.FormEvent) => {};
    titleRef: React.Ref<HTMLInputElement>;
    contentRef: React.Ref<HTMLTextAreaElement>;
    titleValue: string;
    contentValue: string;
};

const ThreadForm: React.FC<Prop> = (props: Prop) => {
    return (
        <div className="flex justify-center">
            <form
                onSubmit={props.formSubmitHandler}
                className="w-8/12 flex flex-col gap-2"
            >
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="thread_title"
                        className="font-medium text-xl"
                    >
                        Title
                    </label>
                    <input
                        placeholder="Title"
                        type="text"
                        name="thread_title"
                        id="thread_title"
                        ref={props.titleRef}
                        defaultValue={props.titleValue}
                        className="rounded border-2"
                        maxLength={50}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="thread_content"
                        className="font-medium text-xl"
                    >
                        Content
                    </label>
                    <textarea
                        placeholder="Content"
                        name="thread_content"
                        id="thread_content"
                        ref={props.contentRef}
                        defaultValue={props.contentValue}
                        className="rounded border-2 h-44"
                        maxLength={450}
                    />
                </div>
                <div className="flex justify-end">
                    <input
                        type="submit"
                        value="Submit"
                        className="bg-blue-400 rounded py-1 px-4 font-medium transition hover:bg-blue-500"
                    />
                </div>
            </form>
        </div>
    );
};

export default ThreadForm;
