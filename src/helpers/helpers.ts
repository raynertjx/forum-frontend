export const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const day = dateObj.getUTCDate();
    const month = dateObj.toLocaleString("default", { month: "short" });
    const year = dateObj.getUTCFullYear();
    return month + " " + day + ", " + year;
};

export const formatUrl = (id: number, title: string) => {
    const formattedTitle = title.replace(/\s+/g, "-").toLowerCase();
    return id.toString() + "-" + formattedTitle;
};
