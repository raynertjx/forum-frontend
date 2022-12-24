import React from "react";

const ThreadForm: React.FC = () => {
    return (
        <form>
            <label htmlFor="thread_title">Thread Title</label>
            <input
                placeholder="Title"
                type="text"
                name="thread_title"
                id="thread_title"
            />
            <label htmlFor="thread_content">Content</label>
            <input
                placeholder="Content"
                type="text"
                name="thread_content"
                id="thread_content"
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default ThreadForm;
