export const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const day = dateObj.getUTCDate();
    const month = dateObj.toLocaleString("default", { month: "short" });
    const year = dateObj.getUTCFullYear();
    return month + " " + day + ", " + year;
};

export const formatDateWithTime = (date: string) => {
    const dateObj = new Date(date);
    return `${formatDate(date)}, ${dateObj.toLocaleTimeString("en-US")}`;
};

export const formatUrl = (id: number, title: string) => {
    const formattedTitle = title.replace(/\s+/g, "-").toLowerCase();
    return id.toString() + "-" + formattedTitle;
};

export const spliceForumId = (id: string | undefined) => {
    return Number(id?.split("-")[0]);
};

export const spliceForumTitle = (id: string | undefined) => {
    const firstStr = id!.split("-")[1]
    const secondStr = id!.split("-")[2]; 
    return firstStr.charAt(0).toUpperCase() + firstStr.slice(1) + " " + secondStr.charAt(0).toUpperCase() + secondStr.slice(1);
}